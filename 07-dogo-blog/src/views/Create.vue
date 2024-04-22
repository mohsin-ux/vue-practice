<template>
  <form @submit="handleSubmit">
    <label>Title:</label>
    <input v-model="title" type="text" required>
    <label>Content:</label>
    <textarea v-model="body" required></textarea>
    <label>Tags (hit enter to add a tag)</label>
    <input v-model="tag" type="text" @keydown.enter.prevent="handleKeydown">
    <div v-for="tag in tags">#{{ tag }}</div>
    <button>Add Post</button>
  </form>
  <!-- <p>{{ tag }}</p> -->
</template>

<script>
import { ref } from 'vue';
export default {
    setup(){
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])

        const handleKeydown = () => {
            console.log('hello keydown')
            if(!tags.value.includes(tag.value)){
                tag.value = tag.value.replace(/\s/, '') //removes all whitespaces
                tags.value.push(tag.value)
            }
            tag.value = ''

        }
        const handleSubmit = async () => {

            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value
            }   

            await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(post )
            })
            console.log(post.value)
        }

        return { title, body, tag, tags, handleKeydown }
    
    }


}
</script>

<style>
    form{
        max-width: 480px;
        margin: 0 auto;
        text-align: left;
        /* background: green;  */
    }
    input, textarea{
        display: block;
        margin: 10px 0;
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #eee;
        border-radius: 4px;
    }
    textarea{
        height: 160px;
    }

    /* label::before{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #ff8800;
        position: absolute;
        left: -30px;
        z-index: -1;
        padding-right: 40px;
        transform: rotate(-1.5deg);
    } */
    button{
        display: block;
        margin-top: 30px;
        background: #ff8800;
        color: white;
        border: none;   
        padding: 8px 16px;

        font-size: 18px;
        
    }
    .pill{
        display: inline-block;
        margin: 10px 10px 0 0;
        color: #444;
        background: #ddd;
        padding: 8px;
        border-radius: 20px;
        font-size: 14px;

    }

</style>