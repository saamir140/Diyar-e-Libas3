# Diyar-e-Libas — Homepage rebuild

A clean, responsive homepage starter using page-specific files. This first build contains only the homepage and the assets it uses; category and product pages will be created separately in their own HTML, CSS, and JavaScript files.

## Structure

```text
index.html
css/index.css
js/index.js
assets/hero-model.jpg
assets/products/collection1_*.webp
assets/products/collection2_*.webp
README.md
```

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server. Google Fonts are loaded online; system fallbacks are provided.

## Current state

- Responsive homepage for mobile and desktop
- Mobile navigation toggle
- Interactive supplier-photo sample selectors for both collections
- Existing supplier images copied without editing
- Listed prices retained from the supplied site: Wash & Wear Rs. 4,000 and Legend Winter Cotton Rs. 3,350
- Unknown product details are explicitly marked as unconfirmed
- Checkout, payment processing, order recording, and destination category pages are not included/connected yet

## Next pages

Build `wash-wear.html` with `css/wash-wear.css` and `js/wash-wear.js`, then `legend-winter-cotton.html` with its matching CSS and JS, followed by product pages. Keep page-specific styles scoped to each page; add shared files only if a shared component is deliberately introduced.
