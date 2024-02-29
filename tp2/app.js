const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

const voituresRouter = require('./routes/voitures');

app.use(bodyParser.json());

app.use('/voitures', voituresRouter);




app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});