export const loadResults = async data => {
  const { firstName, destCity, originCity, depDate, returnDate } = data;

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

  console.log(
    `Origin Airports: ${airportSearch(originCity).then(res =>
      console.log(res)
    )}`
  );
};
