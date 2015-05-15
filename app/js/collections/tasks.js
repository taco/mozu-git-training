define([
  'underscore',
  'backbone',
  'models/task'
], function(_, Backbone, TaskModel){
  return Backbone.Collection.extend({
    model: TaskModel,
    url: '/api/tasks'
  });
});