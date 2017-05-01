/**
 * Created by rishabhkhanna on 01/05/17.
 */
const gpio = require('onoff').Gpio;
const sleep = require('sleep');
var pin17  = new gpio(17, 'out');

pin17.writeSync(1);
sleep.msleep(5000);
pin17.writeSync(0);

