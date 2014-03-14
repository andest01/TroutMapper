/**
 * Created by MBP on 3/12/14.
 */

define(function(require) {
    'use strict';

    var Restriction = function() {
        this.summary = '';
        this.officialText = '';
        this.isAnglingRestriction = false;
        this.isHarvestRestriction = false;
    };

    var proto = Restriction.prototype;

    Restriction.prototype.getIsHarvestingRestriction = function() {
        return this.isHarvestRestriction;
    };
    
    Restriction.prototype.setIsHarvestingRestriction = function(isHarvestingRestriction) {
        this.isHarvestRestriction = isHarvestingRestriction;
    };
    
    Restriction.prototype.getIsAnglingRestriction = function() {
        return this.isAnglingRestriction;
    };
    
    Restriction.prototype.setIsAnglingRestriction = function(isAnglingRestriction) {
        this.isAnglingRestriction = isAnglingRestriction;
    };
    
    Restriction.prototype.getSummary = function() {
        return this.summary;
    };
    
    Restriction.prototype.setSummary = function(summary) {
        this.summary = summary;
    };

    Restriction.prototype.getOfficialText = function() {
        return this.officialText;
    };
    
    Restriction.prototype.setOfficialText = function(officialText) {
        this.officialText = officialText;
    };
});