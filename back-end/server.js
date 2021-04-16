const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const mash = require('./data.json');

app.use(express.json());
app.use((cors()));

app.get('/', (req, res) => {
    res.send(mash);
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));