<template>
    <section>
        <form @submit.prevent="submitDetails">
                <input
                type="text"
                id="name"
                placeholder="Your Name"
                v-model="enteredName">
                <input
                type="text"
                id="age"
                placeholder="Your Age"
                v-model="enteredAge">
                <button>Set User Data</button>
        </form>
    </section>
</template>

<script>
export default {
    emits: ['add-details'],
    data() {
        return {
            enteredName: '',
            enteredAge: '' 
        }
    },
    methods: {    
        submitDetails() {
            this.$emit(
                'add-details',
                this.enteredName,
                this.enteredAge
                );
                this.enteredName = '',
                this.enteredAge = ''
            }
    }
};
</script>