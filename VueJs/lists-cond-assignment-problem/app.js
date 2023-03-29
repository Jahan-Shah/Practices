const app = Vue.createApp({
    data() {
        return {
            showTasks: true,
            enteredTask: '',
            tasks: []
        }
    },
    computed: {
        buttonCaption() {
            return this.showTasks ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            if (this.enteredTask !== '') {
                this.tasks.push(this.enteredTask);
                this.enteredTask = '';
            }
        },
        hideShow() {
            this.showTasks = !this.showTasks;
        }
    }
});
app.mount('#assignment');