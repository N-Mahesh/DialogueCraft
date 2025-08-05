# DialogueCraft - Master Every Conversation with AI

<div align="center">

![DialogueCraft Banner](https://img.shields.io/badge/DialogueCraft-Conversation%20Intelligence-blue?style=for-the-badge&logo=openai)

**An advanced conversation intelligence platform powered by Claude AI and intelligent subagent architecture**

[![Made with HTML5](https://img.shields.io/badge/Made%20with-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Powered by Claude AI](https://img.shields.io/badge/Powered%20by-Claude%20AI-FF6B35?style=flat-square&logo=anthropic&logoColor=white)](https://www.anthropic.com/)
[![Deployed on Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

[🚀 Live Demo](#) • [📖 Documentation](#documentation) • [🛠️ Installation](#installation--deployment) • [🤝 Contributing](#contributing)

</div>

## 🎯 Overview

DialogueCraft transforms challenging conversations into opportunities through real-time AI coaching and strategic response generation. Using advanced speech recognition and Claude AI's powerful language models, it provides intelligent conversation assistance with specialized subagents for analysis, response generation, and quality assessment.

### ✨ Key Features

- 🎙️ **Real-time Speech Recognition** - Browser-based Web Speech API integration
- 🤖 **Claude AI Integration** - Powered by Anthropic's most advanced models
- 🧠 **Intelligent Subagent Architecture** - Specialized AI agents for comprehensive conversation analysis
- 📚 **Strategic Conversation Presets** - Executive Reframer, Negotiation Expert, Empathetic Coach
- 📊 **Audio Visualization** - Real-time audio level monitoring during recording
- 📝 **Persistent History** - Local storage of conversation exchanges with analytics
- 🎨 **Modern UI/UX** - Responsive design with light/dark mode support
- 🔐 **Secure & Private** - Server-side API key management, local data storage

## 🏗️ Architecture

### Subagent System

DialogueCraft employs a sophisticated multi-agent architecture:

| Agent | Purpose | Model |
|-------|---------|-------|
| **ConversationAnalyzerAgent** | Sentiment analysis, intent detection, context understanding | Claude 3.5 Sonnet |
| **ResponseGeneratorAgent** | Strategic response creation and tone optimization | Claude 3.5 Sonnet |
| **QualityAssessorAgent** | Response evaluation and improvement suggestions | Claude 3.5 Haiku |
| **ContextManagerAgent** | Conversation history and session management | Local Processing |

### Technology Stack

- **Frontend**: HTML5, CSS3 (Custom Properties), Vanilla JavaScript
- **Backend**: Netlify Serverless Functions (Node.js)
- **AI/ML**: Anthropic Claude API (3.5 Sonnet, 3.5 Haiku, 3 Opus)
- **Speech Processing**: Web Speech API
- **Styling**: Custom CSS with modern design patterns
- **Deployment**: Netlify with automatic CI/CD

## 📦 Installation & Deployment

### Prerequisites

- Node.js 18+ or higher
- Netlify account (for deployment)
- Anthropic API key ([Get one here](https://console.anthropic.com/))

### Local Development

1. **Clone and Setup**
   ```bash
   git clone https://github.com/yourusername/ConvoAssistant.git
   cd ConvoAssistant
   npm install
   ```

2. **Environment Configuration**
   Create a `.env` file in the root:
   ```env
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   
4. **Access Application**
   Open `http://localhost:8888` in your browser

### Production Deployment

#### Netlify Deployment (Recommended)

1. **Connect Repository**
   - Push code to GitHub/GitLab
   - Connect repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `.`

2. **Environment Variables**
   In Netlify dashboard, add:
   ```
   ANTHROPIC_API_KEY = your_anthropic_api_key
   ```

3. **Deploy**
   Netlify automatically deploys on push to main branch

#### Manual Deployment

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Deploy Static Files**
   Upload all files to your hosting provider

## 🎯 Usage Guide

### Getting Started

1. **Choose Strategy**: Select from predefined conversation strategies or create custom ones
2. **Select AI Model**: Choose between Claude 3.5 Sonnet (Advanced), 3.5 Haiku (Rapid), or 3 Opus (Premium)
3. **Start Listening**: Click the microphone button to begin speech recognition
4. **Receive Coaching**: Get real-time strategic responses from Claude AI
5. **Review & Learn**: Access conversation history and quality metrics

### Conversation Strategies

| Strategy | Best For | Focus |
|----------|----------|-------|
| **Executive Reframer** | Business meetings, leadership conversations | Strategic thinking, opportunity identification |
| **Negotiation Expert** | Deal-making, conflict resolution | Win-win outcomes, stakeholder alignment |
| **Empathetic Coach** | Personal conversations, coaching scenarios | Emotional intelligence, supportive guidance |

### Keyboard Shortcuts

- **Spacebar** - Toggle recording (when not in input fields)
- **Alt + H** - Show conversation history
- **Escape** - Close open dialogs
- **🌓 Button** - Toggle dark/light theme

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key for Claude access | ✅ Yes | None |

### Claude Model Selection

| Model | Speed | Quality | Use Case |
|-------|--------|---------|----------|
| `claude-3-5-sonnet` | Medium | Highest | Complex analysis, strategic responses |
| `claude-3-5-haiku` | Fastest | High | Quick responses, real-time processing |
| `claude-3-opus` | Slower | Premium | Highest quality, detailed analysis |

### API Configuration

The serverless function accepts the following parameters:

```javascript
// POST /.netlify/functions/conversation-processor
{
  "conversationInput": "User's spoken input text",
  "conversationStrategy": "Selected strategy prompt",
  "selectedModel": "claude-3-5-sonnet" // optional
}
```

Response format:
```javascript
{
  "success": true,
  "response": "AI-generated strategic response",
  "analysis": {
    "sentiment": "positive|neutral|negative",
    "intent": "question|objection|interest|complaint",
    "emotionalTone": "calm|frustrated|excited|confused",
    "keyTopics": ["topic1", "topic2"],
    "urgencyLevel": "low|medium|high",
    "recommendedResponseTone": "empathetic|professional|enthusiastic"
  },
  "quality": {
    "overallScore": 8.5,
    "relevanceScore": 9.0,
    "strategicScore": 8.0,
    "strengths": ["Clear communication", "Empathetic tone"],
    "improvements": ["Add specific examples"]
  },
  "metadata": {
    "model": "claude-3-5-sonnet-20241022",
    "timestamp": "2024-01-01T00:00:00.000Z",
    "processingTime": 1234,
    "subagentsUsed": ["ConversationAnalyzer", "ResponseGenerator", "QualityAssessor"]
  }
}
```

## 🎨 Customization

### Creating Custom Strategies

1. **Open Strategy Manager**
   - Click the strategy dropdown
   - Select "-- Choose Strategy --"

2. **Create Custom Prompt**
   - Modify the conversation strategy textarea
   - Focus on specific scenarios or communication styles

3. **Save as Preset**
   - Click "Save As+" button
   - Enter a descriptive name
   - Access via ⋮ (manage presets) button

### Theme Customization

The application uses CSS custom properties for easy theme customization:

```css
:root {
  --steel-blue: #2D4059;
  --copper-accent: #D4751A;
  --charcoal: #1A1A2E;
  --warm-white: #F8F9FA;
  /* Customize these values for your preferred theme */
}
```

## 🔒 Security & Privacy

### Data Protection
- **🔐 Server-side API Keys**: All API keys stored as environment variables
- **💾 Local Storage Only**: Conversation history stored locally in browser
- **🔒 HTTPS Enforcement**: All communications encrypted in transit
- **🚫 No Data Persistence**: Server functions don't store conversation data
- **🛡️ CORS Protection**: Proper cross-origin resource sharing policies

### Privacy Features
- No conversation data leaves your device except for AI processing
- API calls are stateless and don't retain conversation history
- Local storage can be cleared at any time
- No user authentication or tracking

## 🐛 Troubleshooting

### Common Issues

#### Speech Recognition Problems
```
❌ "Speech recognition not supported"
✅ Solution: Use Chrome, Edge, or Safari with HTTPS connection
```

#### API Connection Issues
```
❌ "API Error" or "Function timeout"
✅ Solutions:
   - Verify ANTHROPIC_API_KEY is correctly set
   - Check API key has sufficient credits
   - Ensure stable internet connection
   - Try switching Claude models
```

#### Audio Visualization Issues
```
❌ Visualizer not showing or microphone access denied
✅ Solutions:
   - Grant microphone permissions in browser
   - Ensure HTTPS connection (required for microphone access)
   - Check browser compatibility
```

### Browser Compatibility

| Browser | Speech Recognition | Audio Visualization | Overall Support |
|---------|-------------------|-------------------|-----------------|
| Chrome 25+ | ✅ Full | ✅ Full | ✅ Recommended |
| Safari 14.1+ | ✅ Full | ✅ Full | ✅ Supported |
| Edge 79+ | ✅ Full | ✅ Full | ✅ Supported |
| Firefox | ⚠️ Limited | ✅ Full | ⚠️ Partial |

### Performance Optimization

- **Response Times**: Typically 2-5 seconds for full analysis
- **Memory Usage**: ~50MB for typical session
- **Network Usage**: Text-only API calls (minimal bandwidth)
- **Storage**: ~1MB per 100 conversation exchanges

## 📊 Analytics & Monitoring

### Built-in Metrics

The application tracks several conversation quality metrics:

- **Response Quality Scores** (0-10 scale)
- **Conversation Sentiment Trends**
- **Strategy Effectiveness Analysis**
- **Response Time Performance**
- **User Engagement Patterns**

### Accessing Analytics

View conversation analytics through:
- Individual conversation quality assessments
- Historical trend analysis in sidebar
- Strategy performance comparisons
- Response improvement suggestions

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Setup

1. **Fork & Clone**
   ```bash
   git fork https://github.com/yourusername/ConvoAssistant.git
   git clone https://github.com/yourusername/ConvoAssistant.git
   cd ConvoAssistant
   npm install
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test thoroughly across browsers

4. **Submit Pull Request**
   - Describe changes clearly
   - Include screenshots for UI changes
   - Reference any related issues

### Development Guidelines

- **Code Style**: Follow existing JavaScript/CSS patterns
- **Testing**: Test in multiple browsers before submitting
- **Documentation**: Update README for significant changes
- **Performance**: Consider impact on load times and responsiveness

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Nikhil Mahesh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🆘 Support & Community

### Get Help

- **📧 Email**: [Contact via website](https://nikhilmahesh.com/)
- **🐛 Issues**: [GitHub Issues](https://github.com/yourusername/ConvoAssistant/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/yourusername/ConvoAssistant/discussions)

### Roadmap

- [ ] **Multi-language Support** - Support for languages beyond English
- [ ] **Voice Response Integration** - AI-generated audio responses
- [ ] **Team Collaboration Features** - Shared strategies and analytics
- [ ] **Advanced Analytics Dashboard** - Detailed conversation insights
- [ ] **Mobile App** - Native iOS/Android applications
- [ ] **Integration APIs** - Connect with CRM and communication tools

---

<div align="center">

**Built with ❤️ by [Nikhil Mahesh](https://nikhilmahesh.com/)**

*Powered by Claude AI & Intelligent Subagent Architecture*

[![GitHub stars](https://img.shields.io/github/stars/yourusername/ConvoAssistant?style=social)](https://github.com/yourusername/ConvoAssistant/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/ConvoAssistant?style=social)](https://github.com/yourusername/ConvoAssistant/network/members)

</div>