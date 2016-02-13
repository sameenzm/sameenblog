define(function(require, exports, module){

    exports._init = function() {
        console.log('archive/about/_init','模块前置');
        $('#navbar-nav li').removeClass('active');
        $('#navbar-nav li[data-nav="about"]').addClass('active');
    };

    exports.init = function() {
        console.log('archive/about/init');
        var tpl = require('./tpl_about');
        $('#container').html(tpl.main());

    };

});