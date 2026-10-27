import express from 'express';

const app = express();
const port = 3005;

app.use(express.static('public'));
app.get('/', (req, res) => {res.sendFile(`${import.meta.dirname}/index.html`)});
app.get('/booking-create', (req, res) => {res.sendFile(`${import.meta.dirname}/views/thank-you.html`)});
app.listen(port, () => {console.log("Server is running")});