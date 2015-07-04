/**
 * @file 视图Base
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {
    var config = {};
    var transition = require('./transition');

    config.events = {
        beforeRender: function () {
            this.container
        }
    };

    return {};
});