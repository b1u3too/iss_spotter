const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It broke!", error);
//     return;
//   }

//   console.log("It worked! Returned IP: ", ip);
// });

// fetchCoordsByIP('potato', (error, coords) => {
//   if (error) {
//     console.log("It broke!", error);
//     return;
//   }

//   console.log("It worked! Found coordinates: ", coords);
// });

// fetchISSFlyOverTimes({ "latitude": 0,
// "longitude": 0 }, (error, times) => {
//   if (error) {
//     console.log("It broke!", error);
//     return;
//   }

//   console.log("It worked! Flyby details: ", times);
// });