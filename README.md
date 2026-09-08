# Jonas Moen Pettersen | Portefolje

Personlig porteføljeside for Jonas Moen Pettersen, bygget med React, TypeScript, Vite og Tailwind CSS. Siden presenterer tidligere studieprosjekter, bachelorprosjektet med Knowit og Telenor Maritime, erfaring, kompetanse og kontaktinformasjon.

## Live Demo

https://jonasmp02.github.io/portfolio-site/

## Innhold

- Forside med kort introduksjon og profilbilde
- Oversikt over tidligere prosjekter
- Fremhevet bachelorprosjekt om agentbasert beslutningsstøtte for maritim drift
- Prosjektsider for IK Start, Kartverket, FINN.no og bachelorprosjektet
- Personlig profilside med kompetanse, interesser og erfaring
- Prosjektstatus-side med prosess, kvalitet og ressursbruk fra bachelorprosjektet

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- GitHub Pages
- GitHub Actions

## Kjøre Lokalt

Installer avhengigheter:

```bash
npm install
```

Start utviklingsserver:

```bash
npm run dev
```

Vite viser lokal adresse i terminalen, vanligvis:

```text
http://localhost:3000/
```

Produksjonsbuild:

```bash
npm run build
```

For å forhåndsvise produksjonsbuild lokalt:

```bash
npm run preview
```

## Deploy

Siden deployes til GitHub Pages via GitHub Actions fra `main`-branchen. Workflowen ligger i `.github/workflows/deploy.yml` og bygger prosjektet med:

```bash
npm run build
```

Build-output legges i `out/` og publiseres til GitHub Pages.

## AI-Assistert Utvikling

AI-verktøy har blitt brukt som støtte i deler av utviklingsarbeidet, blant annet til kodegjennomgang, debugging, tekstforbedringer, dokumentasjon og strukturering av endringer. Endringer er vurdert og testet før de er tatt inn i prosjektet.
