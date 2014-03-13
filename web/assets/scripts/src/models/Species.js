/**
 * Created by MBP on 3/12/14.
 */

define(function(require) {
    'use strict';
    var Species = function() {
        this.init();
    };

    var proto = Species.prototype;

    proto.init = function() {
        this.brookTrout = null;
        this.brownTrout = null;
        this.rainbowTrout = null;
    };

    proto.fromJSON = function(jsonString) {

    };

    proto.destroy = function() {

    };

    return Species;
});