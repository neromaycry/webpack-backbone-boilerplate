var Backbone = require('Backbone');
var _ = require('underscore');

var tpl = require('./template.html');

var HomeView = Backbone.View.extend({
    el: '#wrapper',

    template: tpl,

    events: {
        'click #toStory': 'onToStoryClicked'
    },

    initialize: function() {
        this.template = _.template(this.template);
        this.render();
    },

    onToStoryClicked: function() {
        router.navigate('story', {trigger: true});
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }

});

module.exports = HomeView;