import { useLanguage } from '../../i18n/useLanguage';

const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`;

const CV_URL = withBase('documents/Jonas-Moen-Pettersen-CV.pdf');
const CV_FILENAME = 'Jonas-Moen-Pettersen-CV.pdf';

const content = {
  no: {
    download: 'Last ned CV',
    bannerTitle: 'Vil du ha alt samlet på ett ark?',
    bannerText: 'Last ned CV-en min som PDF. Vitnemål sendes på forespørsel.',
  },
  en: {
    download: 'Download CV',
    bannerTitle: 'Want everything on one page?',
    bannerText: 'Download my CV as a PDF. Diploma available on request.',
  },
};

// Full-width strip right below the profile hero.
export const CvBanner = () => {
  const c = content[useLanguage()];
  return (
    <section className="bg-gradient-to-r from-brand-900 to-accent-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-white">
          <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/10 items-center justify-center">
            <i className="ri-file-user-line text-3xl text-accent-200" aria-hidden="true"></i>
          </div>
          <div>
            <p className="text-xl font-bold">{c.bannerTitle}</p>
            <p className="text-accent-100">{c.bannerText}</p>
          </div>
        </div>
        <a
          href={CV_URL}
          download={CV_FILENAME}
          className="inline-flex items-center gap-2 bg-white text-brand-700 px-7 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform whitespace-nowrap"
        >
          <i className="ri-download-2-line text-xl" aria-hidden="true"></i>
          {c.download}
        </a>
      </div>
    </section>
  );
};

// Button in the "Vil du vite mer?" section on the front page, styled like its neighbours.
export const CvContactButton = () => {
  const c = content[useLanguage()];
  return (
    <a
      href={CV_URL}
      download={CV_FILENAME}
      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-accent-100 text-sm font-semibold hover:bg-white/20 transition"
    >
      <i className="ri-download-2-line mr-2 text-lg" aria-hidden="true"></i>
      {c.download}
    </a>
  );
};

// Line in the footer's contact list, so the CV can be found from every page.
export const CvFooterLink = () => {
  const c = content[useLanguage()];
  return (
    <div className="flex items-center">
      <i className="ri-file-user-line text-red-400 mr-3" aria-hidden="true"></i>
      <a href={CV_URL} download={CV_FILENAME} className="text-gray-400 hover:text-white transition-colors">
        {c.download}
      </a>
    </div>
  );
};
