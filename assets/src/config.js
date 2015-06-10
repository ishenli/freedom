/**
 * @file config
 * @author ishenli <meshenli@gmail.com>
 */

define(function (require) {

    return [
        {
            path: '/user', action: require('./user/user')
        }
    ];
});