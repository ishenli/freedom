/**
 * Wallpaper.js
 *
 * @description :: 墙纸的model
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        name: {
            type:'string',
            required:true
        },
        url: {
            type:'string',
            required:true
        },
        isCover: {
            type:'boolean',
            defaultsTo:false
        }
    }
};

