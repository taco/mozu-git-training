define([
  'jquery',
  'underscore',
  'backbone',
  'collections/tasks',
  'text!/templates/tasklist.html'
], function($, _, Backbone, TaskColleciton, taskListTemplate){
  return Backbone.View.extend({
    el: $('#container'),
    initialize: function() {
      var _this = this;
      this.collection = new TaskColleciton();
      this.collection.fetch().done(function() { _this.render(); });
    },
    render: function() {
      var data = { tasks: this.collection.models };
      var html = _.template(taskListTemplate)(data);
      this.$el.html(html);
    }
  });
});