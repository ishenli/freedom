/**
 * @file 用户模块
 */

var bcrypt = require('bcrypt');
var STATUS_RESPONSE = {
    SUCCESS: {
        status: 0,
        msg: '注册成功！！'
    }
};

module.exports = {
    register: function (req, res) {
        var username = req.param('username');
        var password = req.param('password')
        var repassword = req.param('repassword')
        User.findOne({username: 'hello'}).exec(function (err, user) {
            if (err) {
                throw err;
            }

            if (user) {
                res.json(STATUS_RESPONSE.USER_EXISTS);
                return;
            }

            User.create({
                username: username,
                password: password
            }).exec(function (err, user) {
                if (err) {
                    throw err;
                }

                // 将用户放入session中
                user.loginIn = true;
                req.session.user = user;
                res.json(STATUS_RESPONSE.SUCCESS);
            });

        });
    }
};

