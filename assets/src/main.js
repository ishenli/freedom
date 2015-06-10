/**
 * @file 入口模块
 * @author shenli <shenli03@baidu.com>
 */

define(function (require) {

    var util = require('winnie/lib/util');
    var controller = require('./controller');

    var actionSet = [{
        url: 'themeSetting',
        config: require('./docker/theme/wallpaper')
    }];

    util.each(actionSet, function (action) {
        controller.registerAction(action.url, action.config);
    });

    var kiraAction = require('kira/controller');
    var config = require('./config');

    kiraAction.registerAction(config);
    kiraAction.setMainContainer(document.getElementById('main'));


    return {
        enter: function() {

        }
    };
});