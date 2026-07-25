# Portfolio — Alexandru Macovetchi

Personal portfolio site for a Chișinău-based web studio: shipped web apps,
client sites and landing-page demos, in **three languages (RO / RU / EN)**.

**Live:** https://alex-macovetch1.github.io/portofoliu/

**Stack:** hand-written HTML · CSS · vanilla JavaScript — no framework, no build step

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222?style=flat&logo=githubpages&logoColor=white)

---

## Built without a framework

- **Runtime i18n in 3 languages** — every string is a `data-i18n` key resolved
  from an in-page dictionary (RO / RU / EN); switching language re-renders the
  whole page without a reload
- **Reveal-on-scroll animations** via `IntersectionObserver`
- **Zero dependencies** — no npm, no bundler; the repo is what the browser runs,
  deployed straight to GitHub Pages
- Responsive layout, lazy-loaded imagery, dark theme

## What it showcases

| Project | Type |
|---------|------|
| **Executive (TerraLux Group)** | Client work — two premium concierge sites |
| **WASD** | E-commerce storefront · Next.js 16 |
| **Playdex** | Analytics dashboard · Next.js 16 + live API |
| **LeadBot** | Bilingual AI chat assistant · Next.js 16 + Gemini |
| **Senkai** | Fullstack media hub · Next.js 16 + Supabase |
| **BARON / Valea Verde** | Landing-page demos with booking flows |

## Structure

```
index.html          # the whole site: markup, styles, i18n dictionary, scripts
assets/             # project imagery
cv/                 # downloadable CV
demo-barbershop/    # standalone landing-page demo
demo-pensiune/      # standalone landing-page demo
social/             # social-media design work
```

## Run it locally

No build step — open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

---

Built by [Alexandru Macovetchi](https://github.com/alex-macovetch1)
