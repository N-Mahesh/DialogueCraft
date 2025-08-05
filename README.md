# DialogueCraft - Conversation Intelligence with Claude AI

An advanced conversation intelligence web application powered by Claude AI and intelligent subagent architecture. DialogueCraft provides real-time AI coaching and response generation using speech recognition to help users improve their conversational skills.

## 🚀 Features

- **Real-time Speech Recognition** - Uses browser's Web Speech API
- **Claude AI Integration** - Powered by Anthropic's Claude models via serverless functions
- **Subagent Architecture** - Specialized AI agents for conversation analysis, response generation, and quality assessment
- **Conversation Strategies** - Predefined and custom conversation presets (Executive Reframer, Negotiation Expert, Empathetic Coach)
- **Audio Visualization** - Real-time audio level visualization during recording
- **Conversation History** - Persistent storage of conversation exchanges with analytics
- **Theme Support** - Light and dark mode with CSS custom properties
- **No API Key Required** - All AI processing handled server-side via Netlify functions

## 🏗️ Architecture

### Subagent System

The application uses four specialized AI subagents:

1. **ConversationAnalyzerAgent** - Analyzes conversation context, sentiment, and intent
2. **ResponseGeneratorAgent** - Creates strategic responses using Claude AI
3. **QualityAssessorAgent** - Evaluates response quality and effectiveness
4. **ContextManagerAgent** - Maintains conversation history and context

### Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Netlify Functions (Node.js)
- **AI**: Anthropic Claude API (3.5 Sonnet, 3.5 Haiku, 3 Opus)
- **Speech**: Web Speech API
- **Deployment**: Netlify

## 📦 Installation & Deployment

### Prerequisites

- Node.js 18+ 
- Netlify account
- Anthropic API key

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ConvoAssistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:8888`

### Netlify Deployment

1. **Connect to Netlify**
   - Push your code to GitHub/GitLab
   - Connect your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `.`

2. **Configure Environment Variables**
   In your Netlify site settings, add:
   ```
   ANTHROPIC_API_KEY = your_anthropic_api_key_here
   ```

3. **Deploy**
   Netlify will automatically deploy your site and serverless functions.

### Getting an Anthropic API Key

1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Create an account or sign in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key to your environment variables

## 🎯 Usage

### Basic Operation

1. **Select a Conversation Strategy** - Choose from predefined strategies or create custom ones
2. **Choose AI Model** - Select Claude 3.5 Sonnet (Advanced), 3.5 Haiku (Rapid), or 3 Opus (Premium)
3. **Start Listening** - Click the microphone button to begin speech recognition
4. **Receive AI Coaching** - Get real-time strategic responses from Claude AI
5. **Review History** - Access conversation history in the sidebar

### Keyboard Shortcuts

- **Spacebar** - Toggle recording
- **Alt+H** - Show conversation history
- **Escape** - Close dialogs

### Conversation Strategies

- **Executive Reframer** - Strategic business communication and opportunity reframing
- **Negotiation Expert** - High-stakes conversation management and win-win outcomes
- **Empathetic Coach** - Supportive communication with emotional intelligence

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key | Yes |

### Claude Models

| Model | Description | Use Case |
|-------|-------------|----------|
| `claude-3-5-sonnet` | Most advanced model | Complex conversations, detailed analysis |
| `claude-3-5-haiku` | Fast and efficient | Quick responses, real-time processing |
| `claude-3-opus` | Premium model | Highest quality responses |

## 🧪 API Endpoints

### POST `/api/conversation-processor`

Processes conversation input through the subagent system.

**Request Body:**
```json
{
  "conversationInput": "User's spoken input",
  "conversationStrategy": "System prompt for response generation",
  "selectedModel": "claude-3-5-sonnet"
}
```

**Response:**
```json
{
  "success": true,
  "response": "Generated strategic response",
  "analysis": {
    "sentiment": "neutral",
    "intent": "question",
    "emotionalTone": "curious"
  },
  "quality": {
    "overallScore": 8.5,
    "strengths": ["Clear communication", "Empathetic tone"]
  },
  "metadata": {
    "model": "claude-3-5-sonnet-20241022",
    "timestamp": "2024-01-01T00:00:00.000Z",
    "subagentsUsed": ["ConversationAnalyzer", "ResponseGenerator", "QualityAssessor"]
  }
}
```

## 🎨 Customization

### Adding Custom Conversation Strategies

1. Click the strategy dropdown
2. Create your custom prompt
3. Click "Save As+" to save as a new preset
4. Manage presets with the ⋮ button

### Themes

Toggle between light and dark modes using the 🌓 button in the header.

## 🔒 Security & Privacy

- **No Client-Side API Keys** - All API keys are stored as environment variables on the server
- **Local Data Storage** - Conversation history is stored locally in your browser
- **HTTPS Only** - All communications are encrypted
- **No Data Persistence** - Server-side functions don't store conversation data

## 🐛 Troubleshooting

### Common Issues

1. **"Speech recognition not supported"**
   - Use Chrome, Edge, or Safari
   - Ensure HTTPS connection

2. **"API Error"**
   - Check that ANTHROPIC_API_KEY is set correctly
   - Verify API key has sufficient credits

3. **"Function timeout"**
   - Claude API calls may take time for complex analysis
   - Function timeout is set to 30 seconds

### Browser Compatibility

- ✅ Chrome 25+
- ✅ Safari 14.1+
- ✅ Edge 79+
- ❌ Firefox (limited speech recognition support)

## 📈 Performance

- **Response Time** - Typically 2-5 seconds for full subagent analysis
- **Browser Requirements** - Modern browser with Web Speech API support
- **Data Usage** - Minimal (text-only API calls)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

For support and questions:
- Open an issue on GitHub
- Visit [nikhilmahesh.com](https://nikhilmahesh.com/)

---

**Powered by Claude AI & Subagent Architecture**