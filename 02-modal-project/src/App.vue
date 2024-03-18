<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <h1>{{ title }}</h1>
  <p>Wellcome...</p>
  <!-- <input type="text" ref="name" />
  <button @click="handleClick">handleClick</button> -->

  <!-- ------------------ first component ------------------- -->

  <teleport to=".modals" v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja swag for half price</p>
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
    </Modal>
  </teleport>

  <!-- ------------------ second component ------------------- -->

  <teleport to=".modals" v-if="showModalTwo">
    <Modal :header="header" :text="text" @close="toggleModalTwo">
      <h1>signup for the newsletter</h1>
      <p>For updates and promo codes!</p>
    </Modal>
  </teleport>

  <!-- ------------------ toggle button ------------------- -->

  <button @click="toggleModal">open modal</button>
  <button @click="toggleModalTwo">open modal two</button>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My first vue app :)",
      // header: "Sign up for the Giveaway!",
      // text: "Grab your ninja swag for half price",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    // handleClick() {
    //   console.log(this.$refs.name);
    //   this.$refs.name.classList.add("active");
    //   this.$refs.name.focus();
    // },
    toggleModal() {
      this.showModal = !this.showModal;
      console.log("button clicked");
      console.log(this.showModal);
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
      console.log("button clicked");
      console.log(this.showModal);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  display: inline-block;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
</style>
