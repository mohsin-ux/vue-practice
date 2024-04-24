<template>
  <div class="tag">
    <div class="tag">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length" class="layout">
            <PostList :posts="postsWithTags" />
            <TagCloud :posts="posts" />
        </div>
        <div v-else>
            <Spinner />
        </div> 
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts'
import {useRoute} from 'vue-router'
import {ref} from 'vue'
import {computed} from 'vue'

export default {
    components: {Spinner, PostList, TagCloud},
    setup(){
        

        const route = useRoute()
        
        const arrPosts = ref([])
        const {posts, error, load} = getPosts()
        load()

        const postsWithTags = computed(() => {
            return posts.value.filter(post => post.tags.includes(route.params.tag))
        })

        return {posts, error, postsWithTags}

        
}

}
</script>

<style>

</style>