/**
 * @fileOverview Stream is a base class for a Stream View.
 */

define(function(require) {
    'use strict';

    var Stream = function() {
        this.init();
    };

    var proto = Stream.prototype;

    proto.init = function() {
        this.streamName = '';
        this.streamLength = 0;
        this.publiclAccessibleLength = 0;
    };

    proto.getStreamName = function() {
        return this.streamName;
    };

    proto.getStreamLength = function() {
        return this.streamLength;
    };

    proto.getPublicAccessibleLength = function() {
        return this.publiclAccessibleLength;
    };

    proto.clone = function() {

    };

    proto.copy = function() {

    };

    proto.toJSON = function() {

    };

    proto.fromJSON = function() {

    };

    proto.destroy = function() {

    };

    return Stream;
});