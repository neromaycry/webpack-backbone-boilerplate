var Backbone = require('Backbone');
var _ = require('underscore');

var tpl = require('./template.html');

var StoryView = Backbone.View.extend({
    el: '#wrapper',

    template: tpl,

    events: {
        'click #back': 'onBackClicked'
    },

    initialize: function() {
        this.template = _.template(this.template);
        this.render();
    },

    onBackClicked: function() {
        router.navigate('home', {trigger: true});
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }

});

module.exports = StoryView;