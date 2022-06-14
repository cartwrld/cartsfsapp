"use strict"

const express = require('express');
const app = express();

const { readFile } = require('fs').promises;

app.get('/', async (req, res) => {
    res.send( await readFile('./home.html', 'utf8'));
});
const PORT = parseInt(process.env.PORT) || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
});

module.exports = app;