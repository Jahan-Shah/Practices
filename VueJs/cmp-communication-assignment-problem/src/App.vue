<template>
    <div>
        <active-user
        :username="user.name"
        :userage="user.age"
        ></active-user>
        <user-data
        @add-details="setUserData"
        ></user-data>
    </div>
</template>

<script>

export default {
    data() {
        return {
            user: {
                name: 'Shah Jahan',
                age: 21
            }
        }
    },
    methods: {
        setUserData(name, age) {
            this.user = {
                name: name,
                age: +age
            };
        }
    }
};
</script>

<style>
html {
    font-family: sans-serif;
}
section {
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    text-align: center;
    padding: 1rem;
}
</style>