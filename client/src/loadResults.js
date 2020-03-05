export const loadResults = async data => {
  const { firstName, destCity, originCity, depDate, returnDate } = data;

  let flightData = {
    originCityAirport: null,
    destCityAirport: null
  };

  const airportSearch = async city => {
    const response = await fetch(
      `https://tripadvisor1.p.rapidapi.com/airports/search?locale=en_US&query=${city}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
          'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c'
        }
      }
    );
    const json = await response.json();
    return json;
  };

  const flightSearch = async (originAirport, destAirport) => {
    const response = await fetch(
      `https://tripadvisor1.p.rapidapi.com/flights/create-session?currency=USD&ta=1&tc=11%252C5&c=0&d1=${destAirport}&o1=${originAirport}&dd1=${depDate}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
          'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c'
        }
      }
    );
    const json = await response.json();
    return json;
  };

  const flightPoll = async searchURL => {
    const response = await fetch(
      `https://tripadvisor1.p.rapidapi.com/flights/poll?currency=USD&ns=NON_STOP%252CONE_STOP&so=PRICE&sid=${searchURL}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
          'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c'
        }
      }
    );
    const json = await response.json();
    return json;
  };

  await airportSearch(originCity).then(res => {
    flightData.originCityAirport = res[0].code;
  });
  await airportSearch(destCity).then(
    res => (flightData.destCityAirport = res[0].code)
  );
  await flightSearch(
    flightData.originCityAirport,
    flightData.destCityAirport
  ).then(res => {
    flightPoll(res.search_params.sid).then(res2 => {
      console.log(JSON.stringify(res2, null, 2));
      let flight = res2.itineraries[0];

      let legs = [];

      flight.f[0].l.forEach(leg => {
        legs.push({
          departureAirport: {
            code: leg.da,
            name: res2.airports.find(airport => airport.c == leg.da).n
          },
          arrivalAirport: {
            code: leg.aa,
            name: res2.airports.find(airport => airport.c == leg.aa).n
          },
          dates: {
            departureDate: leg.dd,
            arrivalDate: leg.ad
          }
        });
      });
      console.log(`Legs: ${JSON.stringify(legs, null, 2)}`);
    });
  });
};
