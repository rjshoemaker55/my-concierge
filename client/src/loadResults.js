export const loadResults = (data) => {
  return new Promise((resolve, reject) => {
    const { destCity, arriveDate, numberNights } = data;

    const getLocationId = async () => {
      await fetch(`http://localhost:4000/locationid/${destCity}`).then((res) =>
        res.json().then((data) => {
          if (data.error) {
            reject('Invalid location.');
          } else {
            getHotelList(data);
          }
        })
      );
    };

    const getHotelList = async (locationId) => {
      await fetch(
        `http://localhost:4000/hotellist/${locationId}/${arriveDate}/${numberNights}`
      )
        .then((res) => {
          return res.json();
        })
        .then((parsedHotelList) => resolve(parsedHotelList));
    };

    getLocationId(destCity);
  });
};
