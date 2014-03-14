/**
 * @fileOverview Stream is a base class for a Stream View.
 */

define(function(require) {
    'use strict';
    var Base = require('models/Stream');
    var Species = require('models/Species');
    var LinearReferenceSegment = require('models/LinearReferenceSegment');

    var StreamLine = function() {
        Base.prototype.constructor.call(this);
        this.init();
    };

    StreamLine.prototype = new Base();
    var proto = StreamLine.prototype;

    proto.init = function() {
        this.streamName = '';
        this.streamLength = 0;
        this.publiclAccessibleLength = 0;
        this.regulationSegments = [];
        this.publicAccessSegments = [];
        this.species = [];
    };

    proto.getRegulationSegments = function() {
        return this.regulationSegments;
    };

    proto.setRegulationSegments = function(segments) {
        this.regulationSegments = segments;
    };

    proto.getPublicAccessSegments = function() {
        return this.publicAccessSegments;
    };

    proto.setPublicAccessSegments = function(segments) {
        this.publicAccessSegments = segments;
    };

    proto.getSpecies = function() {
        return this.species;
    };

    proto.setSpecies = function(species) {
        this.species = species;
    };

    proto.fromJSON = function(jsonString) {
        debugger;
        // how can i defer to the functionality of the base type Stream's fromJSON functionality?
        this.setStreamId(jsonString.gid);
        this.setStreamName(jsonString.kittle_nam);
        this.setStreamLength(jsonString.length_mi);

        if (jsonString.species != null) {
            var species = jsonString.species.map(function(speciesJson) {
                debugger;
                return new Species(speciesJson.id, speciesJson.name, speciesJson.isStocked);
            });
            this.setSpecies(species);
        }

    };

    return StreamLine;
});