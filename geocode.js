const request = require('request');

var geocodeAdd = (add,callback) => {

  var address = encodeURIComponent(add);
  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json:true
  }, function (error, response, body) {
    if(error){
      // console.log("Problem Connecting to Google Server!");
      callback("Problem Connecting to Google Server!");
    }
      else if(body.status == "ZERO_RESULTS"){
        // console.log("Invalid Address!");
        callback("Invalid Address!");
      }
      else if(body.status == "OK"){
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('Address:', JSON.stringify(body.results[0].formatted_address,undefined,3)); // Print the HTML for the Google Maps api.
        // console.log('Latitude:', JSON.stringify(body.results[0].geometry.location.lat,undefined,3));
        // console.log('Longitude:', JSON.stringify(body.results[0].geometry.location.lng,undefined,3));
        loc_obj = {
          Address : body.results[0].formatted_address,
          Latitude : body.results[0].geometry.location.lat,
          Longitude : body.results[0].geometry.location.lng
        };
        callback(undefined,loc_obj);
        return loc_obj;
      }
  });
}

module.exports = {
  geocodeAdd
};
