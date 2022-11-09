const assignment2 = Vue.createApp({
    data(){
        return{
            input: 'OUTPUT',
            inputOnEnter: 'OUTPUT'
        }
    },
    methods: {
        showAlert(){
            alert('Hey, you pressed me');
        },
        userInput(event){
            !event.target.value ? 
                this.input = 'OUTPUT' : 
                    this.input = event.target.value;
        },
        userInputOnEnter(event){
            !event.target.value ? 
                this.inputOnEnter = 'OUTPUT' : 
                    this.inputOnEnter = event.target.value;
        }
    }
});
assignment2.mount('#assignment');