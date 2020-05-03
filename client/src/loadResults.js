export const loadResults = async (data) => {
  const { firstName, destCity, arriveDate, numberNights } = data;

  let locationQueryString = `
    https://tripadvisor1.p.rapidapi.com/locations/auto-complete?lang=en_US&units=mi&query=${destCity}
  `;

  const getLocationId = (locationQueryString) => {
    fetch(locationQueryString, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
        'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c',
      },
    }).then((res) => console.log(res.json().data.result_object.location_id));

    // let hotelList = await fetch(hotelQueryString, {
    //   method: 'GET',
    //   headers: {
    //     'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
    //     'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c',
    //   },
    // }).then((res) => console.log(res.json()));
  };
};
