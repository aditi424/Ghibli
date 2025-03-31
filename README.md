# WhatsApp Ghibli Transform

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

### Deploying to Vercel

1. Fork or clone this repository to your GitHub account
2. Log in to [Vercel](https://vercel.com)
3. Click "New Project" and import your repository
4. Configure the project with the following settings:
   - Framework Preset: Vite
   - Root Directory: ./
   - Build Command: ./vercel-build.sh (uses our custom build script)
   - Output Directory: client/dist
5. Click "Deploy"

The WhatsApp functionality is configured to direct messages to the number 7353455185 with a predefined message. This will work automatically after deployment.

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