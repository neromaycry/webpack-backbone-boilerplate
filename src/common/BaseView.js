var Backbone = require('Backbone');
var _ = require('underscore');
var $ = require('jquery');
var Mustache = require('mustache');

var BaseView = Backbone.View.extend({

    el: '#wrapper'

    template: null,

    initialize: function (args) {
        var self = this;

        if (this.template === null) {
            console.log('default template is null, please set a default template for the view.');
            return;
        }
        else {
            this.template = _.template(this.template);
        }

        this.onCreate();

        $(document).ready(function () {
            self.onStart();
        });
    },

    /**
     * View创建时执行的钩子函数
     * 在此函数中可以执行一些数据初始化相关的操作
     * 注：请不要在此函数中对DOM进行操作，否则可能会出现意想不到的情况
     */
    onCreate: function () {
        console.log('Page onCreate');
    },

    /**
     * View创建时执行的钩子函数，在DOM加载完毕后执行
     * 在此函数中可以执行DOM的渲染操作
     */
    onStart: function () {
        console.log('Page onStart');
        this.render();
    },

    render: function () {
        var html = Mustache.render(this.template(), this.model.toJSON());
        this.$el.html(html);
        return this;
    }

});

module.exports = BaseView;
