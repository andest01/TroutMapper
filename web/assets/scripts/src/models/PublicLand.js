/**
 * Created by MBP on 3/12/14.
 */

define(function(require) {
    'use strict';

    var PublicLand = function() {
        this.summary = '';
        this.officialText = '';
        this.isAnglingRestriction = false;
        this.isHarvestRestriction = false;
    };
    
    PublicLand.prototype.getType = function() {
        return this.Type;
    };
    
    PublicLand.prototype.setType = function(Type) {
        this.Type = Type;
    };
    

});