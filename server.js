const express = require('express');
const path = require('path');
const app = express();

// Bepaal de poort, gebruik de door Clever Cloud toegewezen poort of 12000 als fallback
const port = process.env.PORT || 12000;

// Serveer statische bestanden vanuit de huidige directory
app.use(express.static(__dirname));

// Route voor de hoofdpagina
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start de server
app.listen(port, '0.0.0.0', () => {
  console.log(`BMI Calculator app draait op http://0.0.0.0:${port}`);
});