const express = require('express');
const app = express();
const PORT = 8080;
const mash = require('../back-end/data.json');
const cors = require('cors');

app.use((cors()));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(mash);
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));