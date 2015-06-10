/**
 * @file theme
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {

    var Dialog = require('../common/ui/Dialog');
    var lib = require('winnie');
    var controller = require('../controller');


    var config = {};

    config.templateMainTarget = 'main';
    config.template = '<!--target:main--><span class="trigger">主题</span><!--/target-->';

    config.domEvents = {
        'click: .trigger': function() {
            var me = this;

            if (this.dialog && this.dialog.element) {
                return this.dialog.show();
            }

            this.dialog = new Dialog({
                classPrefix:'ui-dialog',
                effect:'zoom',
                title:'主题设置',
                height:500
            });

            this.dialog.after('show', function () {

                me.emit('imgActionEnter', {
                    container: lib.get('[data-role=content]', me.dialog.element)
                });

            });

            this.dialog.show();

            this.dialog.after('hide', function () {
                me.dialog.dispose();
                console.log('img dis');
            });
        }
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
