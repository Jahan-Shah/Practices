<template>
    <form @submit.prevent="submitData" >
    <h2>New Friend Data</h2>
    <div>
        <label for="name">Name</label>
        <input type="text" name="new-friend-name" id="name" v-model="enteredName" required>
    </div>
    <div>
        <label for="phone">Phone</label>
        <input type="tel" name="new-friend-phone" id="phone" v-model="enteredPhone" required>
    </div>
    <div>
        <label for="email">E-mail</label>
        <input type="email" name="new-friend-email" id="email" v-model="enteredEmail" required>
    </div>
    <div>
        <button>Add Contact</button>
    </div>
</form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        };
    },
    methods: {
        submitData() {
            this.$emit(
                'add-contact',
                this.enteredName,
                this.enteredPhone,
                this.enteredEmail
                );
                this.enteredName = '';
                this.enteredPhone = '';
                this.enteredEmail = '';
            },
    }
};
</script>