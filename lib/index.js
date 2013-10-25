
var im = require('imagemagick');
var assert = require('assert'); 

var parentDir = __dirname.substring(0, __dirname.lastIndexOf('/'));
console.log("Parent Directory: " + parentDir);

var filename = parentDir+'/sample-images/kittens.jpg';

im.identify(filename, function(err, ia) {   // ia = image attibutes
    console.log("Filename: " + filename);
    assert.equal(ia.width, 1600); 
    assert.equal(ia.height, 1200);          // so far so good
});

/* If I try to wrap im.identify in a helper method with callback() it fails */

var IR = {};

IR.imageAttributes = function(filename, callback) {
  im.identify(filename, function(err,ia) { callback(ia) });
};

// now try and call it with assertion in anon callback:
IR.imageAttributes(filename, function(err,ia) {
    console.log(ia.width);
    assert.equal(ia.height, 1200); 
});