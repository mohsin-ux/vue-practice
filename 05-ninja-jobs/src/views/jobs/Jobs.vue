<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="jobs.id" class="job">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>data is loading...</p>
  </div>
  <!-- <JobTitle /> -->
</template>

<script>
// import JobTitle from "../../components/JobTitle";
export default {
  // components: { JobTitle },
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.job h2 {
  width: 600px;
  padding: 20px;
  margin: 10px auto;
  border-radius: 10px;
  background: #f4f4f4;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>
