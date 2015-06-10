/**
 * @file docker main
 * @author shenli <shenli03@baidu.com>
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