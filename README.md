# Baron Gold — Luxury Gold & Jewelry Website

**Your Sure Gold Plug in Africa.** A premium, responsive multi-page website for **Baron Gold**, a luxury gold, diamond, jewelry, watches and lifestyle brand.

Built as a static site — plain **HTML + CSS + JavaScript**, no build step. Just open `index.html`.

## Highlights

- **DOMIO-style floating glass dashboard** homepage hero (three-column layout: brand + featured piece, animated centre, collections list).
- **Orbiting hero animation** — a ring of gold pieces (watches, rings, chains, pendants, bars, earrings, bracelets, bridal) rotating around a "BARON GOLD · Live Gold" hub.
- Deep black / metallic gold / ivory / champagne luxury theme (Playfair Display + Inter).
- Sticky header, mobile drawer, scroll reveals, FAQ accordion, WhatsApp-driven inquiry form, floating WhatsApp button.
- **No fixed prices** — every CTA requests the live gold rate via WhatsApp.
- Every photo (58) and video (26) is used exactly once across the site (full original quality).

## Pages

| File | Page |
|------|------|
| `index.html` | Home (dashboard + orbit hero) |
| `about.html` | About Baron Gold |
| `collections.html` | Collections — gold, diamond, wedding, watches, lifestyle + galleries |
| `gold-bars.html` | Gold Bars |
| `custom-jewelry.html` | Custom Jewelry |
| `sell-gold.html` | Sell Your Gold |
| `repairs.html` | Gold Repairs |
| `contact.html` | Contact + inquiry form |

## Structure

```
index.html, about.html, …      # pages
css/styles.css                 # full design system
js/main.js                     # nav, accordion, reveals, form -> WhatsApp
assets/images/                 # 58 product images
assets/video/                  # 26 product videos
```

## Configure contact details (one place)

Edit the `BARON` object at the top of [`js/main.js`](js/main.js):

```js
const BARON = {
  whatsapp: "2348165675182",          // international format, no "+" or spaces
  phoneDisplay: "+234 816 567 5182",
  email: "info@barongold.africa",     // placeholder — set your real email
  instagram: "baron_gold1",
  facebook: "https://facebook.com/",  // placeholder — paste your page URL
  location: "Lagos, Nigeria"          // placeholder — set your real address
};
```

The WhatsApp/phone links are also hardcoded as `wa.me/2348165675182` in the HTML — use Find & Replace if your number differs. See `READ-ME-FIRST.txt` for full notes.

## Run locally

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 5500
# then visit http://localhost:5500
```
