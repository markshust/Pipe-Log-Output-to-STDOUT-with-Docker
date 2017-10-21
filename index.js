var fs = require('fs');
var util = require('util');
var logFile = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});

console.log = (d) => {
  logFile.write(util.format(d) + '\n');
};

var i = 0;
var log = () => {
  console.log(`foo bar ${i}`);
  i++;
};

setInterval(log, 2000);
