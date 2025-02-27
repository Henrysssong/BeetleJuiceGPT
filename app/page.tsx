'use client';
import { useState } from "react";
import Profile from './Profile'

interface Message {
  content: string;
  role: 'user' | 'assistant';
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message with explicit type annotation
    const userMessage: Message = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response (you can replace this with actual API call)
    setTimeout(() => {
      const aiMessage: Message = { 
        role: 'assistant', 
        content: 'This is a simulated response. Connect to a real AI API for actual responses.' 
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto border rounded-lg">
        {/* Chat header with profile */}
        <div className="border-b p-4">
          <Profile />
        </div>
        
        {/* Chat messages area */}
        <div className="h-[600px] overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-gray-800 dark:text-white'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
        
        {/* Chat input area */}
        <div className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-full px-4 py-2 bg-white dark:bg-gray-800 dark:text-white border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
