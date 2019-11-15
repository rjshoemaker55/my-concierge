const express = require('express');
const router = express.Router();
const axios = require('axios');
const moment = require('moment');
const momentDurationFormatSetup = require('moment-duration-format');
momentDurationFormatSetup(moment);

router.get('/', (req, res) => {
  axios({
    method: 'POST',
    url: 'https://airhob-api.p.rapidapi.com/sandboxapi/flights/v1.1/search',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'airhob-api.p.rapidapi.com',
      'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c',
      'accept-encoding': 'gzip, deflate',
      apikey: '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c',
      mode: 'sandbox',
      accept: 'application/json'
    },
    data: {
      TripType: 'O',
      NoOfAdults: 1,
      NoOfChilds: 0,
      NoOfInfants: 0,
      ClassType: 'Economy',
      OriginDestination: [
        {
          Origin: 'JFK',
          Destination: 'SFO',
          TravelDate: '07/14/2017'
        }
      ]
    }
  })
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    });
});

module.exports = router;
