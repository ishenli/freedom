/**
 * @file theme model
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {

    var ajax = require('winnie/component/io/ajax');

    var config = {};

    config.fetch = function() {
        return ajax.get('/wallpaper').then(function(res) {
            return JSON.parse(res);
        });
    };

    config.create = function (name) {
        var data = {
            name: name
        };

        return ajax.post('/wallpaper/create', data).then(function (res) {
            console.log('ok');
            console.log(res);
        });
    };


    config.update = function(wallpaperId) {
        return ajax.post('/wallpaper/selectWallpaper', {id: wallpaperId}).then(function (res) {
            return res;
        });
    };

    config.destroy = function(wallpaperId) {
        return ajax.post('/wallpaper/destroy', {id: wallpaperId}).then(function (res) {
            return res;
        });
    };

    return config;
});
