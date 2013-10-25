
var im = require('imagemagick');
var assert = require('assert');

console.log("Current Directory: "+__dirname);
var parentDir = __dirname.substring(0, __dirname.lastIndexOf('/'));
console.log("Parent Directory: " + parentDir);

var filename = parentDir+'/sample-images/kittens.jpg';

im.identify(filename, function(err, ia) { // ia = image attibutes
    console.log("Filename: " + filename);
    assert.equal(ia.width, 1600);
    assert.equal(ia.height, 1200);
});
