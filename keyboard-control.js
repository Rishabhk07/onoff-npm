/**
 * Created by rishabhkhanna on 02/05/17.
 */
const keypress = require('keypress');
keypress(process.stdin);
//controls
const controls = require('./controls');

process.stdin.on('keypress' , function (ch, key) {
    console.log('got "keypress"' , key);
    if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
    }

    if(key.name == 'w'){
     controls.forward();
    }

    if(key.name == 's'){
        controls.backward();
    }

    if(key.name == "a"){
        controls.left();
    }

    if(key.name == "d"){
        controls.right();
    }
    if(key.name == "space"){
        controls.stop();
    }

});

process.stdin.setRawMode(true);
process.stdin.resume();