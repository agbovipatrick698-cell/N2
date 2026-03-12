# Campus Nails — Static Site

Student-run nail studio one-page site (HTML/CSS/JS only). Works on any static host, including GitHub Pages.

## Files
- `index.html` — content + sections
- `style.css` — layout, colors, animations
- `script.js` — mobile nav toggle + smooth scroll

## Run locally
Double-click `index.html` or run a local server (recommended so relative links behave):
```sh
# from this folder
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages
Repo name (suggested): `campus-nails-site`
Live URL (after Pages is on): `https://Agbovipatrick698-cell.github.io/campus-nails-site/`

Web upload steps (no local git needed):
1. Create the repo on GitHub (no template files).
2. “Add file” → “Upload files”: add `index.html`, `style.css`, `script.js`, `README.md`, and the `images` folder (keep `.gitkeep` so the folder exists).
3. Commit to `main`.
4. Settings → Pages → Source = “Deploy from a branch”, Branch = `main`, Folder = `/ (root)`. Save.
5. Wait ~1 minute; your site will be live at the URL above.

## Customization checklist
- Update contact details (IG handle, phone, booking link) in `index.html`.
- Swap gallery tiles for real photos: drop images into the `images/` folder and replace the paths (`images/look-1.jpg`, etc.) in the Gallery section of `index.html`.
- Adjust hours/pricing copy under Services and Pricing.
- Add a favicon: place `favicon.ico` in this folder and add `<link rel="icon" href="favicon.ico">` inside `<head>`.
- If using a custom domain, add a `CNAME` file with your domain and configure DNS to GitHub Pages.

## Optional niceties
- Hook a real booking link (Cal.com, Calendly, Google Forms).
- Add simple analytics (e.g., Plausible) by inserting their script near the end of `index.html`.
- Compress images for faster loads (aim <300 KB each).
