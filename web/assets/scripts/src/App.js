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
        var streams = require('data/dummyStreamLineBeta');
        debugger;
        var d3 = require('d3');
        var StreamLine = require('models/StreamLine');
        var streamLines = streams.map(function(json) {
            var streamLine = new StreamLine();
            streamLine.fromJSON(json);
            return streamLine;
        });

        var stream = streamLines[0];

        var width = 290;
        var d3SvgCanvas = d3.select('#linear-reference').append('svg')
            .attr('class', 'axis')
            .attr('width', 292)
            .attr('height', 20);

        var segments = stream.getPublicAccessSegments();
        for (var i = 0; i < segments.length; i++) {
            var segment = segments[i];
            var x = segment.start * width;
            var m = (segment.stop * width) - x;

            d3SvgCanvas.append('rect')
                .attr('x', segment.start * width)
                .attr('y', 4)
                .attr('width', m)
                .attr('height', 11)
                .attr('rx', 4)
                .attr('ry', 4)
                .attr('class', 'public-land');
        }



        var axisScale = d3.scale.linear()
            .domain([0, stream.getStreamLength()])
            .range([0, 290]);

        var axis = d3.svg.axis()
            .scale(axisScale)
            .orient('bottom')
            .ticks(stream.getStreamLength())
            .outerTickSize([4])
            .innerTickSize([7]);

        d3SvgCanvas.append('g')
            .attr("transform", function(){
                return "translate(0, 8)";
            })
            .call(axis);
    };

    return App;
});