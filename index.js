const express = require('express');
const app = express();
const port = 3000;

app.get('/name', (req, res) => {
    res.send('Natnael-Yohannes');
});

app.get('/hobby', (req, res) => {
    res.json({ hobby: 'Playing-Football' });
});

app.get('/dream', (req, res) => {
    res.send('To be a proffesional back-end developer');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
