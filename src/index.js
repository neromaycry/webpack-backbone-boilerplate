require('../index.css');
var Backbone = require('Backbone');
var AppRouter = require('./router');

//将router设为全局变量
window.router = new AppRouter();
Backbone.history.start();
