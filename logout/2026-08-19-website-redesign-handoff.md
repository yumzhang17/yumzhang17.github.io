# Personal Website Redesign — Session Handoff

**Date:** August 19, 2026
**Repository:** `/Users/momo/Desktop/local_git/yumzhang17.github.io`
**Remote:** `https://github.com/yumzhang17/yumzhang17.github.io.git`
**Active branch:** `redesign`
**Local preview:** `http://127.0.0.1:8888/` or `http://localhost:8888/`

## 1. Important Git State

- The original website is preserved at commit `86c0740`.
- Local branch `v2` points to the original website.
- Local tag `v2.0.0` also points to the original website.
- The redesign is being developed on branch `redesign`.
- **All redesign work is currently uncommitted and unpushed.**
- Do not use `git reset --hard`, `git checkout --`, or other destructive recovery commands.
- Before switching branches, first commit or intentionally stash the redesign changes.

Useful inspection commands:

```bash
cd '/Users/momo/Desktop/local_git/yumzhang17.github.io'
git status --short
git branch --show-current
git log --oneline --decorate -5
git diff --check
git diff v2.0.0 -- _pages/about.md
```

The original version can be inspected safely without changing branches:

```bash
git show v2.0.0:_pages/about.md
git show v2.0.0:_pages/portfolio.md
```

## 2. Local Preview Workflow

From the repository root, start Jekyll with:

```bash
cd '/Users/momo/Desktop/local_git/yumzhang17.github.io'
/opt/homebrew/opt/ruby@3.3/bin/bundle exec jekyll serve --host 127.0.0.1 --port 8888 --livereload
```

Then open:

```text
http://localhost:8888/
```

The server used during this session occasionally printed harmless WEBrick `ECONNRESET` messages when a browser tab refreshed or closed. Successful messages look like `Regenerating... done`.

If port 8888 is already occupied:

```bash
lsof -nP -iTCP:8888 -sTCP:LISTEN
```

## 3. Overall Design Direction

The website was changed from a playful/childish AcademicPages presentation to a clean professional academic portfolio for faculty and TTAP applications.

Key design decisions:

- White background, dark academic ink, restrained teal accents.
- Compact typography, borders, and light shadows instead of decorative effects.
- Terminal-inspired graphics are used only where they support the scientific narrative.
- Content emphasizes mechanistic biophysics, molecular simulation, protein dynamics, biomolecular condensates, MD + ML, and network biology.
- The site was inspired by Tong Zhou's professional academic website, without directly copying it.
- Desktop and 390 px mobile layouts were repeatedly checked for horizontal overflow.

Global styling is assembled in:

```text
/Users/momo/Desktop/local_git/yumzhang17.github.io/assets/css/main.scss
```

It currently imports:

- `_sass/_professional-home.scss`
- `_sass/_professional-research.scss`
- `_sass/_professional-publications.scss`
- `_sass/_professional-news.scss`
- `_sass/_professional-cv.scss`

## 4. Current Navigation

The primary navigation is now:

1. Research
2. Publications
3. News
4. Your Voice

Navigation source:

```text
/Users/momo/Desktop/local_git/yumzhang17.github.io/_data/navigation.yml
```

Teaching and CV were removed from the primary navigation. The standalone `/cv/` route remains available for compatibility but is intentionally not advertised in the menu.

## 5. Global Identity and Sidebar

Updated site identity:

- Full name: Yumeng Zhang
- Role: Computational Biophysicist
- Location: Cambridge, Massachusetts
- Email: `yumzhang@mit.edu`
- Correct Google Scholar profile: `https://scholar.google.com/citations?user=nUa8zmcAAAAJ&hl=en`
- Postdoctoral lab: Zhang Lab at MIT
- Ph.D. lab: Chen Lab at UMass Amherst

The postdoctoral and Ph.D. lab names under the avatar are clickable.

Relevant files:

```text
/Users/momo/Desktop/local_git/yumzhang17.github.io/_config.yml
/Users/momo/Desktop/local_git/yumzhang17.github.io/_includes/author-profile.html
/Users/momo/Desktop/local_git/yumzhang17.github.io/_layouts/single.html
```

The current avatar was intentionally retained for now.

## 6. Home Page

**URL:** `/`
**Content:** `/Users/momo/Desktop/local_git/yumzhang17.github.io/_pages/about.md`
**Styles:** `/Users/momo/Desktop/local_git/yumzhang17.github.io/_sass/_professional-home.scss`

Current content:

- Professional postdoctoral introduction with links to MIT, Bin Zhang, UMass Amherst, and Jianhan Chen.
- Research statement focused on physics-based and ML-integrated molecular models.
- Compact CV card with View PDF and Download actions.
- The user manually adjusted the CV card wording and placement. **Preserve these small manual edits.**
- “Research Focus: Mechanistic Biophysics” with four clickable cards:
  - Disease-Relevant Biophysics
  - Protein Dynamics & Interactions
  - Multiscale Molecular Modeling
  - MD + ML
- Each card links to the corresponding Research-page anchor.
- Network & Systems Biology remains an important interest.
- The separate “Emerging Research Direction — Network & Systems Biology” block is commented out and recoverable.
- Current Interests list remains visible.
- Professional scientific-collaboration email invitation remains at the end.

Latest CV asset:

```text
/Users/momo/Desktop/local_git/yumzhang17.github.io/images/CV_Yumeng_Zhang.pdf
```

## 7. Research Page

**URL:** `/portfolio/`
**Content:** `/Users/momo/Desktop/local_git/yumzhang17.github.io/_pages/portfolio.md`
**Styles:** `/Users/momo/Desktop/local_git/yumzhang17.github.io/_sass/_professional-research.scss`

The Research page is the most terminal-inspired section and is currently considered successful.

Top header:

- Compact mechanistic-biophysics terminal.
- Left diagram: force field / MD + AI / ML → protein ensembles → interactions → function → disease.
- Right diagram: conformational ensemble → specific binding, dynamic binding, and condensate formation.

Research map:

- Four clickable focus-area tiles connect the Home page and detailed Research sections.
- Each section has a “Return to research map” link.

Detailed organization:

1. **Disease-Relevant Biophysics**
   - Neurodegeneration
   - Cancer
   - Post-Translational Modification
   - Immunology
2. **Protein Dynamics & Interactions**
   - Phase Separation
   - p53
   - Viral & Pathogen-Associated Proteins
3. **Multiscale Molecular Modeling**
   - Atomistic Model Development
   - Enhanced Sampling
   - Coarse-Grained Model Development
   - Theory & Off-Lattice Modeling
4. **MD + ML**
   - Protein Language Models
   - MOFF2

Important content decision:

- A paper may intentionally appear in multiple disciplines.
- Each topic contains a concise mechanistic description and linked publications.
- Publication links use final publisher/full-text pages where available.
- Do not deduplicate repeated papers across research themes.

## 8. Publications Page

**URL:** `/publications/`
**Content:** `/Users/momo/Desktop/local_git/yumzhang17.github.io/_pages/publications.md`
**Styles:** `/Users/momo/Desktop/local_git/yumzhang17.github.io/_sass/_professional-publications.scss`

Current state:

- 15 curated research outputs.
- Sorted newest first across 2026, 2025, 2024, 2023, 2022, and 2021.
- 14 linked publication/preprint records.
- One unlinked in-press Springer book chapter.
- Co-first author (`#`) and corresponding author (`*`) notation is explained.
- Status chips distinguish Published, Preprint, Reviewed Preprint, and In Press.
- Current citation metrics link to Google Scholar.
- Duplicate Scholar records, redundant preprints, and conference abstracts were not added.

Important unresolved design item:

- Several ASCII header concepts were tried: bookshelf, scientists with papers, and an academic staircase with cats/collaborators/PI.
- The staircase concept was judged too ugly and should be redesigned later.
- The current source has no ASCII/terminal illustration at the top; it begins with the clean Scholar toolbar and publication list.
- Do not restore an earlier ASCII version automatically. Revisit the concept with the user next time.

## 9. News Page

**URL:** `/news/`
**Content:** `/Users/momo/Desktop/local_git/yumzhang17.github.io/_pages/news.md`
**Styles:** `/Users/momo/Desktop/local_git/yumzhang17.github.io/_sass/_professional-news.scss`

Teaching was replaced with a professional academic News timeline. The original WordyMe research posts remain preserved in:

```text
/Users/momo/Desktop/local_git/yumzhang17.github.io/_talks/Research/
```

The News page currently contains 11 concise milestones:

- October 2024 — MIT Biophysics Retreat poster presentation.
- October 2024 — Inaugural NCEMS Summit participant.
- February 2024 — Joined the Zhang Lab at MIT.
- December 2023 — Successfully defended Ph.D.
- August 2023 — Second prize at UMass ResearchFest.
- March 2023 — ACS Spring poster presentation.
- November 2022 — First public research talk / CBI Chalk Talk.
- February 2022 — First scientific conference poster at the Biophysical Society Annual Meeting.
- December 2021 — Advanced to Ph.D. candidacy.
- April 2021 — Completed Ph.D. prospectus.
- December 2019 — Joined the Chen Lab.

Supporting MIT retreat poster:

```text
/Users/momo/Desktop/local_git/yumzhang17.github.io/images/MIT_bps_retreat_yz.pdf
```

The NCEMS and ACS details were verified against official programs/archives. The CV and old WordyMe posts supplied the personal milestone record.

## 10. CV

Latest CV:

```text
/Users/momo/Desktop/local_git/yumzhang17.github.io/images/CV_Yumeng_Zhang.pdf
```

- Four-page PDF, visually verified.
- The Home page contains the main View PDF and Download actions.
- `/cv/` still exists but is not in the primary navigation.
- Standalone page source: `/Users/momo/Desktop/local_git/yumzhang17.github.io/_pages/cv.md`
- Standalone page styles: `/Users/momo/Desktop/local_git/yumzhang17.github.io/_sass/_professional-cv.scss`

## 11. Your Voice

**URL:** `/your-voice/`
**Page:** `/Users/momo/Desktop/local_git/yumzhang17.github.io/_pages/your-voice.html`
**Styles:** `/Users/momo/Desktop/local_git/yumzhang17.github.io/assets/css/your-voice.css`
**Behavior:** `/Users/momo/Desktop/local_git/yumzhang17.github.io/assets/js/your-voice.js`

The older playful “Leave Your Voice Here~” page was redesigned as a professional public conversation/guestbook.

Naming decision:

- Main navigation label: **Your Voice**
- Page title: **Your Voice**
- Introductory language still encourages open scientific conversation.

Features:

- Existing Firebase Realtime Database backend and messages were preserved.
- Public-message notice.
- Optional name or affiliation; blank names become Anonymous.
- 800-character top-level message limit.
- Accessible posting status and loading/error states.
- Clean note, author, and date formatting.
- Fixed the previous anonymous-submission JavaScript bug.
- Every message has a Reply action.
- Replies are stored with `parentId` and rendered as nested threads.
- Replies can themselves receive replies.
- Visual indentation is capped after four levels for readability, while deeper logical threads still work.
- No test message or reply was posted during QA.

The Firebase client configuration remains in the public JavaScript file, as is normal for Firebase web clients. Database security still depends on the Firebase Realtime Database rules configured in the Firebase console.

## 12. Files Currently Modified or Added

Modified tracked files:

```text
_config.yml
_data/navigation.yml
_includes/author-profile.html
_layouts/single.html
_pages/about.md
_pages/cv.md
_pages/portfolio.md
_pages/publications.md
_pages/your-voice.html
assets/css/main.scss
assets/css/your-voice.css
assets/js/your-voice.js
```

New/untracked files:

```text
_pages/news.md
_sass/_professional-cv.scss
_sass/_professional-home.scss
_sass/_professional-news.scss
_sass/_professional-publications.scss
_sass/_professional-research.scss
images/CV_Yumeng_Zhang.pdf
images/MIT_bps_retreat_yz.pdf
logout/2026-08-19-website-redesign-handoff.md
```

Always run `git status --short` at the beginning of the next session because the user may make additional edits between sessions.

## 13. Verification Completed

- Jekyll regenerated all edited pages successfully.
- `git diff --check` passed after the latest edits.
- JavaScript syntax check passed for `assets/js/your-voice.js`.
- Home, Research, Publications, News, CV, and Your Voice were visually checked locally.
- Desktop checks used approximately 1280 px width.
- Mobile checks used 390 × 844 px.
- No horizontal overflow was detected on the redesigned pages.
- Publication counts, News counts, navigation labels, CV links, Firebase message loading, and reply-form creation were checked programmatically.

## 14. Recommended Next Session Start

1. Read this handoff file.
2. Run `git status --short` and preserve any newer user changes.
3. Start Jekyll on port 8888.
4. Review the current site with the user before editing.
5. Likely next discussion: redesign or omit the Publications header illustration.
6. Review content wording and dates across News/Publications once more.
7. Test a real Your Voice reply only if the user explicitly wants to create a public test entry.
8. When the user approves the entire redesign, discuss making the first intentional commit on `redesign`.
9. Do not push or merge until the user explicitly authorizes it.

## 15. Working Preference to Preserve

- Always provide absolute file paths when explaining where content can be edited.
- Keep the local preview available at port 8888 before committing.
- Stop and ask when a substantive scientific or personal-content decision cannot be inferred safely.
- Preserve the user's manual wording and spacing adjustments.
- Keep the old site recoverable through `v2` / `v2.0.0`.
- Do not commit or push without explicit approval.
