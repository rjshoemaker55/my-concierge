const axios = require('axios');

const loadResults = items => {
  const { firstName, destCity, originCity, depDate, returnDate } = items;

  const getOriginCityId = () => {
    axios({
      method: 'GET',
      url:
        'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c'
      },
      params: {
        query: originCity
      }
    })
      .then(response => {
        getDestCityId(response.data.Places[0].PlaceId);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getDestCityId = originCityId => {
    axios({
      method: 'GET',
      url:
        'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c'
      },
      params: {
        query: destCity
      }
    })
      .then(response2 => {
        searchFlights(originCityId, response2.data.Places[0].PlaceId);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const searchFlights = (originCityId, destCityId) => {
    console.log(`
      Origin City: ${originCityId}
      Dest City: ${destCityId}
      Inbound: ${depDate}
      Outbound: ${returnDate}
    `);

    axios({
      method: 'POST',
      url:
        'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c'
      },
      data: {
        inboundDate: '2019-12-15',
        cabinClass: 'business',
        children: '0',
        infants: '0',
        country: 'US',
        currency: 'USD',
        locale: 'en-US',
        originPlace: 'EWR-sky',
        destinationPlace: 'HOUA-sky',
        outboundDate: '2019-12-12',
        adults: '1'
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getOriginCityId();
};

export default loadResults;
