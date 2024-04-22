<template>
    <router-link :to="{name: 'Details', params: {id: post.id}}" >
        <h2>{{ post.title }}</h2>
    </router-link>
    <p>{{ snippet }}</p>    
    <span v-for="tags in post.tags" :key="tags">
        #{{ tags }}
    </span>
</template>

<script>
import { computed } from 'vue';


export default {
    props: ['post'],
    setup(props){
        const snippet = computed(() => {
            return props.post.body.substring(0, 50) + '....'
        })
        
        return { snippet }

    }

}
</script>