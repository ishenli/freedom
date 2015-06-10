/**
 * WallpaperController
 *
 * @file wallpaper 控制器
 *
 */
module.exports = {
    create: function (req, res) {
        try {
            if (!req.param('name')) {
                throw new Error('name not set');
            }
            var uploaFile = req.file('upload');
            uploaFile.upload({dirname: '../../assets/upload'}, function (err, file) {
                if (err) {
                    throw  err;
                }

                var arr = file[0].fd.split('/');
                Wallpaper.create({
                    name: req.param('name'),
                    url: '/upload/' + arr[arr.length - 1]
                }).exec(function (err, wallpaper) {
                    if (err) {
                        throw err;
                    }
                    res.view('delegate', wallpaper);
                });
            });
        }
        catch (e) {
            res.json({
                error: e.message
            }, 500);
        }
    },
    find: function (req, res) {
        WallpaperService.findAll().exec(function (err, list) {
            if (err) {
                throw  err;
            }
            var data = {
                status: 0,
                list: []
            };
            list.forEach(function (item) {
                data.list.push({
                    name: item.name,
                    url: item.url,
                    id: item.id,
                    isCover: item.isCover
                });
            });

            res.json(data);
        });
    },
    /**
     * 选中某个图片作为墙纸
     * @param {Object} req
     * @param {Object} res
     */
    selectWallpaper: function(req, res) {
        WallpaperService.selectWallpaperById(req.param('id'), function (err, updated) {
            if (err) {
                throw err;
            }
            res.json({
                status: 0,
                data:{
                    msg: 'updated',
                    url: updated.url
                }
            });
        });
    },
    /**
     * 删除单个墙纸
     * @param {Object} req
     * @param {Object} res
     */
    destroy: function(req, res) {
        WallpaperService.deleteWallpaperById(req.param('id'), function (err, deleted) {
            if (err) {
                throw err;
            }
            res.json({
                status: 0,
                data:{
                    msg: 'deleted'
                }
            });
        });
    }
};

