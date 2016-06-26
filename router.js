import Backbone from 'backbone';

var Router = Backbone.Router.extend({
    routes: {
      '': 'signInPage',
      'mainPage': 'mainPage'
    },
    signInPage: function(){
      this.current = 'signInPage';
    },
    mainPage: function(){
      this.current = 'mainPage';
    }
  });


  module.exports = new Router();
