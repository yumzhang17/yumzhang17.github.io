# GitHub Pages CSS Deployment Fix

**Date:** August 19, 2026

**Repository:** `yumzhang17/yumzhang17.github.io`

**Working branch:** `redesign`

**Published branch:** `master`

## Issue observed after publication

The redesigned website content deployed correctly, but `https://yumzhang.com/` initially displayed the new HTML with the old, mostly unstyled presentation.

The deployed page was still requesting the stylesheet from:

```text
https://yumzhang17.github.io/assets/css/main.css
```

That address redirects to the custom domain. GitHub Pages also serves the stylesheet with a browser/CDN cache lifetime, so the new HTML could appear before a previously cached copy of `main.css` was refreshed.

## Diagnosis

- The GitHub Pages build completed successfully.
- The published `main.css` contained all of the new professional home, research, publications, news, and CV styles.
- The problem was therefore not missing Sass imports or incorrect page content.
- The visible mismatch was caused by an unchanged stylesheet URL serving a cached pre-redesign CSS response.

## Permanent fix

Two small deployment changes were made:

1. `_config.yml` now uses `https://yumzhang.com` as the canonical site URL.
2. `_includes/head.html` appends the Jekyll build timestamp to the main stylesheet URL:

```liquid
<link rel="stylesheet" href="{{ base_path }}/assets/css/main.css?v={{ site.time | date: '%s' }}">
```

Each new Jekyll build now produces a different stylesheet URL. Browsers and the GitHub Pages CDN will therefore request the CSS associated with that deployment instead of reusing an older cached file.

## Verification

- `git diff --check` passed.
- The local Jekyll production build completed successfully.
- The generated HTML contains the versioned `main.css?v=...` link.
- The corrected professional layout was verified at `http://localhost:8888/`.
- No page content or user-made design adjustments were changed by this fix.

## Files changed

- `_config.yml`
- `_includes/head.html`
- `logout/2026-08-19-css-deployment-fix.md`

## Future deployment note

Keep the timestamp query parameter on `main.css`. It prevents the same temporary “new content with old styling” mismatch after later GitHub Pages updates.
