console.log('==> modal.js');

exports.fuckOff = function(e) {
    console.log('==> fuckOff');
    console.log('e ==>', e)
    window.some = arguments;
    let modal = require('./modal.js')
    console.log('window ==>', window)
    console.log('arguments ==>', arguments)
    // e.preventDefault();

}
