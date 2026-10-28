import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { useLanguage } from '../../i18n/useLanguage';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

// Set at build time (GitHub variable CHAT_API_URL, or .env.local when developing).
const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL as string | undefined;

const content = {
  no: {
    greeting: 'Hei! 👋 Jeg er en AI-assistent som kan svare på spørsmål om Jonas. Hva lurer du på?',
    suggestions: ['Hva gikk bachelorprosjektet ut på?', 'Hvilke teknologier kan Jonas?', 'Hvordan kontakter jeg Jonas?'],
    limitReached:
      'Takk for alle spørsmålene! 😊 Vil du vite mer, ta gjerne kontakt med Jonas på LinkedIn eller inviter til et intervju. Da svarer Jonas gjerne på resten selv.',
    error: 'Beklager, jeg får ikke svart akkurat nå. Prøv igjen senere, eller kontakt Jonas på LinkedIn.',
    title: 'Spør om Jonas',
    subtitle: 'AI-assistent',
    close: 'Lukk chat',
    open: 'Åpne chat',
    placeholder: 'Skriv et spørsmål...',
    send: 'Send',
    disclaimer: 'AI-genererte svar kan inneholde feil.',
    button: 'Spør AI om meg',
  },
  en: {
    greeting: 'Hi! 👋 I’m an AI assistant that can answer questions about Jonas. What would you like to know?',
    suggestions: ['What was the bachelor project about?', 'Which technologies does Jonas know?', 'How can I contact Jonas?'],
    limitReached:
      'Thanks for all the questions! 😊 If you’d like to know more, feel free to contact Jonas on LinkedIn or invite Jonas to an interview. Jonas will gladly answer the rest in person.',
    error: 'Sorry, I can’t answer right now. Please try again later, or contact Jonas on LinkedIn.',
    title: 'Ask about Jonas',
    subtitle: 'AI assistant',
    close: 'Close chat',
    open: 'Open chat',
    placeholder: 'Type a question...',
    send: 'Send',
    disclaimer: 'AI-generated answers may contain mistakes.',
    button: 'Ask AI about me',
  },
};

// Floating chat button that talks to the Cloudflare Worker in chat-worker/.
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  // The greeting is not stored here, so it follows the language and is never sent to the model.
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const c = content[useLanguage()];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, isOpen]);

  if (!CHAT_API_URL) return null;

  const sendMessage = async (text: string) => {
    const question = text.trim();
    if (!question || isLoading) return;

    const next = [...messages, { role: 'user' as const, content: question }];
    setMessages(next);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      if (response.status === 429) {
        setMessages([
          ...next,
          { role: 'assistant', content: c.limitReached },
        ]);
        return;
      }
      if (!response.ok) throw new Error(`Chat request failed: ${response.status}`);

      const data: { reply: string } = await response.json();
      setMessages([...next, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages([
        ...next,
        {
          role: 'assistant',
          content: c.error,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[32rem] max-h-[calc(100vh-8rem)] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-brand-600 to-accent-600 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-robot-2-line text-white text-xl"></i>
              </div>
              <div>
                <p className="text-white font-semibold leading-tight">{c.title}</p>
                <p className="text-accent-100 text-xs">{c.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white cursor-pointer"
              aria-label={c.close}
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-br from-gray-50 to-accent-50">
            {[{ role: 'assistant' as const, content: c.greeting }, ...messages].map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-brand-600 to-accent-600 text-white rounded-br-sm'
                      : 'bg-white text-gray-700 shadow-sm rounded-bl-sm'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {c.suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => sendMessage(suggestion)}
                    className="text-xs bg-white border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-50 transition-colors cursor-pointer"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                  <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce [animation-delay:0.15s]"></span>
                  <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce [animation-delay:0.3s]"></span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={c.placeholder}
              maxLength={1000}
              className="flex-1 px-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-brand-400"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 bg-gradient-to-r from-brand-600 to-accent-600 rounded-full flex items-center justify-center text-white disabled:opacity-50 cursor-pointer"
              aria-label={c.send}
            >
              <i className="ri-send-plane-2-fill"></i>
            </button>
          </form>
          <p className="text-[10px] text-gray-400 text-center pb-2">{c.disclaimer}</p>
        </div>
      )}

      <div className="fixed bottom-6 right-4 sm:right-6 z-50">
        {/* Pulsing halo draws attention until the chat has been opened once. */}
        {!hasOpened && <span className="absolute inset-0 rounded-full bg-brand-400 animate-ping opacity-60"></span>}
        <button
          onClick={() => {
            setIsOpen((open) => !open);
            setHasOpened(true);
          }}
          className={`relative h-14 bg-gradient-to-r from-brand-600 to-accent-600 rounded-full shadow-2xl ring-4 ring-white flex items-center justify-center gap-2 text-white font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer ${
            isOpen ? 'w-14' : 'px-5'
          }`}
          aria-label={isOpen ? c.close : c.open}
        >
          <i className={`${isOpen ? 'ri-close-line' : 'ri-chat-smile-3-line'} text-2xl`}></i>
          {!isOpen && <span className="whitespace-nowrap">{c.button}</span>}
        </button>
      </div>
    </>
  );
};

export default ChatWidget;
