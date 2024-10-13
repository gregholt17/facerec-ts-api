import express from 'express';

const app = express();
const port: number = 3000;

app.get('/', (req, res) => {
    res.send('Hello from my Typescript API!');
});

app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});