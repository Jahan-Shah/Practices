<template>
  <RouterView v-slot="slotProps">
    <Transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </Transition>
  </RouterView>
  <div class="container">
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <Transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
      @enter-cancelled="enterCancel"
      @leave-cancelled="leaveCancel"
    >
      <p v-if="paraIsVisible">This is only visible sometimes...</p>
    </Transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <Transition name="btn-fade" mode="out-in">
      <button @click="showUsers" v-if="!userButtonIsVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </Transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import UsersList from "./components/ListData.vue";
export default {
  components: {
    UsersList,
    RouterView,
  },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      userButtonIsVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancel() {
      clearInterval(this.enterInterval);
    },
    leaveCancel() {
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.1;
        round++;
        if (round > 10) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    leave(el, done) {
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.1;
        round++;
        if (round > 10) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUsers() {
      this.userButtonIsVisible = true;
    },
    hideUsers() {
      this.userButtonIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 300ms ease-out forwards;
}

.route-enter-active,
.route-leave-active {
  transition: all 0.5s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.btn-fade-enter-from,
.btn-fade-leave-to {
  opacity: 0;
}

.btn-fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.btn-fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.btn-fade-enter-to,
.btn-fade-leave-from {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
