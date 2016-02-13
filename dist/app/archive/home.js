define(function(require, exports, module){

    var app = require('_base/app');

    exports._init = function(){
        console.log('archive/home/_init', '模块前置');
        app.setNavActive('home');
    };

    exports.init = function(){
        console.log('home/init', Date.now());
        console.log('archive/home/init');
        var tpl = require('./tpl_home');
        var service = require('_service/archive');
        var lastArticle = [];
        service.getArticle(function(article){
            //article.forEach(function(v){
            //    article.forEach(function(vv){
            //
            //    });
            //});
            console.log(lastArticle);

            $('#container').html(tpl.main({'article': article}));
        });
        //var time = require('time');
        //var c_time;
        //lastArticle.forEach(function(v1){
        //   c_time = time.format('yyyy年mm月dd日',parseInt(v1.create_time));
        //});

    };

    exports._destroy = function(){
        console.log('archive/home/_destroy', '模块后置');
    };
});