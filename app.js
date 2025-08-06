/**
 * DialogueCraft - Extended Functionality
 * This script adds additional features to the core speech recognition and Claude AI response system.
 * Now powered by Claude AI via Netlify serverless functions with subagent architecture.
 */

// No longer need client-side API key management or OpenAI client initialization
// All AI processing is handled server-side via Netlify functions

document.addEventListener('DOMContentLoaded', () => {
  // Check if the main speech recognition is initialized
  const speechRecognitionExists = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!speechRecognitionExists) {
    alert('Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
    return;
  }

  // DOM Elements
  const toggleButton = document.getElementById('toggle');
  const objectionText = document.getElementById('lastObjection');
  const replyText = document.getElementById('reply');
  
  // Recent conversation history for enhanced context
  const maxHistoryItems = 10;
  let conversationHistory = [];
  
  // Enhanced conversation tracking for Claude AI context
  function addToConversationHistory(input, response) {
    const historyItem = {
      timestamp: new Date().toISOString(),
      input: input,
      response: response
    };
    
    conversationHistory.unshift(historyItem);
    
    // Keep history to max size for optimal performance
    if (conversationHistory.length > maxHistoryItems) {
      conversationHistory.pop();
    }
    
    console.log('Updated conversation history:', conversationHistory.length, 'items');
  }
  
  // Enhanced speech recognition result processing
  // Note: r.onresult is handled in the main index.html file
  
  // Create enhanced conversation history interface
  function showConversationHistory() {
    if (conversationHistory.length === 0) {
      alert('No conversation history yet');
      return;
    }
    
    const historyHTML = conversationHistory
      .map((item, i) => `
        <div style="margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
          <div style="font-weight: bold; color: #2D4059;">Input:</div>
          <div style="margin: 5px 0;">"${item.input}"</div>
          <div style="font-weight: bold; color: #27AE60;">Response:</div>
          <div style="margin: 5px 0;">"${item.response}"</div>
          <div style="font-size: 12px; color: #666; margin-top: 5px;">${new Date(item.timestamp).toLocaleString()}</div>
        </div>
      `)
      .join('');
      
    const historyContainer = document.createElement('div');
    historyContainer.innerHTML = `
      <div style="max-height: 400px; overflow-y: auto;">
        <h3 style="margin-top: 0;">Conversation History</h3>
        ${historyHTML}
      </div>
    `;
    historyContainer.style.position = 'fixed';
    historyContainer.style.top = '10px';
    historyContainer.style.right = '10px';
    historyContainer.style.background = '#fff';
    historyContainer.style.padding = '20px';
    historyContainer.style.border = '1px solid #ccc';
    historyContainer.style.borderRadius = '8px';
    historyContainer.style.zIndex = '1000';
    historyContainer.style.width = '400px';
    historyContainer.style.maxHeight = '500px';
    historyContainer.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    
    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.style.marginTop = '15px';
    closeBtn.style.padding = '8px 16px';
    closeBtn.style.backgroundColor = '#2D4059';
    closeBtn.style.color = 'white';
    closeBtn.style.border = 'none';
    closeBtn.style.borderRadius = '4px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.addEventListener('click', () => document.body.removeChild(historyContainer));
    
    historyContainer.appendChild(closeBtn);
    document.body.appendChild(historyContainer);
  }
  
  // No need to intercept fetch calls anymore - using serverless functions
  
  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Spacebar to toggle recording
    if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      toggleButton.click();
    }
    
    // H key to show conversation history
    if (e.code === 'KeyH' && e.altKey) {
      e.preventDefault();
      showConversationHistory();
    }
  });
  
  // Add visual feedback when recognition is active
  toggleButton.addEventListener('click', () => {
    if (on) {
      toggleButton.classList.add('active');
      document.title = 'Listening - Live Objection Handler';
    } else {
      toggleButton.classList.remove('active');
      document.title = 'Live Objection Handler';
    }
  });
  
  // Add info about keyboard shortcuts
  const infoDiv = document.createElement('div');
  infoDiv.style.marginTop = '20px';
  infoDiv.style.fontSize = '12px';
  infoDiv.style.color = '#666';
  infoDiv.innerHTML = `
    <p>Keyboard shortcuts: Spacebar (toggle recording), Alt+H (conversation history)</p>
    <p>Powered by Claude AI with intelligent subagent architecture</p>
  `;
  document.body.appendChild(infoDiv);
});