<template>
  <ul>
    <TransitionGroup name="list" tag="ul">
      <li @click="removerUsers(user)" v-for="user in users" :key="user">
        {{ user }}
      </li>
    </TransitionGroup>
  </ul>
  <div>
    <input type="text" ref="userInput" />
    <button @click="addUsers">Add Users</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["Shahjahan", "Shahzaib", "Sarfraz", "Abdullah"],
    };
  },
  methods: {
    addUsers() {
      const enteredUser = this.$refs.userInput.value;
      this.users.unshift(enteredUser);
    },
    removerUsers(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-leave-active {
  position: absolute;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
