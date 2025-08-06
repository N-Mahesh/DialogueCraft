# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DialogueCraft is an advanced conversation intelligence web application that provides real-time AI coaching and strategic response generation. It uses speech recognition to capture live conversations and generates intelligent responses using Anthropic's Claude API via a serverless architecture with specialized subagents.

## Architecture

### Core Components

- **index.html**: Main application interface with comprehensive embedded CSS and JavaScript
  - Contains all UI styling and primary application logic (1600+ lines)
  - Implements speech recognition using Web Speech API
  - Manages conversation strategies and Claude AI model selection
  - Handles theme switching (light/dark mode) with CSS custom properties
  - Includes complete conversation management system with preset handling

- **app.js**: Extended functionality and keyboard shortcuts
  - Provides keyboard shortcuts (Spacebar for recording toggle, Alt+H for history)
  - Adds conversation history display functionality
  - No longer handles API keys (moved to serverless functions)

- **utils.js**: Comprehensive utility classes and helper functions
  - `AudioProcessor`: Advanced audio visualization, processing, and WAV conversion
  - `UIStateManager`: Application state management (ready, listening, processing, error)
  - `APIKeyManager`: Legacy API key management (not used in current Claude implementation)
  - `ThemeManager`: Theme switching functionality
  - `ConversationAnalyzer`: Advanced conversation analysis with sentiment detection
  - `ResponseQualityTracker`: Response quality metrics and assessment

- **styles.css**: Additional UI component styling
  - CSS variables for consistent theming
  - Status indicators and audio visualizer styles
  - Responsive design adjustments

### Serverless Architecture

- **netlify/functions/conversation-processor.js**: Main AI processing endpoint
  - Implements sophisticated subagent system with Claude AI
  - `ConversationAnalyzerAgent`: Analyzes sentiment, intent, and emotional tone
  - `ResponseGeneratorAgent`: Creates strategic conversation responses
  - `QualityAssessorAgent`: Assesses response quality and provides improvements
  - `ContextManagerAgent`: Manages conversation history and context
  - Uses Claude 3.5 Sonnet for analysis/generation, Claude 3.5 Haiku for quality assessment

### Key Features

1. **Real-time Speech Recognition**: Browser Web Speech API integration
2. **Claude AI Integration**: Advanced AI via Anthropic Claude API with subagent architecture
3. **Conversation Strategies**: Predefined presets (Executive Reframer, Negotiation Expert, Empathetic Coach)
4. **Audio Visualization**: Real-time audio level visualization during recording
5. **Persistent History**: Browser localStorage for conversation exchanges
6. **Theme Support**: Light/dark mode with CSS custom properties
7. **Serverless Processing**: Secure API key management via Netlify functions

### Data Flow

1. Speech input captured via Web Speech API
2. Transcription displayed in real-time
3. Input sent to `/api/conversation-processor` Netlify function
4. Subagent system processes input through multiple Claude API calls:
   - Analysis agent evaluates sentiment, intent, emotional tone
   - Generator agent creates strategic response based on conversation strategy
   - Quality assessor evaluates and suggests improvements
   - Context manager tracks conversation history
5. Comprehensive response returned with analysis, quality metrics, and metadata
6. Response displayed with quality indicators
7. Conversation saved to localStorage

### State Management

Application uses `UIStateManager` with four states:
- `READY`: Application ready for input
- `LISTENING`: Actively recording speech
- `PROCESSING`: Generating AI response via serverless function
- `ERROR`: Error state with user feedback

### Storage

Browser localStorage stores:
- `active_strategy`: Current conversation strategy prompt
- `selected_engine`: Selected Claude model (claude-3-5-sonnet, claude-3-5-haiku, claude-3-opus)
- `dialogue_history`: Conversation history array with metadata
- `strategic_presets`: Custom conversation strategy presets
- `theme_mode`: Theme preference (light/dark)

## Development Commands

### Local Development

```bash
# Install dependencies
npm install

# Start Netlify dev server (includes functions)
npm run dev

# Access application at http://localhost:8888
```

### Production Deployment

```bash
# Deploy to Netlify
npm run deploy
```

### Environment Setup

Create `.env` file with:
```
ANTHROPIC_API_KEY=your_claude_api_key_here
```

## Configuration

### Claude Models
Supported Claude models via serverless functions:
- `claude-3-5-sonnet` (Advanced): Primary analysis and response generation
- `claude-3-5-haiku` (Rapid): Quality assessment and quick processing
- `claude-3-opus` (Premium): Highest quality analysis

### Conversation Strategies
Built-in strategies with specialized prompts:
- Executive Reframer: Business communication and strategic thinking
- Negotiation Expert: Deal-making and conflict resolution
- Empathetic Coach: Personal conversations and emotional intelligence

### API Configuration
The serverless function endpoint `/api/conversation-processor` expects:
```javascript
{
  "conversationInput": "User's speech input",
  "conversationStrategy": "Strategy prompt text",
  "selectedModel": "claude-3-5-sonnet" // optional
}
```

Returns comprehensive analysis with:
- Strategic response text
- Sentiment and intent analysis
- Quality assessment scores
- Processing metadata

## File Structure Notes

- Main application logic concentrated in `index.html` (self-contained)
- Serverless functions handle all Claude AI processing securely
- No client-side API key management (security enhancement)
- Modular utility classes provide reusable functionality
- CSS custom properties enable consistent theming across light/dark modes
- Audio processing includes WAV conversion and visualization capabilities