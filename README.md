# Heng Jin — Academic Research Portfolio

A dependency-free static site for GitHub Pages. It uses the supplied research figures and media directly from `publics/assets/`.

## Run locally

Open `index.html` in a current browser, or serve the repository with any static web server. No build or package-installation step is required.

## Publish with GitHub Pages

1. Create a GitHub repository and upload the site files plus `publics/assets/`. Keep `materials/Heng_Jin_CV.pdf` and the two linked research PDFs in `materials/`; the PowerPoint presentation does not need to be published.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose your production branch (normally `main`) and select **/(root)**, then save.
5. GitHub will provide the public URL once deployment completes.

`.nojekyll` ensures the static files are served directly. Before publishing, replace the pending GitHub link in `index.html` with Heng Jin’s verified profile URL if one is available, and confirm consent for the participant photo used in the hero.
