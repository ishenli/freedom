/**
 * @file theme
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {

    var Action = require('kira/Action');
    var controller = require('../controller');

    var config = {};

    config.viewType = require('./themeView');
    config.modelType = require('./themeModel');

    config.events = {
        'view:imgActionEnter': function(options) {
            controller.enterAction('themeSetting').enter({
                container: options.container
            });
        }
    };


    return new Action(config);
});
