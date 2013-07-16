#!/usr/bin/env node

var commander = require("commander");

commander.prompt('Price per unit: ',Number, function(x) {
    if (x <= 100) {
	console.log("Amount must be > $100 to make them billz, son");
	process.exit();
    } else {
	var y = 1000000/(x-100);
	}
    var b = (20 * y);
    var c = (70 * y);
    var a = (10 * y);
    var d = x * y;
    var e = 1000000;
    var f = a + b + c + e;

    if (d == f) {
	console.log('The break even number is %j at $' + x + ' each.',y );
	process.exit();
    }
})

