# Dice Web2

A simple React + Vite dice roller, deployed to GitHub Pages.

## Project Structure

```
Dice_Web2/
├── .github/workflows/   # GitHub Actions deploy workflow
└── dice-react-app2/     # The React app (this is the actual project)
    ├── src/
    │   ├── App.jsx       # Main app logic
    │   ├── header.jsx    # Header component
    │   └── assets/       # Dice images, logo, etc.
    ├── public/
    └── favicon/
```

## Quick Start

```bash
cd dice-react-app2
npm install
npm run dev
```

Then open http://localhost:5173

## Deploy

Push to `master` and GitHub Actions builds and deploys automatically to:
https://bmcunningham4.github.io/Dice_Web2/
