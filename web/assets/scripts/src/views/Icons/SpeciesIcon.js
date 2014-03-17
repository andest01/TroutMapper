/**
 * Created by MBP on 3/16/14.
 */

define(function(require) {
    'use strict';
    var d3 = require('d3');

    var SpeciesIcon = function(rootElement, species) {
        if (rootElement == null) {
            throw new Error('rootElement cannot be null');
        }

        if (species == null) {
            throw new Error('species cannot be null');
        }

        this.init(rootElement, species);
    };

    var proto = SpeciesIcon.prototype;

    proto.init = function(rootElement, species) {
        this.element = rootElement;
        this.species = species;
    };

    proto.setupHandlers = function() {

    };

    proto.createChildren = function() {

    };

    proto.layout = function() {

    };

    proto.enable = function() {

    };

    proto.disable = function() {

    };

    proto.destroy = function() {

    };

    proto.render = function() {

    };

    proto.redraw = function() {

    };

    return SpeciesIcon;
});