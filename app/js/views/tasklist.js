define([
  'jquery',
  'underscore',
  'backbone',
  'collections/tasks',
  'text!/templates/tasklist.html'
], function($, _, Backbone, TaskCollection, taskListTemplate){
  return Backbone.View.extend({
    el: $('#container'),
    initialize: function() {
      this.collection = new TaskCollection();
      this.collection.fetch().then(this.render.bind(this));
    },
    render: function(data) {
      this.collection.set(data.items);
      this.$el.html(_.template(taskListTemplate)({tasks: this.collection.models}));
    }
  });
});