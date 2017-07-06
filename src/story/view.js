var Backbone = require('Backbone');
var _ = require('underscore');
var BaseView = require('../common/BaseView');

var tpl = require('./template.html');

var StoryView = BaseView.extend({

    template: tpl,

    id: 'StoryView',

    events: {
        'click #back': 'onBackClicked'
    },

    onCreate: function() {
        console.log('this is story view.');
    },

    onBackClicked: function () {
        router.navigate('home', { trigger: true });
    },
});

module.exports = StoryView;