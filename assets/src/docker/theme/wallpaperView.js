/**
 * @file theme
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {

    var Tab = require('../../common/ui/Tab');
    var lib = require('winnie');
    var controller = require('controller');

    var config = {};

    config.templateMainTarget = 'main';
    config.template = require('./img.tpl');
    config.domEvents = {
        'submit: .theme-form': function (e) {
            var me = this;
            lib.on(lib.get('#file-iframe'), 'load', {
                fn: function () {
                    var url = this.contentDocument.getElementById('wallpaper').innerText;
                    me.emit('uploadSuccess', {
                        url: url
                    });
                },
                once: true
            });
        },
        'click: .theme-list-item': function(e) {
            var target = e.currentTarget;
            var id = target.getAttribute('data-id');
            this.emit('updateWallpaper', id, target);
        },
        'mouseenter: .theme-list-item': function(e) {
            var target = e.currentTarget;
            lib.addClass(target, 'status-delete');
        },
        'mouseleave: .theme-list-item': function (e) {
            var target = e.currentTarget;
            lib.removeClass(target, 'status-delete');
        },
        'click: .delete': function(e) {
            var target = e.currentTarget;
            var item = lib.closest(target, '.theme-list-item');
            e.stopPropagation();
            this.emit('delete', item.getAttribute('data-id'));
        }
    };

    config.events = {
        afterRender: function () {
            var me = this;
            console.log('tab init');
            me.tab = new Tab({
                element: lib.get('#theme-tab', this.container),
                panels: lib.query('.ui-tab-panel', this.container),
                triggers: lib.query('.ui-tab-item', this.container)
            });
        },
        dispose: function () {
            console.log('tab dispose');
            this.tab.dispose();
        },
        uploadSuccess: function () {
            lib.get('.theme-form', this.container).reset();
            controller.enterAction('themeSetting').reload();
        },
        /**
         * 更新当前墙纸成功
         * @param {string} url
         * @param {HTMLElement} target
         */
        updateWallpaperSuccess: function(url, target) {

            lib.css(lib.get('#wallpaper'), {
                backgroundImage: 'url(' + url + ')'
            });

            lib.removeClass(lib.get('.theme-list-item.cover'), 'cover');
            lib.addClass(target, 'cover');

        },
        deleteWallpaperSuccess: function() {
            controller.enterAction('themeSetting').reload();
        }
    };


    return config;
});
