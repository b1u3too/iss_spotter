const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP: ", ip);
// });

fetchCoordsByIP('potato', (error, coords) => {
  if (error) {
    console.log("It broke while finding coordinates!", error);
    return;
  }

  console.log("It worked! Found coordinates: ", coords);
});