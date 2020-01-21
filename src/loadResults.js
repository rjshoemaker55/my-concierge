// const axios = require('axios');

// Using Skyscanner API for now after Kajak was discontinued

// const loadResults = items => {
//   return new Promise((resolve, reject) => {
//     const { firstName, destCity, originCity, depDate, returnDate } = items;

//     let originCityId;
//     let destCityId;
//     let originCityName;
//     let destCityName;

//     // TODO: Combine two below functions into one for optimization

//     // Get origin city ID to use for flight search request
//     const getOriginCityId = () => {
//       axios({
//         method: 'GET',
//         url:
//           'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
//         headers: {
//           'content-type': 'application/octet-stream',
//           'x-rapidapi-host':
//             'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
//           'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c'
//         },
//         params: {
//           query: originCity
//         }
//       })
//         .then(response => {
//           originCityId = response.data.Places[0].PlaceId;
//           originCityName = response.data.Places[0].PlaceName;
//           getDestCityId();
//         })
//         .catch(error => {
//           console.log(error);
//           reject(error);
//         });
//     };

// Get destination city id to use for flight search request
// const getDestCityId = () => {
//   axios({
//     method: 'GET',
//     url:
//       'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
//     headers: {
//       'content-type': 'application/octet-stream',
//       'x-rapidapi-host':
//         'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
//       'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c'
//     },
//     params: {
//       query: destCity
//     }
//   })
//     .then(response => {
//       destCityId = response.data.Places[0].PlaceId;
//       destCityName = response.data.Places[0].PlaceName;
//       searchFlights();
//     })
//     .catch(error => {
//       console.log(error);
//       reject(error);
//     });
// };

// const searchFlights = () => {
//   const returnObj = {
//     firstName,
//     originCityId,
//     originCityName,
//     destCityId,
//     destCityName,
//     depDate,
//     returnDate
//   };

// Send back response to landing page
//   resolve(returnObj);

// Getting 500 error from the below request, inserting dummy data instead of response for now

// axios({
//   method: 'POST',
//   url:
//     'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'x-rapidapi-host':
//       'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
//     'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c'
//   },
//   data: {
//     inboundDate: '2019-12-15',
//     cabinClass: 'business',
//     children: '0',
//     infants: '0',
//     country: 'US',
//     currency: 'USD',
//     locale: 'en-US',
//     originPlace: 'EWR-sky',
//     destinationPlace: 'HOUA-sky',
//     outboundDate: '2019-12-12',
//     adults: '1'
//   }
// })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });
//     };

//     getOriginCityId();
//   });
// };

// export default loadResults;

export const loadResults = async (
  firstName,
  destCity,
  originCity,
  depDate,
  returnDate
) => {
  fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=${originCity}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c'
      }
    }
  ).then(res => console.log(res));
};
