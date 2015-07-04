/**
 * @file WallpaperService
 * @author shenli <meshenli@gmail.com>
 */

module.exports = {
    findAll: function (page) {
        return Wallpaper.find();
    },
    selectWallpaperById: function (id, callback) {
        Wallpaper
            .update({isCover: true}, {isCover: false})
            .exec(function (err, updated) {
                if (err) {
                    throw err;
                }
                Wallpaper.findOne(id).exec(function (err, wallpaper) {
                    if (err) {
                        throw  err;
                    }
                    wallpaper.isCover = true;
                    wallpaper.save(callback);
                });

            });
    },
    findSelectedCover: function () {
        return new Promise(function (resolve, reject) {
            Wallpaper.findOne({isCover: true}).exec(function (err, wallpaper) {
                if (err) {
                    throw err;
                }

                resolve(wallpaper);
            });
        });
    },
    deleteWallpaperById: function (id, callback) {
        Wallpaper.destroy({id: id}).exec(function (err, wallpaper) {
            callback(err, wallpaper)
        });
    }
};

