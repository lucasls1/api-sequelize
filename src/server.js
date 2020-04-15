const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();
//42 minutos de aula
//https://www.youtube.com/watch?v=Fbu7z5dXcRs
app.use(express.json());
app.use(routes);

app.listen(3333);