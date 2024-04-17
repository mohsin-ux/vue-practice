<template>
  <div class="project">
    <div @click="showDetails = !showDetails" class="actions">
      <h3>{{ project.title }}</h3>
      <div class="icons">
          <span class="material-icons"> edit </span>
          <span class="material-icons"> delete </span>
          <span class="material-icons"> done </span>

    </div>
</div>

    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProject",
  props: ["project"],
  data() {
    return {
      showDetails: false,
    };
  },
};
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-icons{
    font-size: 24px;
    cursor: pointer;
    margin-right: 10px;
    color: #bbb;
}
.material-icons:hover{
    color: #777;
}
</style>
