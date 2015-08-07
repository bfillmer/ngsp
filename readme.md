
## Angular Simpleplate: Rapid Angular JS Prototyping

Simple front-end structure for quickly getting up and running with Angular JS, primarily for rapid prototyping purposes.

### Installation

Simple six line install, have npm installed and open your terminal of choice.

```
git clone https://github.com/bfillmer/ngsp.git your-local-directory
cd your-local-directory
npm install
bower install
gulp dev-build
gulp dev-watch
```

Navigate to `http://localhost:3000/` to start developing.

#### Difference between `dev-watch` and `dev-build`

The Gulp command `dev-build` wipes the `dev/` directory completely and copies all files over, `dev-watch` watches only application *JS*, *CSS*, and *HTML* files for changes and updates those specific files as needed.

### Basic File Structure

The application will be served from the `dev/` directory, which is updated on the fly by `gulp dev-watch`. All application development occurs within `app/`.

For development simplification all *SASS* and *JS* are concatenated for dev builds, but not minified.

### Note on Bower Dependencies

Any packages installed with `bower` will need to have their files to include added to various config arrays in `gulpfile.js`. In addition if the dependency is being used by injected for use by Angular and being tested update `karma.conf.js` with the appropriate files as well.

### Karma Testing

Karma unit tests are available for anything in the `modules` directory. Simply run `karma start` from the command line to run the tests.