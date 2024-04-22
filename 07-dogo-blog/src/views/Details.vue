<template>

  <div v-if="error">{{ error }}</div>
  <div v-if="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    loading....
    <Spinner />
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";

export default {
  props: ["id"],
  components: { Spinner },
    setup(props) {
        const { post, error, load } = getPost(props.id);
    

        load();

        return { post, error };
    },
};
</script>
