const assignment = Vue.createApp({
    data(){
        return{
            name: 'Shah Jahan',
            age: 20,
            imageUrl: 'https://images.unsplash.com/35/JOd4DPGLThifgf38Lpgj_IMG.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
        }
    },
    methods: {
        calculateAge(){
            return this.age + 5;
        },
        randomNum(){
            return Math.random();
        }
    }
});
assignment.mount('#assignment');