/**
 * @file userView
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {

    var lib = require('winnie');

    var config = {};

    config.templateMainTarget = 'main';
    config.template = require('./user.tpl');

    config.domEvents = {
        'submit: #user-form': function(e) {
            e.preventDefault();
            var username = lib.get('#username').value;
            var password = lib.get('#password').value;
            this.emit('register', {
                username: username,
                password: password
            });
        }
    };

    config.transition = {
        effect: 'zoom'
    };

    config.events = {
        beforeRender: function() {
        },
        afterRender: function() {
            var me = this;

        }
    };


    return config;
});
