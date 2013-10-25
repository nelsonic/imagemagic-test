imagemagic-test
===============

A few simple tests with node-imagemagic
- - -

node-imagemagic **identify** method works fine by its self.

```javascript
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
```

If you download this repo and run `npm install` followed by: 
`istanbul cover lib` you will see 100% coverage 
(i.e. we are executing im.identify successfully):

![identify method working](https://raw.github.com/nelsonic/imagemagic-test/master/sample-images/node-image-magic-identify-works-solo.png "im.identify working")


*However* when I try to wrap im.identify in a method (with a callback) it *fails*:

```javascript
IR.getOriginalImageAttributes = function(filename, callback) {
  return im.identify(filename, function(err, ia) {
    console.log("Filename: " + filename);
    console.log(ia);
    callback(ia);       // do something with the image attributes
  });
};
```

![identify method fails when wrapped](https://raw.github.com/nelsonic/imagemagic-test/master/sample-images/node-image-magic-identify-fails-when-wrapped.png "im.identify fails when wrapped")

### What am I doing wrong?