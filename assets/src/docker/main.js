/**
 * @file docker main
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {

    return {
        init: function () {
            console.log('docker init');
            require('./theme').enter({
                container:document.getElementById('theme')
            });
        }
    };
});