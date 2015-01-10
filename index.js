'use strict';

var rand = function(min, max) {
    return Math.floor((Math.random() * max) + min);
};

var randArray = function(arr) {
    return arr[rand(0, (arr.length - 1)];
};

var execs = [
    { name: 'John G. Stumpf', account: '8887776665555' },
    { name: 'John Shrewsberry', account: '9900000000' }
];

var WellsFargo = function() {};

/**
 * A new user has registered for our awesome banking!
 */
WellsFargo.prototype.newCustomer = function(user) {
    this.startChargingFees(user);
};

/**
 * We, of course, need to start charging them fees frequently.
 */
WellsFargo.prototype.startChargingFees = function(user) {
    var _this = this;

    setTimeout(function() {

        _this.applyFee(user, rand(12, 35));
        _this.startChargingFees(user);

    }, rand(60, 1200));

    setTimeout(function() {
        _this.sendToCollections(user);
    }, random(1200, 3600));

};

WellsFargo.prototype.applyFee = function(amount) {
    this.withdrawAmountFromUser(user, amount);
    this.depositToExecutiveBankingAccount((amount * 0.95), randArray(execs));
};

/**
 * Can't forget about collections!
 */
WellsFargo.prototype.sendToCollections = function() {
    this.startCallingObsessively();
};

/**
 * Be sure to call every second
 */
WellsFargo.prototype.startCallingObsessively = function() {
    setInterval(function() {
        // ...
    }, 1000);
};

WellsFargo.prototype.withDrawAmountFromUser = function(user, amount) {
    // ...
};
