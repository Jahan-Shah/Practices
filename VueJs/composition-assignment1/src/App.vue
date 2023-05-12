<template>
  <h2>Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goalVisibility">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { reactive } from "vue";

export default {
  // setup() {
  // const courseGoal = "My Course Goal";
  // const toggle = ref(true);
  // const courseData = ref({
  //   goal: "My course goal",
  //   goalVisibility: true,
  // });
  // const courseData = reactive({
  //   goal: "My course goal",
  //   goalVisibility: true,
  // });
  // function toggleGoal() {
  // courseData.value.goalVisibility = !courseData.value.goalVisibility;
  // courseData.goalVisibility = !courseData.goalVisibility;
  // }
  // return { goal: courseData.goal, toggleGoal, courseData };
  // },
  // data() {
  //   return {
  //     goal: "Finish the course",
  //     goalVisibility: true,
  //   };
  // },
  // methods: {
  //   toggleGoal() {
  //     this.goalVisibility = !this.goalVisibility;
  //   },
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
