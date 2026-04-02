# CV Template (Dual Format)

This project supports two CV formats on GitHub Pages:

- Modern format (data-driven): `cv-modern.html`
- Classic format (original style): `cv_liked.html`
- Format switch page: `index.html`

## Edit Rule

To update the modern CV, edit only this file:

- `data/cv-data.js`

Presentation/template files are separate and normally do not need edits.

## Directory Structure

- `index.html`: format switcher page
- `cv-modern.html`: modern CV template
- `cv_liked.html`: classic CV template
- `assets/css/style.css`: modern CV style
- `assets/js/render-cv.js`: modern CV renderer
- `data/cv-data.js`: personal data for modern CV

## Required Sections (Modern CV)

- Education is rendered from `education`
- Experience is rendered from `experience`
- Military service should be included as one item in `experience`

## Local Test

```bash
python3 -m http.server 8080
xdg-open http://localhost:8080/index.html
```

## Keep Old Git Logs (No History Rewrite)

Use normal commits and avoid `git push --force`.

If your original repository already exists locally:

```bash
# 1) move to your original repo clone
cd /path/to/changhwanjoe.github.io

# 2) create a feature branch
git checkout -b feat/dual-cv-format

# 3) copy files from this project into that repo
#    (index.html, cv-modern.html, cv_liked.html, assets/, data/)

# 4) commit and push
git add .
git commit -m "Add dual CV format switcher (classic + modern)"
git push -u origin feat/dual-cv-format
```

Then open a Pull Request and merge into `main`.

This preserves all old commit logs and old CV files.
