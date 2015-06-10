/**
 * HomeController
 *
 * @description 首页
 * @help
 */

module.exports = {
	index: function(req, res) {


        Promise.all([WallpaperService.findSelectedCover()]).then(function (value) {
            var wallpaper = value[0];
            var data = {
                wallpaper: wallpaper
            };
            res.view('index', data);
        });

    },

};

