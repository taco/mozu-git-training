var uuid = require('node-uuid');
var tasks = [];

function findIndex(task) {
	return tasks.findIndex(function(t) {
		return t.id === (task.id || task);
	});
}

module.exports = {
	loadDefaultTasks: function() {
		this.add({
			name: 'Task 1'
		});
		this.add({
			name: 'Task 2',
			completed: true
		});
	},

	list: function() {
		return tasks.slice(0).reverse();
	},

	add: function(task) {
		task.id = uuid.v1();
		task.completed = task.completed || false;

		tasks.push(task);
	},

	update: function(id, task) {
		var index = findIndex(id);

		if (index > -1) {
			tasks[index].completed = task.completed;
			tasks[index].name = task.name;
		}
	},

	remove: function(id) {
		var index = findIndex(id);

		tasks.splice(index, 1);
	}
}