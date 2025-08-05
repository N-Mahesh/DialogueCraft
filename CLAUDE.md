# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DialogueCraft is a conversation intelligence web application that provides real-time AI coaching and response generation. It uses speech recognition to capture live conversations and generates strategic responses using OpenAI's API to help users improve their conversational skills.

## Architecture

### Core Components

- **index.html**: Main application interface with embedded CSS and JavaScript
  - Contains all UI styling and the primary application logic
  - Implements speech recognition using Web Speech API
  - Manages conversation strategies and AI model selection
  - Handles theme switching (light/dark mode)

- **app.js**: Extended functionality and OpenAI integration
  - Initializes OpenAI client for browser usage
  - Provides API key management and validation
  - Implements keyboard shortcuts (Spacebar, Alt+H, Alt+K)
  - Adds conversation history tracking

- **utils.js**: Utility classes and helper functions
  - `AudioProcessor`: Handles audio visualization, processing, and WAV conversion
  - `UIStateManager`: Manages application states (ready, listening, processing, error)
  - `APIKeyManager`: Handles API key storage and validation
  - `ThemeManager`: Manages light/dark theme switching
  - `ConversationAnalyzer`: Analyzes conversation sentiment and objection levels
  - `ResponseQualityTracker`: Tracks response quality metrics

- **styles.css**: Additional styling for UI components
  - Defines CSS variables for theming
  - Styles for status indicators and visualizer bars
  - Responsive design adjustments

### Key Features

1. **Real-time Speech Recognition**: Uses browser's Web Speech API
2. **AI Response Generation**: Integrates with OpenAI API (GPT-4o models)
3. **Conversation Strategies**: Predefined and custom conversation presets
4. **Audio Visualization**: Real-time audio level visualization during recording
5. **Conversation History**: Persistent storage of conversation exchanges
6. **Theme Support**: Light and dark mode with CSS custom properties
7. **API Key Management**: Secure local storage of API credentials

### Data Flow

1. Speech input captured via Web Speech API
2. Transcription displayed in real-time
3. AI generates strategic response based on selected conversation strategy
4. Response displayed with model information
5. Conversation history saved to localStorage
6. Audio visualization shows recording activity

### State Management

The application uses `UIStateManager` to track four states:
- `READY`: Application ready for input
- `LISTENING`: Actively recording speech
- `PROCESSING`: Generating AI response
- `ERROR`: Error state with user feedback

### Storage

All data is stored in browser localStorage:
- `openai_api_key`: OpenAI API key
- `active_strategy`: Current conversation strategy prompt
- `selected_engine`: Selected AI model
- `dialogue_history`: Conversation history array
- `strategic_presets`: Custom conversation strategy presets
- `theme_mode`: Current theme preference (light/dark)

## Development Commands

This is a client-side web application with no build process. Open `index.html` directly in a web browser or serve via a local HTTP server.

### Running the Application

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Serve with Python (recommended for local development)
python -m http.server 8000

# Option 3: Serve with Node.js
npx serve .
```

### Browser Requirements

- Modern browser with Web Speech API support (Chrome, Edge, Safari)
- Microphone permissions required for speech recognition
- Internet connection required for OpenAI API calls

## Configuration

### API Keys
Users must provide their own OpenAI API key through the settings dialog (⚙️ button). The key is validated (must start with "sk-") and stored locally.

### Conversation Strategies
Default strategies include:
- Executive Reframer: For business communication
- Negotiation Expert: For negotiation scenarios
- Custom strategies can be created and saved

### Supported Models
- DialogueGPT-4o (Advanced) - `chatgpt-4o-latest`
- DialogueGPT-4o (Rapid) - `gpt-4o-mini-2024-07-18`
- ConversationAI 4.1 variants

## File Structure Notes

- All functionality is contained in the main files listed above
- No external dependencies beyond browser APIs and OpenAI
- Self-contained styling with CSS custom properties for theming
- Modular utility classes in utils.js for maintainability