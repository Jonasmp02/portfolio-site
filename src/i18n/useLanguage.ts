import { useTranslation } from 'react-i18next';
import type { Language } from './index';

// The active language. Components keep their Norwegian and English text side by side
// in a `content` object and pick `content[language]`.
export const useLanguage = (): Language => {
  const { i18n } = useTranslation();
  return i18n.language === 'en' ? 'en' : 'no';
};
