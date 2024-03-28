<template>
  <div class="title">
    <h1>{{ jobTitle }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ jobDetails }}</p>
  </div>
</template>
<script>
import JobDetails from "@/views/jobs/JobDetails.vue";

export default {
  props: ["jobTitle", "id", "jobDetails"],
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
