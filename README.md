# JavaScript Boilerplate

This is a bare-bones skeleton for quickly getting new projects up and running with RequireJS. It reinforces Nerdery JavaScript code standards, providing standardized directory structures and naming conventions.

Additional information can be found on the [JavaScript Portal](http://js.nerderylabs.com/boilerplates)


## Getting Started

1. See `manifest.txt` to get a sense of the recommended project directory structure.
2. Point your browser to /web/index.html. A page will display stating `Success! The JavaScript boilerplate has been initialized!`.
3. Review the various settings in /web/index.html (such as `IS_PRODUCTION`, `LOG_CONSOLE`, `APP_VERSION`, etc). Since out-of-the-box, the boilerplate is completely static markup, you will want to ensure the settings in index.html are generated by your backend as needed.
4. Add your browser polyfills (eg, IE7 compatibility) to `/web/assets/scripts/src/polyfills`.
5. Add your third-party libraries (eg,  jQuery plugins) to `/web/assets/scripts/src/lib-thirdparty`
6. Add any custom libraries to `/web/assets/scripts/src/lib`.
7. Add views to `/web/assets/scripts/src/views`. The boilerplate includes an existing SampleView.js that can be used as a template for creating additional views.
8. Modify `/web/assets/scripts/src/App.js` to initialize your polyfills, libraries, and views.

## Building

The build process is centered around use of the [grunt task runner](http://gruntjs.com).

The tasks that grunt will run during the build process is specified in /tools/build/Gruntfile.js. You can add additional tasks specific to your project by editing this file.

### Build Tasks

By default, the build process performs the following tasks:

* Runs JSHint over each JavaScript source file to validate code quality
* Runs YUIDocs to generate automated JavaScript documentation based on code comments.
* Runs the RequireJS compiler to combine your JavaScript source files into single, minified script for production use. 
* Concatenates a banner comment to the top of the built script. For example:

    /*
    * Project: RequireJS-Boilerplate
    * Version: 2.0.0 (2013-07-11)
    * Development By: Company Name Here
    * Copyright(c): 2013
    */
    
### Running a Build

1. Change to the /tools/build directory (where Gruntfile.js is located)
2. On the command line, run the following command:
    * Windows: `grunt.bat`
    * Mac/Linx: `. grunt.sh`
3. Each task in the build process will run (may take a few moments). If successful, you will see 'Done, without errors'.
4. JavaScript documentation will be output to /docs/js/index.html
5. Compiled JavaScript will be output to /web/assets/scripts/build/main.js
   To use the compiled JavaScript in your application, change `SETTINGS.IS_PRODUCTION = true` in /web/index.html
   
It is recommended to make `grunt` part of an automated project build process so that your JavaScript is rebuilt every time you create a new production build. Eg, an ant build script, a post-build event in .NET, etc.   

## Boilerplate Editions

### "Full" edition

The "Full" version of the boilerplate includes everything you need to run grunt - nothing needs to be installed locally!
    
* The directory /tools/bin includes standalone node.js executables for Windows, Mac, and Linux. (Note: the standalone npm module for Windows was downloaded directly from http://nodejs.org/dist/npm

* The first time you run grunt.sh or grunt.bat, the directory /node_modules will be automatically populated with all of the necessary modules to run grunt
          
### "Lite" edition

The "Lite" version of the boilerplate does not include any of the standalone Node executables. In order to run the build using grunt, it is required that Node.js is installed locally.

1. Install Node.js
   * Download and install node.js from [http://nodejs.org](http://nodejs.org)
   
2. Install the grunt command line interface (CLI)
   * On the command line, run the command `npm install grunt-cli -g`

3. Install grunt packages
   * Change to the /tools/build directory (where package.json is located)
   * On the command line, run the following command: npm install
   * It take several minutes to completely download the dependencies. 
   * The directory /tools/build/node_modules will be populated with all of the necessary modules to run grunt.
   
4. Run grunt
  * Change to the /tools/build directory
  * On the command line, run `grunt`

If you have issues installing, please see the following tutorials:

* [install-grunt-js-on-windows](http://www.codebelt.com/javascript/install-grunt-js-on-windows)
* [install-grunt-js-on-a-mac](http://www.codebelt.com/javascript/install-grunt-js-on-a-mac)