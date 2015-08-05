
## Angular Simpleplate: Rapid Angular JS Prototyping

Simple front-end structure for quickly getting up and running with Angular JS, primarily for rapid prototyping purposes.

### Installation

Simple six line install, have npm installed and open your terminal of choice.

```
git clone https://github.com/bfillmer/ngsp.git your-local-directory
cd your-local-directory
npm install
bower install
gulp build
gulp dev
```

Navigate to `http://localhost:3000/` to start developing.

### Basic File Structure

The application will be served from the `dist/` directory, which is updated on the fly by `gulp dev`. All application development occurs within `app/`.

More elaboration on application structure and best practices to come in the next update.

### Note on Bower Dependencies

Any packages installed with `bower` will need to have their files to include added to various config arrays in `gulpfile.js`.