'use strict';

var rand = function(min, max) {
    return Math.floor(Math.random() * max) + min;
};

var WellsFargo = function() {};

/**
 * A new user has registered for our awesome banking!
 */
WellsFargo.prototype.newUser = function() {
    this.startChargingFees();
};

/**
 * We, of course, need to start charging them fees frequently.
 */
WellsFargo.prototype.startChargingFees = function() {
    var _this = this;

    setTimeout(function() {

        _this.applyFee(rand(12.50, 35));

    }, rand(1, 20));
};

WellsFargo.prototype.applyFee = function(amount) {
    //...
};
