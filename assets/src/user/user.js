/**
 * @file user
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {


    var config = {};

    config.viewType = require('./userView');
    config.modelType = require('./userModel');

    config.events = {
        'view: register': function(args) {
            this.model.register(args).then(function (res) {
                alert('register');
            });
        }
    };


    return config;
});
