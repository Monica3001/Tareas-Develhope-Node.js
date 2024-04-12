var figlet = require("figlet");
const clc = require('cli-color')

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log ("Something went wrong...");
    //console.dir(err);
    return;
  }
  console.log(clc.magenta(data));
});

