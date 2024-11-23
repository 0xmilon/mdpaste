const express = require('express');
const path = require('path');
const app = express();

// Serve static files from src directory
app.use(express.static(path.join(__dirname, 'src')));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
