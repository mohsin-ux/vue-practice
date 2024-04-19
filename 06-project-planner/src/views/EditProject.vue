<template>
  <form @submit.prevent="handleEdit">
    <label>Title</label>
    <input v-model="title" type="text" required />
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3000/projects/" + this.id,
    };
  },
  async mounted() {
    try {
      const res = await fetch(this.uri);
      const data = (res) => res.json();
      this.title = data.title;
      this.details = data.details;
    } catch (err) {
      console.log(err.message);
    }
  },
  methods: {
    async handleEdit() {
      try {
        await fetch(this.uri, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: this.title, details: this.details }),
        });
        this.$router.push("/");
      } catch (e) {
        console.log(err.message)
      }
    },
  },
};
</script>
