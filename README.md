# Ghibli

A beautiful web application that transforms your photos into Studio Ghibli-inspired artwork with easy WhatsApp integration.

## Features

- Transform regular photos into Studio Ghibli-style artwork
- Simple WhatsApp integration for easy communication
- Pay via UPI, PhonePe, or Google Pay (₹19)
- Responsive design for all devices

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion

## Deployment Instructions

### Deploying to GitHub Pages

1. Fork or clone this repository to your GitHub account
2. Update the following values in your forked repository:
   - In `client/package.json`: Change `homepage` to match your GitHub username and repository name: 
     ```json
     "homepage": "https://yourusername.github.io/yourrepo",
     ```
   - In `client/vite.config.js`: Update the `base` path to match your repository name:
     ```js
     base: '/yourrepo/',
     ```
3. Push your changes to the main branch
4. GitHub Actions will automatically build and deploy your site to GitHub Pages
5. Your site will be available at `https://yourusername.github.io/yourrepo`

Alternatively, you can manually deploy with:
```bash
cd client
npm run deploy
```

### Deploying to Vercel

1. Fork or clone this repository to your GitHub account
2. Log in to [Vercel](https://vercel.com)
3. Click "New Project" and import your repository
4. Configure the project with the following settings:
   - Framework Preset: Vite
   - Root Directory: ./
   - The buildCommand in vercel.json will handle all necessary steps
   - Output Directory: client/dist
5. Click "Deploy"

The WhatsApp functionality is configured to direct messages to the number you specify with a predefined message. This will work automatically after deployment.

## Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit http://localhost:5000 to view the application locally.

## License

© 2025 Ghibli-Images. All rights reserved.
