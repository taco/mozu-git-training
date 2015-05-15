var uuid = require('node-uuid');
var tasks = [];

module.exports = {
	loadDefaultTasks: function() {
		this.add({
			name: 'Task 1'
		});
		this.add({
			name: 'Task 2'
		});
	},

	list: function() {
		return tasks;
	},

	add: function(task) {
		task.id = uuid.v1();
		task.completed = false;

		tasks.push(task);
	},

	update: function(id, task) {
		var index = tasks.findIndex(function(task) {
				return task.id === id;
			}, this);

		if (index > -1) {
			tasks[index].completed = task.completed;
			tasks[index].name = task.name;
		}
	},

	remove: function(id) {
		tasks = tasks.filter(function(task) {
			return task.id !== id;
		}, this);
	}
}