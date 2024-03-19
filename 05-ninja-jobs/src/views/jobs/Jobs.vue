<template>
   <h1>Jobs</h1>
   <div v-for="job in jobs" :key="jobs.id">
      <h1> {{ job.title }}</h1>
   </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Ninja UX Designer", id: 1, details: "lorem" },
        { title: "Ninja Web Developer", id: 1, details: "lorem" },
        { title: "Ninja Vue Designer", id: 1, details: "lorem" },
      ],
    };
  },
};
</script>

<style>
</style>
