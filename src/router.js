var Backbone = require('Backbone');
var HomeView = require('./home/view');
var StoryView= require('./story/view');

var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'home',
        'home': 'home',
        'story': 'story'
    },

    home: function () {
        console.log('应用入口方法');
        var homeView = new HomeView();
    },
    story: function () {
        console.log('切换到story页面');
        var storyView = new StoryView();
    }
});

module.exports = AppRouter;