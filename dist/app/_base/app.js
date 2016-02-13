define(function(require, exports, module){

    var event = require('event');
    var route = require('route');

    exports.setNavActive = function (nav) {
        $('#navbar-nav li').removeClass('active');
        $('#navbar-nav li[data-nav="' + nav +'"]').addClass('active');
    };

    exports.setSubNavActive =function(cateId) {
        $('#navbar-nav li').removeClass('active');
        $('#navbar-nav li[data-nav="cate_'+cateId+'"]').addClass('active');
    }
    exports.init = function(){
        var css = require('./css_app');
        var tpl = require('./tpl_app');
        var config = require('_config/app');
        var service = require('_service/archive');
        // 初始化页面
        service.getNav(function (nav) {
            var navArr = dealNav(nav);
            //console.log('navArr', navArr);
            //topicList = topicList.sort(function (a, b) {
            //    return a.priority - b.priority;
            //});
            var header = tpl.header({title: config.title, navArr: navArr});
            var body = tpl.body();
            var footer = tpl.footer();
            $(HY.rootDom).html(css + header + body + footer);
        });
    };

    function dealNav(obj){
        var navArr = new Array();
        var children = new Array();
        obj.forEach(function(v){
            if(v.pid == 0){
                obj.forEach(function(ch){
                    if(v.id == ch.pid){
                        children.push(ch);
                    }
                });
                v['children'] = children;
                navArr.push(v);
            }
        });
        return navArr;
    }
    exports.toDate = function(article) {
        if(article.length == 0){
            return false;
        }
        else {
            var time = require('time');
            article.forEach(function(v) {
                v.create_time = time.format('yyyy年mm月dd日', parseInt(v.create_time));
            });
            return article;
        }
    }
});