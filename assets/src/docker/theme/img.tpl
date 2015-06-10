<!--target:main-->
    <div class="ui-tab" id="them-tab" >
        <ul class="ui-tab-nav ui-nav ui-nav-tab">
            <li data-index="0" class="ui-tab-item ui-active"><a href="javascript:;">选择主题</a></li>
            <li data-index="1" class="ui-tab-item"><a href="javascript:;">上传主题</a></li>
        </ul>

        <div class="ui-tab-bd">
            <div class="ui-tab-panel ui-active" id="panel-info">
                <ul class="theme-list">
                <!--for:${list} as ${item}-->
                    <li class="theme-list-item <!--if:${item.isCover}-->cover<!--/if-->" data-id="${item.id}">
                        <img src="${item.url}" alt="${item.name}"/>
                        <i class="iconfont delete">&#xe601;</i>
                        <h5 class="title">${item.name}</h5>
                    </li>
                <!--/for-->
                </ul>
            </div>
            <div class="ui-tab-panel" id="panel-address">
                <form method="post" enctype="multipart/form-data" action="/wallpaper/upload"  class="theme-form" target="form-iframe">
                    <div class="ui-form-item">
                        <label for="wallpaper" class="ui-label">封面名称:</label>
                        <input type="text" name="name" class="ui-input" id="wallpaper" />
                    </div>
                    <div class="ui-form-item">
                        <label for="upload" class="ui-label">请选择图片:</label>
                        <input type="file" name="upload" class="ui-input" id="upload" />
                    </div>
                     <div class="ui-form-item">
                        <input type="submit" value="上传" class="ui-btn ui-btn-primary btn-submit">
                    </div>
                </form>
                <iframe name="form-iframe" class="fn-hide" id="file-iframe"></iframe>
            </div>
        </div>
    </div>
<!--/target-->
