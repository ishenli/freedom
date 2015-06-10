/**
 * @file theme model
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {

    var Promise = require('winnie/lib/promise');

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

    return config;
});
