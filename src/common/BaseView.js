var Backbone = require('Backbone');
var $ = require('jquery');

var BaseView = Backbone.View.extend({

    initialize: function (args) {
        var self = this;
        this.onCreate();
        $(document).ready(function () {
            self.onStart();
        });
    },

    onCreate: function () {
        console.log('Page onCreate');
    },

    onStart: function () {
        console.log('Page onStart');
    },

});

module.exports = BaseView;
