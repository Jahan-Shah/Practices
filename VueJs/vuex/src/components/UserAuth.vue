<template>
  <button @click="login" v-if="!isAuth">Log in</button>
  <button @click="logout" v-else>Log Out</button>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch("login");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>
