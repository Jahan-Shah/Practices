<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableItems"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
import { computed, toRefs, watch } from "vue";
import ProjectItem from "./ProjectItem.vue";
import { useSearch } from "../../hooks/search";

const props = defineProps(["user"]);
const { user } = toRefs(props);

const projects = computed(function () {
  return user.value ? user.value.projects : [];
});

const { updateSearch, enteredSearchTerm, availableItems } = useSearch(
  projects,
  "title"
);

const hasProjects = computed(function () {
  return user.value.projects && availableItems.value.length > 0;
});

watch(user, function () {
  updateSearch("");
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
