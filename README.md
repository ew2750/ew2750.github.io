# ErxiaoWang personal website

A lightweight, responsive academic portfolio for GitHub Pages. It is based on the page structure of [Douglas Zhou's website](https://douglaszhou28.github.io/) and has been rewritten as a neutral template with placeholder content.

No build tools or dependencies are required. Edit the HTML files, add your assets, and publish.

## Quick start

1. Replace every item marked `TODO` in the HTML files.
2. Replace `assets/img/profile-placeholder.svg` with your portrait (or update the image path in `index.html`).
3. Add your CV as `assets/cv/your-name-cv.pdf` and update both CV links.
4. Put papers, posters, and slides in the matching folders under `assets/`.
5. Preview by opening `index.html` in a browser.
6. Create a GitHub repository named `YOUR-USERNAME.github.io`, then connect and push this local repository:

   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git add .
   git commit -m "Customize academic website"
   git push -u origin main
   ```

GitHub Pages should publish at `https://YOUR-USERNAME.github.io/`. If it does not, open the repository's **Settings → Pages** and select **Deploy from a branch**, `main`, and `/ (root)`.

## Where to edit

| File | Content |
| --- | --- |
| `index.html` | Short bio, position, links, portrait |
| `research.html` | Research themes and questions |
| `projects.html` | Expandable research/project entries |
| `presentations.html` | Publications, talks, and posters |
| `cv.html` | Abridged CV and CV download/embed |
| `about.html` | Personal background, interests, contact links |
| `styles.css` | Colors, typography, spacing, responsive layout |

Search the whole project for `TODO` to find every required customization.

## Asset folders

- `assets/img/` — portrait and other images
- `assets/cv/` — CV PDF
- `assets/projects/` — project papers, reports, or slides
- `assets/presentations/` — posters and presentation materials

Keep filenames lowercase and avoid spaces for the simplest links.

## Attribution and license note

The referenced upstream repository did not include a license at the time this template was prepared. This version therefore removes the original author's personal text and media and retains the upstream URL for attribution. Before distributing a close derivative, confirm that your intended use is permitted or ask the original author.
