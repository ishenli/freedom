/**
 * @file 控制器，用于实现Action的管理
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {

    var Action = require('kira/Action');

    function Controller() {
        this.actionConfig = {};
        this.actionCache = {};
    }

    Controller.prototype.registerAction = function(url, actionConfig) {
        if (this.actionConfig[url]) {
            throw new Error('this action has been registered');
        }

        this.actionConfig[url] = actionConfig;
    };


    Controller.prototype.enterAction = function(url) {
        if (this.actionCache[url]) {
            return this.actionCache[url];
        }

        this.actionCache[url] = new Action(this.actionConfig[url]);
        return this.actionCache[url];
    };




    return new Controller();
});