cytoscape-cytoscape.js-d3-force
================================================================================


## Description

d3-force for cytoscape.js ([demo](https://.github.io/cytoscape.js-d3-force))

## Dependencies

 * Cytoscape.js ^3.2.0
 * <List your dependencies here please>


## Usage instructions

Download the library:
 * via npm: `npm install cytoscape-cytoscape.js-d3-force`,
 * via bower: `bower install cytoscape-cytoscape.js-d3-force`, or
 * via direct download in the repository (probably from a tag).

Import the library as appropriate for your project:

ES import:

```js
import cytoscape from 'cytoscape';
import cytoscape.jsD3Force from 'cytoscape-cytoscape.js-d3-force';

cytoscape.use( cytoscape.jsD3Force );
```

CommonJS require:

```js
let cytoscape = require('cytoscape');
let cytoscape.jsD3Force = require('cytoscape-cytoscape.js-d3-force');

cytoscape.use( cytoscape.jsD3Force ); // register extension
```

AMD:

```js
require(['cytoscape', 'cytoscape-cytoscape.js-d3-force'], function( cytoscape, cytoscape.jsD3Force ){
  cytoscape.jsD3Force( cytoscape ); // register extension
});
```

Plain HTML/JS has the extension registered for you automatically, because no `require()` is needed.


## API

TODO describe the API of the extension here.


## Build targets

* `npm run test` : Run Mocha tests in `./test`
* `npm run build` : Build `./src/**` into `cytoscape-cytoscape.js-d3-force.js`
* `npm run watch` : Automatically build on changes with live reloading (N.b. you must already have an HTTP server running)
* `npm run dev` : Automatically build on changes with live reloading with webpack dev server
* `npm run lint` : Run eslint on the source

N.b. all builds use babel, so modern ES features can be used in the `src`.


## Publishing instructions

This project is set up to automatically be published to npm and bower.  To publish:

1. Build the extension : `npm run build:release`
1. Commit the build : `git commit -am "Build for release"`
1. Bump the version number and tag: `npm version major|minor|patch`
1. Push to origin: `git push && git push --tags`
1. Publish to npm: `npm publish .`
1. If publishing to bower for the first time, you'll need to run `bower register cytoscape-cytoscape.js-d3-force https://github.com//cytoscape.js-d3-force.git`
1. [Make a new release](https://github.com//cytoscape.js-d3-force/releases/new) for Zenodo.
