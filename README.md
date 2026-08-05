# Million Strong Men

Static marketing site for the Million Strong Men initiative — a global effort advancing prostate cancer awareness, early detection, research, and treatment outcomes.

## Structure

Plain HTML/CSS/JS, no build step.

```
site/
├── index.html               Home
├── about.html                About the initiative, challenges, goals
├── precision-urology.html    Precision Urology™ approach & surgical innovation
├── risk-factors.html         Understanding prostate cancer risk
├── mobile-screening.html     Mobile screening & community outreach program
├── research.html             Research & innovation focus areas
├── holistic-health.html      Whole-person / holistic care
├── patient-stories.html      Patient testimonials
├── get-involved.html         Donate / volunteer / partner
├── assets/
│   ├── style.css             Shared design system (sidebar nav, cards, sections)
│   └── nav.js                Mobile sidebar toggle
└── .github/workflows/pages.yml   GitHub Pages deploy workflow
```

Every page shares a fixed left sidebar (collapses to a hamburger menu under 880px) and a common footer, built directly into each HTML file — there's no templating layer.

## Local development

Just open `index.html` in a browser, or serve the directory:

```bash
python3 -m http.server 8000
```

## Deployment

Pushing to `main` triggers `.github/workflows/pages.yml`, which publishes the site via GitHub Pages (Actions-based deployment). The custom domain is set via the `CNAME` file.

## Editing

There's no shared header/footer partial — sidebar nav and footer markup are duplicated across pages. When adding a page or nav link, update all pages' `<nav class="sidebar-nav">` and footer `<ul>` blocks together.
