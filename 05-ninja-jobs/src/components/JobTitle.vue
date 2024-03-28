<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>

<script>
import JobDetails from "@/views/jobs/JobDetails.vue";

export default {
  props: ["job"],
};
</script>

<style>
.title {
  width: 900px;
  margin: 50px auto;
  padding: 40px;
  border-radius: 10px;
  background-color: #f5f;
}
</style>
