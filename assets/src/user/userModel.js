/**
 * @file theme model
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {

    var Promise = require('winnie/lib/promise');
    var ajax = require('winnie/component/io/ajax');


    var config = {};

    var mock = [
        {color: 'green'},
        {color: 'yellow'},
        {color: 'red'},
        {color: 'black'}
    ];

    config.fetch = function(args) {
        return Promise.resolve({
            list:mock
        });
    };

    config.register = function(data) {
        return ajax.post('/user', data).then(function (res) {
            console.info(res);
        });
    };

    return config;
});
