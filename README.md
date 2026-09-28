# alex.web — portfolio

My portfolio site: an e-commerce demo, paid client websites and web app demos, in three languages
(Romanian, Russian, English).

**Live:** https://alex-macovetch1.github.io/portofoliu/?lang=en

Built with AI-assisted development (Claude Code).

## What it shows

- **E-commerce:** AgroParts, a tractor-parts shop with 3,738 products, search by tractor model, cart,
  orders and an admin panel — case page with screenshots in [`agroparts/`](agroparts/)
- **Client work:** six live websites for one recurring client in Chișinău (spa, hammam, massage, concierge)
- **Web app demos:** a real-estate agency with an admin panel and a dental clinic site with online booking
  (both businesses are fictional and marked as demos)
- **WordPress:** a theme and two plugins
- **AI assistants:** customer-support and clinic chat demos in Romanian and Russian

Client projects are marked "Client"; demos are marked "Demo" or "Live".

## How it is built

- Plain HTML, CSS and JavaScript — no framework, no build step, deployed straight to GitHub Pages
- Language switch (RO / RU / EN) without a page reload, from an in-page dictionary
- Light and dark theme, remembered in `localStorage`
- Self-hosted fonts, subset for Latin, Latin Extended and Cyrillic
- Scroll animations with `IntersectionObserver`, `prefers-reduced-motion` respected
- SEO basics: structured data, sitemap, robots.txt

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```
