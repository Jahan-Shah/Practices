const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            isVisible: true,
            inputBgColor: ''
        }
    },
    computed: {
        checkClass() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.isVisible,
                hidden: !this.isVisible
            }
        }
    },
    methods: {
        toggleVisible() {
            this.isVisible = !this.isVisible;
        }
    }
});
app.mount('#assignment');