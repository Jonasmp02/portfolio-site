import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

// Set at build time (GitHub variable CHAT_API_URL, or .env.local when developing).
const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL as string | undefined;

const GREETING: ChatMessage = {
  role: 'assistant',
  content: 'Hei! 👋 Jeg er en AI-assistent som kan svare på spørsmål om Jonas. Hva lurer du på?',
};

const SUGGESTIONS = ['Hva gikk bachelorprosjektet ut på?', 'Hvilke teknologier kan Jonas?', 'Hvordan kontakter jeg Jonas?'];

// Floating chat button that talks to the Cloudflare Worker in chat-worker/.
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, isOpen]);

  if (!CHAT_API_URL) return null;

  const sendMessage = async (text: string) => {
    const content = text.trim();
    if (!content || isLoading) return;

    const next = [...messages, { role: 'user' as const, content }];
    setMessages(next);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // The greeting is UI only, so it is not sent to the model.
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      if (response.status === 429) {
        setMessages([
          ...next,
          { role: 'assistant', content: 'Takk for alle spørsmålene! 😊 Vil du vite mer, ta gjerne kontakt med Jonas på LinkedIn eller inviter til et intervju. Da svarer Jonas gjerne på resten selv.' },
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
          content: 'Beklager, jeg får ikke svart akkurat nå. Prøv igjen senere, eller kontakt Jonas på LinkedIn.',
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
                <p className="text-white font-semibold leading-tight">Spør om Jonas</p>
                <p className="text-accent-100 text-xs">AI-assistent</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white cursor-pointer"
              aria-label="Lukk chat"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-br from-gray-50 to-accent-50">
            {messages.map((message, index) => (
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

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((suggestion) => (
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
              placeholder="Skriv et spørsmål..."
              maxLength={1000}
              className="flex-1 px-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-brand-400"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 bg-gradient-to-r from-brand-600 to-accent-600 rounded-full flex items-center justify-center text-white disabled:opacity-50 cursor-pointer"
              aria-label="Send"
            >
              <i className="ri-send-plane-2-fill"></i>
            </button>
          </form>
          <p className="text-[10px] text-gray-400 text-center pb-2">AI-genererte svar kan inneholde feil.</p>
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
          aria-label={isOpen ? 'Lukk chat' : 'Åpne chat'}
        >
          <i className={`${isOpen ? 'ri-close-line' : 'ri-chat-smile-3-line'} text-2xl`}></i>
          {!isOpen && <span className="whitespace-nowrap">Spør AI om meg</span>}
        </button>
      </div>
    </>
  );
};

export default ChatWidget;
