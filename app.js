const yargs = require('yargs');
const geocode = require('./geocode.js');
const forecast = require('./forecast.js');

const argv = yargs
  .options({
    a:{
      demand:true,
      alias:'address',
      describe:'Address to fetch the weather',
      string: true
    }
  })
  .help()
  .argv;


//node app.js --address "lohiya nagar vile parle"
//console.log(argv);

//We did all this as to abstact the geocode and location services from user but even give him the control of the response
//and how he wants to present the data so we gave him error then what to do and then result the the obj so he can decide how to show it
geocode.geocodeAdd(argv.address,(errorMsg,result) => {
  if(errorMsg){
    console.log(errorMsg);
  }
  else{
    console.log(JSON.stringify(result,undefined,3));
    forecast.getWeather(result.Latitude,result.Longitude,(errormsg,temperature) => {
      if(errormsg){
        console.log(errormsg);
      }
      else{
        console.log(`Temperature:${JSON.stringify(temperature,undefined,3)}`);
      }
    });
  }
});

// console.log(loc_obj);
