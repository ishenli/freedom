/**
 * @file Tab
 * @author shenli <meshenli@gmail.com>
 */

define(function (require) {
    var Tab = require('winnie-ui/Tab');
    var lib = require('winnie');

    var SubTab = Tab.extend({
        /**
         * 切换panel
         * @param {Object} panelInfo
         * @param {number} panelInfo.toIndex 下一个的索引
         * @param {number} panelInfo.fromIndex 上一个的索引
         * @param {HTMLElement} panelInfo.toPanels 下一个的panel
         * @param {HTMLElement} panelInfo.fromPanels 上一个的panel
         * @private
         */
        _switchPanel: function (panelInfo) {
            // 默认是最简单的切换效果：直接隐藏/显示
            lib.removeClass(panelInfo.fromPanels, 'ui-active');
            lib.addClass(panelInfo.toPanels, 'ui-active');
        }
    });


    return SubTab;
});



