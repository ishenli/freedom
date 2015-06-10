/**
 * @file 登录模块
 * @example
 * status:{
 *   0:'ok',
 *   1:'用户名不正确',
 *   2:'密码错误',
 *   3:'没有找到该用户',
 *   4:'该用户已存在',
 * }
 */

var bcrypt = require('bcrypt');
var STATUS_RESPONSE = {
    USER_EXISTS: {
        status: 0,
        msg: '该用户已存在'
    },
    NO_USER: {
        status: 3,
        msg: '没有找到该用户'
    }
};
module.exports = {
    main: function (req, res) {
        if (req.session.user) {
            User.find(req.session.user.id).exec(function (err, user) {
                if (err) {
                    throw err;
                }

                if (user) {
                    var data = {
                        status: 0,
                        user: user
                    };
                    res.json(data);
                }
                else { //  没有找到该用户
                    res.json({
                        status: 3,
                        msg: '没有找到该用户'
                    });
                }
            });
        }
    },
    login: function (req, res) {
        User.findOne({
            usrname: req.param('username')
        }, function (err, user) {
            if (err) {
                throw err;
            }
            if (user) {
                var match = bcrypt.compareSync(req.param('password'), user.password);
                if (match) {
                    user.loginIn = true;
                    user.save(function (err) {
                        if (err) {
                            throw err;
                        }

                        // 将用户放入session中
                        req.session.user = user;
                        req.redirect('/');

                    });

                }
                else {
                    res.json({
                        status: 2,
                        msg: '密码错误'
                    });
                }
            }
            else {
                res.json(STATUS_RESPONSE.NO_USER);
            }
        });
    },
    logout: function (req, res) {

    }

};

