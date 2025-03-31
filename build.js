const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Run the Vite build
console.log('Building static frontend...');
exec('npx vite build client', (error, stdout, stderr) => {
  if (error) {
    console.error(`Build error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Build stderr: ${stderr}`);
  }
  console.log(stdout);
  console.log('Build complete!');
  
  // Create a simple index.js for Vercel to serve the static files
  const serverJsContent = `
  const express = require('express');
  const path = require('path');
  
  const app = express();
  
  // Serve static files
  app.use(express.static(path.join(__dirname, 'dist/public')));
  
  // Send all requests to index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/public', 'index.html'));
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
  });
  `;
  
  // Write the server.js file
  fs.writeFileSync(path.join(__dirname, 'server.js'), serverJsContent);
  console.log('Created server.js for static serving');
});