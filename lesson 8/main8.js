Vue.component('task-list', {
    template:
        `<div>
            '<task v-for="task in tasks">{{ task.task }}</task>'
        </div>`,

    data() {
        return {
            tasks: [
                { task: 'Go to store', completed: true},
                { task: 'Finish screencast', completed: false},
                { task: 'Make donation', completed: true},
                { task: 'Clear inbox', completed: false},
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot</li>'
});

new Vue({
    el: '#root'
});