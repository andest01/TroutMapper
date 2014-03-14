/**
 * @fileOverview App module definition
 */

define(function(require) {
    'use strict';
    
    // List all scripts that need to be loaded before everything else. Suitable for browser polyfills, etc.
    require('polyfills/requestAnimationFrame');
    require('polyfills/function.bind');
    
    var $ = require('jquery');
    var Util = require('lib/Util');
    var SampleView = require('views/SampleView');


    /**
     * Initial application setup. Runs once upon every page load.
     *
     * @class App
     * @constructor
     */
    var App = function() {

    };
    
    /**
     * Initializes the application and kicks off loading of prerequisites.
     *
     * @method init
     * @private
     */
    App.prototype.init = function() {
        // Create your views here
        // Pass in a jQuery reference to DOM elements that need functionality attached to them
        var streams = require('data/dummyStreamLine');
        var StreamLine = require('models/StreamLine');
        debugger;
        var i = streams.length;
        while(i--) {
            var stream = streams[i];
            var streamLine = new StreamLine();
            streamLine.fromJSON(stream);
        }
        //var sampleView = new SampleView($('.js-sample'));

        
        Util.log('Success! The JavaScript boilerplate has been initialized!');
    };

    return App;
});