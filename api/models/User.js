/**
 * @file 用户模块
 *
 */

var bcrypt = require('bcrypt');

module.exports = {

    attributes: {
        username: {
            type: 'string',
            max: 16,
            unique: true,
            required: true
        },
        password: {
            type: 'string',
            required: true
        },
        loggedIn: {
            type: 'boolean',
            defaultsTo: 0
        },
        avator: {
            type: 'string'
        }
    },
    beforeCreate: function (values, next) {

        var salt = bcrypt.genSaltSync(10);

        bcrypt.hash(values.password, salt, function (err, hash) {
            console.log('pwd', values.password)
            if (err) return next(err);
            values.password = hash;
            next();
        });

    }
};

