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

  await airportSearch(originCity).then(
    res => (flightData.originCityAirport = res[0].code)
  );
  await airportSearch(destCity).then(
    res => (flightData.destCityAirport = res[0].code)
  );
  await flightSearch(
    flightData.originCityAirport,
    flightData.destCityAirport
  ).then(res => {
    flightPoll(res.search_params.sid).then(res2 => {
      let flight = res2.itineraries[0];
      let ap1code = flight.f[0].l[0].da;
      let legs = [
        {
          ap1: {
            code: ap1code,
            name: res2.airports.forEach(
              airport => airport.c == ap1code && airport.n
            )
          }
        }
      ];
      res2.airports.forEach(airport => console.log(airport));
      console.log(res2);
      console.log(flight);
      console.log(legs);
    });
  });
};
