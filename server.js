const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/search', (req, res) => {
  res.json({ msg: 'hello' });
});

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   app.get('*', (req, res) => {
//     res.sendfile(path.join((__dirname = 'client/build/index.html')));
//   });
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/public/index.html'));
// });

app.listen(port, (req, res) => {
  console.log(`App listening on port: ${port}`);
});
