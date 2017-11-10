const request = require('request');
var getWeather = (lat,lng,callback) => {

  request({
    url:`https://api.darksky.net/forecast/01a1c8b95bf98825d475e8a331ae25f0/${lat},${lng}`,
    json:true
  }, function (error, response, body) {
    if(!error && response.statusCode == "200"){
      // console.log(JSON.stringify(body.currently.temperature,undefined,3));
      callback(undefined,body.currently.temperature);
    }
    else{
        // console.log("Can't fetch weather from the forecast!");
        callback("Can't fetch weather from the forecast!");
    }
  });
}

module.exports = {
  getWeather
};
