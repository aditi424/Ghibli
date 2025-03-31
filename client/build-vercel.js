// This is a pre-build script for Vercel
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the Navbar-vercel.tsx file is copied to Navbar.tsx for production
try {
  const sourceNavbar = path.join(__dirname, 'src/components/Navbar-vercel.tsx');
  const targetNavbar = path.join(__dirname, 'src/components/Navbar.tsx');
  
  if (fs.existsSync(sourceNavbar)) {
    const content = fs.readFileSync(sourceNavbar, 'utf8');
    fs.writeFileSync(targetNavbar, content);
    console.log('✅ Successfully copied Navbar-vercel.tsx to Navbar.tsx');
  } else {
    console.log('⚠️ Navbar-vercel.tsx not found, skipping copy');
  }
} catch (error) {
  console.error('Error copying Navbar file:', error);
}

// Check if we have directories we need
try {
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
    console.log('✅ Created public directory');
  }
} catch (error) {
  console.error('Error checking/creating directories:', error);
}

console.log('✅ Pre-build setup complete!');