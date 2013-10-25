
var im = require('imagemagick');

var filename = '../sample-images/kittens.jpg';

im.identify(filename, function(err, oi) {
    if (err) {
      console.log(err);
    } else {
      console.log("Filename: " + filename);
    }
    console.log(oi);
});
