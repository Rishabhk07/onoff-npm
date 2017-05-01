/**
 * Created by rishabhkhanna on 01/05/17.
 */
const gpio = require('onoff').Gpio;
const sleep = require('sleep');
var pin17  = new gpio(17, 'out');
var pin22 = new gpio(22,'out');

pin17.write(1,function(){
console.log("true on pin 17")
});
pin22.write(1,function(){
console.log("true on pin 22");
});
sleep.msleep(5000);
pin17.write(0,function(){
console.log("false on pin 17")
});
pin22.write(0,function(){
console.log("false on pin 22")
})

