// Loads every ./<language>/<file>.ts and merges them into one translation per language.
// Each file exports an object such as { home: { ... } }, so keys read like t('home.hero.title').
const modules = import.meta.glob('./*/*.ts', { eager: true });

const messages: Record<string, { translation: Record<string, unknown> }> = {};

Object.keys(modules).forEach((path) => {
  const match = path.match(/\.\/([^/]+)\/([^/]+)\.ts$/);
  if (match) {
    const [, lang] = match;
    const module = modules[path] as { default?: Record<string, unknown> };

    if (!messages[lang]) {
      messages[lang] = { translation: {} };
    }

    if (module.default) {
      messages[lang].translation = {
        ...messages[lang].translation,
        ...module.default,
      };
    }
  }
});

export default messages;
