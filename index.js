const express = require('express');

// CREATE SERVER
const app = express();
const port = 3000;

// Middleware untuk menangani request body dalam format JSON
app.use(express.json());
app.use(express.static('public'));

// ROUTER GET
app.get('/', (req, res) => {
    res.send('Hello World');
});

// ROUTE
app.post('/data', (req, res) => {
    const userData = req.body;
    res.send(`Data yang diterima: ${JSON.stringify(userData)}`);
});

app.get('*', (req, res) => {
    res.status(404).send('Hello World guyss 404');
});

// Jalankan server di port 3000
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});