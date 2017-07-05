var Backbone = require('Backbone');
var _ = require('underscore');
var BaseView = require('../common/BaseView');

var tpl = require('./template.html');

var HomeView = BaseView.extend({

    id: 'HomeView',

    template: tpl,

    events: {
        'click #toStory': 'onToStoryClick'
    },

    onCreate: function () {
        console.log('homeView onCreate');
    },

    onToStoryClick: function () {
        router.navigate('story', { trigger: true });
    }

});

// var HomeView = Backbone.View.extend({
//     el: '#wrapper',

//     template: tpl,

//     events: {
//         'click #toStory': 'onToStoryClicked'
//     },

//     initialize: function() {
//         this.template = _.template(this.template);
//         this.render();
//     },

//     onToStoryClicked: function() {
//         router.navigate('story', {trigger: true});
//     },

//     render: function() {
//         this.$el.html(this.template());
//         return this;
//     }

// });

module.exports = HomeView;