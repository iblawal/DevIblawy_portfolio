'use client'
import { useState, useRef, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Ibrahim's AI assistant. Ask me about his experience, skills, or projects!",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ 
          message: input,
          context: {
            name: 'Ibrahim Lawal Mayowa',
            role: 'Frontend Developer',
            experience: '3+ years',
            skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'PostgreSQL'],
            availability: 'Available for hire'
          },
          conversationHistory: messages
        })
      })

      const data = await response.json()
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response || "I'm here to help! What would you like to know?",
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Chatbot error:', error)
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: "I'm available at ibrahimlawal060@gmail.com. What would you like to know?",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-primary-500 to-primary-600'
        }`}
      >
        {isOpen ? (
          <i className="fas fa-times text-white text-base"></i>
        ) : (
          <i className="fas fa-robot text-white text-base"></i>
        )}
      </button>

      {isOpen && (
        <div className={`fixed bottom-[88px] left-6 w-96 h-[70vh] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-4">
            <h3 className="text-white font-semibold text-lg">AI Assistant</h3>
            <p className="text-white text-sm">Online</p>
          </div>

          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
          }`}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                      : theme === 'dark'
                      ? 'bg-gray-800 text-gray-100'
                      : 'bg-white text-gray-800 shadow-md'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className={`text-xs mt-2 block ${
                    message.role === 'user' ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-md">
                  <div className="flex gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className={`p-4 border-t ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className={`flex-1 px-4 py-3 rounded-full border-2 focus:outline-none focus:border-primary-500 ${
                  theme === 'dark'
                    ? 'bg-gray-900 border-gray-700 text-white'
                    : 'bg-gray-50 border-gray-300 text-gray-900'
                }`}
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white flex items-center justify-center disabled:opacity-50"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by Gemini AI
            </p>
          </div>
        </div>
      )}
    </div>
  )
}