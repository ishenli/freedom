/**
 * @file 试图基类，提供转场动画
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {

    var util = require('winnie/lib/util');
    var lib = require('winnie/lib');

    function Animate(main, options) {
        options = util.extend({
            direction: 30,
            easing: 'line'
        }, options);

        this.options = options;
        this.element = lib.get(main);
        this._state = {};
    }

    var _transitionFinishedEvents = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        msTransition: 'msTransitionEnd',
        transition: 'transitionEnd'
    };
    var transitionFinishedEvent;

    var _prefixElement = document.createElement('div');

    for (var i in _transitionFinishedEvents) {
        if (typeof _prefixElement.style[i] === 'string') {
            transitionFinishedEvent = _transitionFinishedEvents[i];
            break;
        }
    }

    var ANIM_EVENT = 'webkitAnimationEnd';

    function removeAnimateEnd(el, fn) {
        el.removeEventListener(ANIM_EVENT, fn);
    }

    function addAnimateEnd(el, fn) {
        el.addEventListener(ANIM_EVENT, fn);
    }

    var inverse = {
        up: 'down',
        down: 'up',
        left: 'left',
        right: 'right'
    };

    Animate.prototype = {

        animateInByEffect: function (effect) {
            var me = this;
            var name = me._getAnimationName(effect, 'in');
            var params = {
                '-webkit-animation-name': name,
                'animation-name': name
            };

            me.set('visible', true);
            me.set('closing', false);
            me.animate(params, null);
        },
        animateOutByEffect: function (effect) {
            var me = this;
            var name = me._getAnimationName(effect, 'out');
            var params = {
                '-webkit-animation-name': name,
                'animation-name': name
            };

            me.set('closing', true);

            me.animate(params, function () {
                if (me.get('closing')) {
                    me.set('visible', false);
                    me.set('closing', false);
                }
            });
        },
        animate: function (params, endFun) {
            var me = this;
            var el = me.element;

            function callback(e) {
                if (e.target === el) {
                    me.offAnimate();
                    removeAnimateEnd(el, callback);
                    endFun && endFun();
                }
            }

            addAnimateEnd(el, callback);

            me.applyAnimate();

            lib.css(el, params);
        },
        offAnimate: function () {
            lib.css(this.element, {
                '-webkit-animation': 'none',
                'animation': 'none'
            });
        },
        applyAnimate: function () {
            lib.css(this.element, this.getAnimateStyle());
        },
        getAnimateStyle: function () {
            var me = this;
            var duration = me.get('duration');
            return {
                '-webkit-animation-duration': duration + 'ms ',
                '-webkit-animation-timing-function': me.options.easing
            };
        },
        /**
         * 获取动画名称
         * @param {string} effect 效果
         * @param {string} type 类型
         * @return {string} 名称
         * @private
         */
        _getAnimationName: function (effect, type) {
            var name = effect + util.ucFirst(type);
            var direction;

            if (effect === 'slide') {
                direction = this.options.direction;
                if (type === 'in') {
                    name = name + util.ucFirst(direction);
                }
                else {
                    name = name + util.ucFirst(inverse[direction]);
                }
            }

            return name;
        },
        set: function (key, value) {
            this._state[key] = value;

        },
        get: function(key) {
            return this._state[key] || null;
        }
    };

    return Animate;
});


