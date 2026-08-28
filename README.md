# Alkras — Website

Static site, no build step. Plain HTML/CSS/JS — five pages sharing one stylesheet.

## Structure

```
index.html            Home
about.html             About / story
capabilities.html      Three capability areas
certifications.html    Patents & certifications
contact.html            Contact form (not wired to a backend yet)
css/style.css           All styling — design tokens at the top
js/main.js              Mobile nav toggle + contact form placeholder
assets/images/          Drop real photos here
assets/video/           Drop real video here (see index.html comment for hero swap)
assets/certs/           Certificate scans / patent PDFs
```

## What's placeholder right now

Every `[bracketed]` line in the HTML is a stand-in for real content —
patent numbers, certification names, project descriptions, stats,
photos. Search each file for `[` to find them quickly:

```
grep -rn '\[' *.html
```

Only list patents that are actually **granted and published** (USPTO-searchable),
not pending applications.

## Running it locally

No install needed:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser.

## Deploying to GitHub Pages (for now, before the custom domain)

1. Create a new GitHub repo (public or private — Pages works with both
   on a paid plan; public repos get it free).
2. Push this folder as the repo's contents:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source → Deploy from a branch →
   main / (root)**.
4. GitHub gives you a `https://<username>.github.io/<repo>/` URL —
   that's your temporary address until the custom domain is ready.

## Later: custom domain + Cloudflare

When you're ready to buy the domain, don't point it at the default
GitHub Pages / Cloudflare Pages subdomain — those get blocked in
Russia. Put the domain behind Cloudflare with the DNS record set to
**Proxied** (orange cloud), not "DNS only." Full steps are in the
chat where this was planned out.
