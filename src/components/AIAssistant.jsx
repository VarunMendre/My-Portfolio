import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMessageCircle, FiSend, FiX } from 'react-icons/fi';

const starterMessage = {
  id: 1,
  role: 'assistant',
  text: "Hi, I'm Varun's AI assistant. Ask me about his skills, experience, education, or projects.",
};

const quickQuestions = [
  'What are your main skills?',
  'Tell me about your projects',
  'What is your experience?',
];

const getLocalResponse = (question) => {
  const normalizedQuestion = question.toLowerCase();

  if (normalizedQuestion.includes('skill')) {
    return 'Varun works across frontend development, React, JavaScript, UI implementation, and building practical full-stack projects.';
  }

  if (normalizedQuestion.includes('project')) {
    return 'You can explore Varun\'s projects in the Projects section. They reflect his interest in creating useful, polished, and user-focused digital experiences.';
  }

  if (normalizedQuestion.includes('experience') || normalizedQuestion.includes('intern')) {
    return 'Varun has built experience through internships and hands-on project work, where he strengthened his development workflow and problem-solving skills.';
  }

  if (normalizedQuestion.includes('education') || normalizedQuestion.includes('study')) {
    return 'Varun\'s education and academic background are outlined in the Education section of this portfolio.';
  }

  return 'I can help with questions about Varun\'s education, skills, experience, internships, challenges, and projects. Try asking about one of those topics.';
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([starterMessage]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const sendMessage = async (event, question = input) => {
    event?.preventDefault();
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || isTyping) return;

    setInput('');
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: Date.now(), role: 'user', text: trimmedQuestion },
    ]);
    setIsTyping(true);

    // Replace this local delay and response with the LLM request when the BE is ready.
    await new Promise((resolve) => setTimeout(resolve, 650));
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: Date.now() + 1, role: 'assistant', text: getLocalResponse(trimmedQuestion) },
    ]);
    setIsTyping(false);
  };

  return (
    <div className="ai-assistant fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 flex h-[min(31rem,calc(100vh-7rem))] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden border border-light border-opacity-15 bg-secondary shadow-2xl shadow-black/40"
            aria-label="AI Assistant chat"
          >
            <div className="flex items-center justify-between border-b border-muted border-opacity-15 bg-primary px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center border border-light border-opacity-30 text-light">
                  <FiMessageCircle size={16} />
                </div>
                <div>
                  <p className="font-mono text-xs tracking-widest text-light">AI ASSISTANT</p>
                  <p className="text-[11px] text-muted">Ask me about Varun</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-muted transition-colors hover:text-light"
                aria-label="Close AI Assistant"
              >
                <FiX size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-3 py-4" aria-live="polite">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <p
                    className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed ${message.role === 'user'
                      ? 'bg-light text-primary'
                      : 'border border-muted border-opacity-15 bg-primary text-muted'
                      }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <p className="border border-muted border-opacity-15 bg-primary px-3 py-2 text-sm text-muted">
                    Typing...
                  </p>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-muted border-opacity-15 px-3 pb-3 pt-2">
              <div className="mb-2 flex gap-2 overflow-x-auto pb-1">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={(event) => sendMessage(event, question)}
                    disabled={isTyping}
                    className="shrink-0 border border-muted border-opacity-20 px-2 py-1 text-[10px] text-muted transition-colors hover:border-light hover:text-light disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
              <form onSubmit={sendMessage} className="flex items-center gap-2 border border-muted border-opacity-25 bg-primary px-3 py-2 focus-within:border-light">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask a question..."
                  aria-label="Ask the AI Assistant a question"
                  className="min-w-0 flex-1 bg-transparent text-sm text-light outline-none placeholder:text-muted"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="text-light transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Send message"
                >
                  <FiSend size={16} />
                </button>
              </form>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-light border-opacity-40 bg-light text-primary shadow-lg shadow-black/30 transition-colors hover:bg-opacity-90"
        aria-label={isOpen ? 'Close AI Assistant' : 'Open AI Assistant'}
        aria-expanded={isOpen}
      >
        {isOpen ? <FiX size={22} /> : <FiMessageCircle size={22} />}
      </motion.button>
    </div>
  );
};

export default AIAssistant;
