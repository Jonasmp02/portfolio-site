import { useTranslation } from 'react-i18next';
import type { Language } from '../../i18n';
import { useLanguage } from '../../i18n/useLanguage';

type Props = {
  // The navbar is transparent over the hero and white once scrolled, so the pill needs both looks.
  isScrolled: boolean;
};

const LANGUAGES: { code: Language; label: string; name: string }[] = [
  { code: 'no', label: 'NO', name: 'Norsk' },
  { code: 'en', label: 'EN', name: 'English' },
];

// NO | EN toggle. The choice is saved in localStorage by the i18next language detector.
const LanguageSwitcher = ({ isScrolled }: Props) => {
  const { i18n } = useTranslation();
  const language = useLanguage();

  return (
    <div
      role="group"
      aria-label="Språk / Language"
      className={`inline-flex items-center rounded-full p-1 text-sm font-semibold transition-colors ${
        isScrolled ? 'bg-gray-100 border border-gray-200' : 'bg-white/10 border border-white/25'
      }`}
    >
      {LANGUAGES.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => i18n.changeLanguage(lang.code)}
            aria-pressed={isActive}
            title={lang.name}
            className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
              isActive
                ? isScrolled
                  ? 'bg-brand-700 text-white shadow-sm'
                  : 'bg-white text-brand-800 shadow-sm'
                : isScrolled
                ? 'text-gray-600 hover:text-accent-600'
                : 'text-white/80 hover:text-white'
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
