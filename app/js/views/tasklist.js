define([
  'jquery',
  'underscore',
  'backbone',
  'models/task',
  'collections/tasks',
  'text!/templates/tasklist.html'
], function($, _, Backbone, Task, TaskCollection, taskListTemplate){
  return Backbone.View.extend({
    el: $('#container'),
    initialize: function() {
      this.collection = new TaskCollection();
      this.collection.fetch().then(this.render.bind(this));
    },
    render: function(data) {
      this.collection.set(data.items);
      this.$el.html(_.template(taskListTemplate)({tasks: this.collection.models}));
      $('input[data-action=new-task]').focus();
    },
    events: {
      "keydown input[data-action=new-task]" : "createTask",
      "keydown input[data-action=task-name]" : "udpateTaskName",
      "blur input[data-action=task-name]" : "udpateTaskName",
      "change input[data-action=task-completed]": "updateTaskCompleted",
      "click a[data-action=task-remove]": "removeTask"
    },
    createTask: function(event) {
      // Test for enter key
      if (event.keyCode !== 13) return;

      var task = new Task(),
        _this = this;

      task.save({
        name: $(event.target).val()
      }, {
        success: function(model, response, options) {
          _this.initialize();
        }
      })
    },
    udpateTaskName: function(event) {
      var $target,
        task,
        _this = this;

      if (event.type === 'keydown' && event.keyCode !== 13) return;
      
      $target = $(event.target);
      
      task = this.collection.get($target.parent('li').data('id'));

      if ($target.val() === task.get('name')) return;

      task.save({
        name: $target.val()
      });
    },
    updateTaskCompleted: function(event) {
      var $target = $(event.target),
        task = this.collection.get($target.parent('li').data('id')),
        _this = this;
      
      task.save({
        completed: $target.is(':checked')
      }, {
        success: function() {
          var $text = $target.next('input');

          if (task.get('completed')) {
            $text.attr('readonly', 'readonly');
          } else {
            $text.removeAttr('readonly');
          }
        }
      });
    },
    removeTask: function(event) {
      var $target = $(event.target),
        task = this.collection.get($target.parent('li').data('id'));

      event.preventDefault();

      task.destroy({
        success: function() {
          $target.parent('li').remove();    
        }
      });
    }
  });
});