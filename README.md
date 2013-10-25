imagemagic-test
===============

A few simple tests with node-imagemagic
- - -

node-imagemagic **identify** method works fine by its self:

![identify method working](https://raw.github.com/nelsonic/imagemagic-test/master/sample-images/node-image-magic-identify-works-solo.png "im.identify working")

code: lib/index.js

but when I try to wrap im.identify in a method (with a callback) it *fails*:

![identify method fails when wrapped](https://raw.github.com/nelsonic/imagemagic-test/master/sample-images/node-image-magic-identify-fails-when-wrapped.png "im.identify fails when wrapped")



