const express = require('express');
const cors = require('cors');
const port = 5000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send({ message: 't3-verse Server.' });
});

app.listen(port, () => {
    console.log('Listening to port: ', port);
});
