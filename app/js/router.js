define([
  'jquery',
  'underscore',
  'backbone',
  'views/tasklist'
], function($, _, Backbone, TaskListView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      '/tasks': 'showTasks'
    }
  });

  var initialize = function(){
    new TaskListView();
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});