<template>

  <div class="center" v-if="error">{{ error }}</div>
  <div class="center"v-if="post">
    <h2>{{ post.title }}</h2>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div class="center" v-else>
    loading....
    <Spinner />
  </div>
</template>


<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
import { useRoute } from 'vue-router'

export default {
  props: ["id"],
  components: { Spinner },
    setup(props) {

        const route = useRoute();
  
      
        // const { post, error, load } = getPost(route.params.id);
        const { post, error, load } = getPost(props.id);

    

        load();

        return { post, error };
    },
};
</script>        

<style>
  .center {
    text-align: center;
  }
  .center h2::before{
    content: "";
    display: block;
    width: 350px;
    height: 40px;
    background: #ff8800;
    position: absolute;
    left: 340px;
    z-index: -1;
    padding-right: 40px;
    transform: rotate(-1deg);
  }
</style>
