// src/components/StellarAssistant.jsx
import React from 'react';
import { useState } from 'react';
import { FiMessageSquare, FiX } from 'react-icons/fi';

const StellarAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Stellar assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, 
        { id: Date.now(), text: inputValue, sender: 'user' },
        { id: Date.now() + 1, text: "Thanks for your question! I'm still learning, but I'll connect you with a human if I can't help.", sender: 'bot' }
      ]);
      setInputValue('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="bg-yellow-400 text-gray-900 p-3 flex justify-between items-center">
            <h3 className="font-bold">Stellar Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-900 hover:text-gray-700"
            >
              <FiX size={20} />
            </button>
          </div>
          
          <div className="h-64 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-3 ${message.sender === 'bot' ? 'text-left' : 'text-right'}`}
              >
                <div 
                  className={`inline-block px-3 py-2 rounded-lg ${message.sender === 'bot' 
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200' 
                    : 'bg-yellow-400 text-gray-900'}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about Stellar..."
                className="flex-1 px-3 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-lg hover:bg-yellow-500 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-500 transition-colors"
        >
          <FiMessageSquare size={24} className="text-gray-900" />
        </button>
      )}
    </div>
  );
};

export default StellarAssistant;