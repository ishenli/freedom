/**
 * @file 视图Base
 * @author shenli <shenli03@baidu.com>
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