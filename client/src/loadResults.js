export const loadResults = async (data) => {
  const { firstName, destCity, arriveDate, numberNights } = data;

  const getLocationId = await fetch(
    `http://localhost:4000/locationid/${destCity}`
  )
    .then((response) => response.json())
    .then((parsedId) => parsedId);
};
