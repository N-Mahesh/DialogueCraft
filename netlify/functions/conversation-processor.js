const { Anthropic } = require('@anthropic-ai/sdk');

// Initialize Claude client with environment variable
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Subagent system for conversation intelligence
class ConversationAnalyzerAgent {
  constructor() {
    this.name = "ConversationAnalyzer";
  }

  async analyze(conversationInput) {
    const analysisPrompt = `You are a conversation analysis specialist. Analyze the following conversation input and provide structured insights:
npm 
Input: "${conversationInput}"

Provide analysis in this JSON format:
{
  "sentiment": "positive|neutral|negative",
  "intent": "question|objection|interest|complaint|compliment",
  "emotionalTone": "calm|frustrated|excited|confused|skeptical",
  "keyTopics": ["topic1", "topic2", "topic3"],
  "urgencyLevel": "low|medium|high",
  "contextualCues": ["cue1", "cue2"],
  "recommendedResponseTone": "empathetic|professional|enthusiastic|reassuring"
}

Be precise and analytical in your assessment.`;

    try {
      const response = await anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 300,
        messages: [{ role: 'user', content: analysisPrompt }],
        temperature: 0.1
      });

      const analysisText = response.content[0].text;
      
      // Try to parse JSON, fallback to basic analysis if parsing fails
      try {
        return JSON.parse(analysisText);
      } catch (parseError) {
        console.error('Analysis parsing error:', parseError);
        return {
          sentiment: "neutral",
          intent: "question",
          emotionalTone: "calm",
          keyTopics: [],
          urgencyLevel: "medium",
          contextualCues: [],
          recommendedResponseTone: "professional"
        };
      }
    } catch (error) {
      console.error('Conversation analysis error:', error);
      throw error;
    }
  }
}

class ResponseGeneratorAgent {
  constructor() {
    this.name = "ResponseGenerator";
  }

  async generate(conversationInput, conversationStrategy, analysis) {
    const responsePrompt = `You are an expert conversation strategist. Generate a strategic response based on:

Conversation Input: "${conversationInput}"
Strategy Context: "${conversationStrategy}"
Analysis: ${JSON.stringify(analysis)}

Create a response that:
1. Acknowledges the person's perspective with empathy
2. Addresses their specific concerns or interests
3. Provides value and builds trust
4. Guides toward a positive outcome
5. Matches the recommended tone: ${analysis.recommendedResponseTone}

Generate a natural, conversational response (2-4 sentences) that demonstrates understanding while strategically advancing the conversation. Be authentic and avoid sounding scripted.`;

    try {
      const response = await anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 200,
        messages: [{ role: 'user', content: responsePrompt }],
        temperature: 0.7
      });

      return response.content[0].text.trim();
    } catch (error) {
      console.error('Response generation error:', error);
      throw error;
    }
  }
}

class QualityAssessorAgent {
  constructor() {
    this.name = "QualityAssessor";
  }

  async assess(originalInput, generatedResponse, analysis) {
    const assessmentPrompt = `Evaluate the quality of this conversation response:

Original Input: "${originalInput}"
Generated Response: "${generatedResponse}"
Context Analysis: ${JSON.stringify(analysis)}

Assess the response on:
1. Relevance to the original input (0-10)
2. Emotional appropriateness (0-10)
3. Strategic value (0-10)
4. Natural flow (0-10)
5. Professional tone (0-10)

Provide assessment in JSON format:
{
  "overallScore": 0-10,
  "relevanceScore": 0-10,
  "emotionalScore": 0-10,
  "strategicScore": 0-10,
  "naturalScore": 0-10,
  "professionalScore": 0-10,
  "improvements": ["suggestion1", "suggestion2"],
  "strengths": ["strength1", "strength2"]
}`;

    try {
      const response = await anthropic.messages.create({
        model: 'claude-3-5-haiku-20241022',
        max_tokens: 250,
        messages: [{ role: 'user', content: assessmentPrompt }],
        temperature: 0.1
      });

      const assessmentText = response.content[0].text;
      
      try {
        return JSON.parse(assessmentText);
      } catch (parseError) {
        console.error('Assessment parsing error:', parseError);
        return {
          overallScore: 7,
          relevanceScore: 7,
          emotionalScore: 7,
          strategicScore: 7,
          naturalScore: 7,
          professionalScore: 7,
          improvements: ["Consider more specific examples"],
          strengths: ["Professional tone", "Clear communication"]
        };
      }
    } catch (error) {
      console.error('Quality assessment error:', error);
      throw error;
    }
  }
}

class ContextManagerAgent {
  constructor() {
    this.name = "ContextManager";
    this.conversationHistory = [];
  }

  addToHistory(input, response, analysis, quality) {
    const historyItem = {
      timestamp: new Date().toISOString(),
      input,
      response,
      analysis,
      quality,
      sessionId: this.generateSessionId()
    };

    this.conversationHistory.push(historyItem);
    
    // Keep only last 10 items for context
    if (this.conversationHistory.length > 10) {
      this.conversationHistory.shift();
    }

    return historyItem;
  }

  getRecentContext(limit = 3) {
    return this.conversationHistory.slice(-limit);
  }

  generateSessionId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

// Main handler function
exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { conversationInput, conversationStrategy } = JSON.parse(event.body);

    if (!conversationInput || !conversationStrategy) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Missing required parameters: conversationInput and conversationStrategy' 
        }),
      };
    }

    // Initialize subagents
    const analyzer = new ConversationAnalyzerAgent();
    const generator = new ResponseGeneratorAgent();
    const assessor = new QualityAssessorAgent();
    const contextManager = new ContextManagerAgent();

    console.log('Processing conversation with subagents...');

    // Step 1: Analyze the conversation input
    const analysis = await analyzer.analyze(conversationInput);
    console.log('Analysis completed:', analysis);

    // Step 2: Generate strategic response
    const response = await generator.generate(conversationInput, conversationStrategy, analysis);
    console.log('Response generated:', response);

    // Step 3: Assess response quality
    const quality = await assessor.assess(conversationInput, response, analysis);
    console.log('Quality assessment completed:', quality);

    // Step 4: Update conversation context
    const historyItem = contextManager.addToHistory(conversationInput, response, analysis, quality);

    // Return comprehensive result
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        response: response,
        analysis: analysis,
        quality: quality,
        metadata: {
          model: 'claude-3-5-sonnet-20241022',
          timestamp: new Date().toISOString(),
          processingTime: Date.now() - parseInt(context.requestId.split('-')[0], 16),
          sessionId: historyItem.sessionId,
          subagentsUsed: ['ConversationAnalyzer', 'ResponseGenerator', 'QualityAssessor', 'ContextManager']
        }
      }),
    };

  } catch (error) {
    console.error('Conversation processing error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Failed to process conversation',
        details: error.message,
        fallbackResponse: "I understand your point. Let me think about this and provide you with a thoughtful response that addresses your concerns."
      }),
    };
  }
};