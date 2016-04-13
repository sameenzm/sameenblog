define(function(require, exports, module){

    var data = require('data');

    exports.getTopicList = function (cb) {
        var url = '/mock/topic.json';
        data.query(url, function (resp) {
            (resp.errCode === 200)?cb(resp.data || []):cb([]);
        }, 5000);
    };

    exports.getArticle = function(cb){
        var url = '/mock/detail.json';
        data.query(url, function(resp){
            (resp.errCode === 200)?cb(resp.data || []):cb([]);
        },5000);
    }

    exports.getNav = function(cb){
        var url = '/mock/topic.json';
        data.query(url, function(resp){
            (resp.errCode === 200)?cb(resp.data || []):cb([]);
        },5000);
    }

    exports.getArticleList = function (topicId, cb) {
        var url = '/mock/article-list-' + topicId + '.json';
        data.query(url, function (resp) {
            (resp.errCode === 200)?cb(resp.data || []):cb([]);
        }, 5000);
    };

    exports.getArticleDetail = function (articleId, cb) {
        var url = '/mock/article-detail-' + articleId + '.json';
        data.query(url, function (resp) {
            (resp.errCode === 200)?cb(resp.data || []):cb([]);
        }, 5000);
    };
});
