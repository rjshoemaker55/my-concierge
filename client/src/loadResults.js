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
    fetch(
      'https://tripadvisor1.p.rapidapi.com/flights/create-session?currency=USD&ta=1&tc=11%252C5&c=0&d1=CNX&o1=DMK&dd1=2020-01-08',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
          'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c'
        }
      }
    );
  };

  await airportSearch(originCity).then(
    res => (flightData.originCityAirport = res[0].code)
  );
  await airportSearch(destCity).then(
    res => (flightData.destCityAirport = res[0].code)
  );

  console.log(flightData);
};
