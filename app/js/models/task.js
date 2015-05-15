define([
  'underscore',
  'backbone'
], function(_, Backbone){
  return Backbone.Model.extend({
    defaults: {
      name: "Empty task",
      completed: false
    },
    urlRoot: '/api/tasks'
  });
});