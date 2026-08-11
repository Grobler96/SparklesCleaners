# Sparkle Cleaners website

A simple, responsive one-page website — no build tools, no dependencies. Just static files you can upload straight to GitHub.

## Files

- `index.html` — the whole page
- `style.css` — all styling
- `script.js` — mobile menu + quote form
- `assets/logo.jpg` — your logo (used as the site favicon)

## How to put this on GitHub Pages (free hosting)

1. Go to [github.com](https://github.com) and create a new repository (e.g. `sparkle-cleaners`). Keep it **public**.
2. Open the repo, click **Add file → Upload files**.
3. Drag in `index.html`, `style.css`, `script.js`, and the `assets` folder (with `logo.jpg` inside) — upload them one by one if GitHub's uploader won't take the folder at once, keeping the same file names and the `assets/` folder structure.
4. Scroll down and click **Commit changes**.
5. Go to the repo's **Settings → Pages**.
6. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Click **Save**.
7. Wait a minute, then refresh — GitHub will show you a live URL like `https://yourusername.github.io/sparkle-cleaners/`.

That's it — the site is live and free to host.

## Things to customize before launch

- Swap the phone number, email, and service area in the **Contact** section of `index.html`.
- Update prices in the **Services** section to match your real rates.
- Replace the placeholder reviews with real customer quotes.
- The quote form currently just shows a thank-you message in the browser — it doesn't send an email yet. To receive real submissions, connect it to a free form service like [Formspree](https://formspree.io) (swap the `<form>` tag's behavior) or a Google Form.
