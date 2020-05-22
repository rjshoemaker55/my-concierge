const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const port = 4000;

app.use(cors());

let options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
    'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c',
  },
};

app.get('/', (req, res) => res.send('Hello world'));

app.get('/locationid/:cityName', async (req, res) => {
  console.log('Hit locationid GET route');

  let destCity = req.params.cityName;

  let locationQueryString = `
    https://tripadvisor1.p.rapidapi.com/locations/auto-complete?lang=en_US&units=mi&query=${destCity}
  `;

  const locationQuery = await fetch(locationQueryString, {
    options,
  });
  const locationResponse = await locationQuery.json();
  console.log(locationResponse.data[0].result_object.location_id);
  res.send(locationResponse.data[0].result_object.location_id);
});

app.get('/hotellist/:locationid/:checkin/:nights');

app.listen(port, () => console.log(`app listening on port ${port}`));
