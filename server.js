const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // You can change this port if needed

// Serve static files from the current directory
app.use(express.static(__dirname));

// Optional: Serve index.html specifically for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    console.log(`Open http://localhost:${port}/index.html in your browser.`);
});