<template>
  <div v-if="job">
    <JobTitle :jobTitle="job.title" :jobDetails="job.details" :id="id" />
    <!-- <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p> -->
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>

<script>
import JobTitle from "../../components/JobTitle";
export default {
  props: ["id"],
  components: { JobTitle },

  data() {
    return {
      // id: this.$route.params.id,
      job: null,
    };
  },
  beforeCreate() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
