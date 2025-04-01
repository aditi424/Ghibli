#!/bin/bash
# This script is used by Vercel to build only the client-side of the application

# Setup the client-only build environment
echo "Setting up client-only build environment for Vercel..."

# Copy needed assets to client directory
cp -r attached_assets/* client/public/ 2>/dev/null || :
cp client/src/components/Navbar-vercel.tsx client/src/components/Navbar.tsx

# Navigate to client directory and build
cd client
echo "Installing dependencies..."
npm install
echo "Building client application..."
npm run build

echo "Build completed successfully!"