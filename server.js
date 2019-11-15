const express = require('express');
const PORT = 5000;
const app = express();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

app.use('/search', require('./apiRoutes2'));

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
