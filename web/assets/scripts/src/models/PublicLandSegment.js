/**
 * Created by MBP on 3/12/14.
 */

define(function(require) {
    'use strict';

    var Base = require('models/LinearReferenceSegment');

    var PublicLand = function(start, stop) {
        Base.prototype.constructor.call(this, start, stop);
    };

    PublicLand.prototype = new Base();

    return PublicLand;
});