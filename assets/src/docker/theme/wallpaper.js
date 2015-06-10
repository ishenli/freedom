/**
 * @file theme
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {


    var config = {};

    config.viewType = require('./wallpaperView');
    config.modelType = require('./wallpaperModel');

    config.events = {
        dispose: function() {
            console.log('img action dispose');
        },
        'view:create': function(query) {
            var me = this;
            this.model.create(query.name).then(function() {
                me.view.emit('createSuccess');
            });
        },
        'view:updateWallpaper': function(id, target) {
            var me = this;
            this.model.update(id).then(function (res) {
                me.view.emit('updateWallpaperSuccess', res.data.url, target);
            });
        },
        'view:delete': function(id) {
            var me = this;
            this.model.destroy(id).then(function (res) {
                if (res.status === 0) {
                    me.view.emit('deleteWallpaperSuccess');
                }
            });
        }
    };



    return config;
});
