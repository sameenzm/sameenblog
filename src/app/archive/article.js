define(function(require, exports, module){

    var route = require('route');
    var service = require('_service/archive');
    var app = require('_base/app');

    exports._init = function(){
        console.log('article/_init', Date.now());
        app.setNavActive('article');
    }
    exports.list = function(){
        //var url = require('url');
        //var cateId = url.get("?cateId");
        var cateId = route.getParams('cateId');
        app.setSubNavActive(cateId);
        var tpl = require('./tpl_article');
        var articleList = [];
        service.getArticle(function(dataList){
            dataList.forEach(function(article){
                if(article.category_id === cateId){
                    articleList.push(article);
                }
            });
            //console.log(articleList,articleList);
            articleList = app.toDate(articleList);
            $('#container').html(tpl.lists({articleList: articleList, category: articleList[0]['category']}));
        });

    }

    exports.detail = function(){
        var tpl = require('./tpl_article');
        //var time = require('time');
        //var arr = new Array();  //不要酱紫写
        var arr = [];
        service.getArticle(function(article){
            //article.forEach(function(v){  //原来这样写，可改为用array.prototype.filter
            //    if(v.id == article_id){
            //        arr.push(v);
            //    }
            //});
            //console.log(article);
            var articleId = route.getParams('article_id') - 0;
            arr = article.filter(function(a){
                return a.id === articleId;
            });
            //console.log('arr',arr);
            //var cTime = time.format('yyyy年mm月dd日',parseInt(arr.create_time));  //这种逻辑必须放在模板中完成
            $('#container').html(tpl.detail({article: arr}));
        });
    }
});