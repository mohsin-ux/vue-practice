<template>
  <FilterNav @filterChange="current = $event" :current="current" />

  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
        <!-- <p>{{ project.title }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>

import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";

export default {
  name: "HomeView",
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: 'all'
    };
  },
  async mounted() {
    try{
      const res = await fetch("http://localhost:3000/projects");
      const data = await res.json();
      this.projects = data;
    }catch(err){ 
      console.log(err.message)
    }

  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      });
    },
    handleComplete(id){
      let p = this.projects.find((project) => {
        return project.id === id;
      })
      p.complete = !p.complete;
      console.log(p.complete)
    }
  },
  computed: {
    filteredProjects(){
    if(this.current === 'completed'){
      return this.projects.filter(project => project.complete)
    }
    if(this.current === 'ongoing'){
      return this.projects.filter(project => !project.complete)
    }
    if(this.current === 'all'){
      return this.projects
    }
  }
  }

};
</script>
