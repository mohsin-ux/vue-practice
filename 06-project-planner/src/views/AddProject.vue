<template>
    <form @submit.prevent="handleSubmit">
        <label>Title</label>
        <input v-model="title" type="text" required>
        <label>Details</label>
        <textarea v-model="details" required></textarea>
        <button>Add Project</button>
    </form>
</template>

<script>
export default {
    data(){
        return {
            title: '', 
            details: '',
        }
    },
    methods: {
        async handleSubmit(){
            console.log(this.title, this.details)
            let project = {
                title: this.title,
                details: this.details,
                complete: false
            }
            try{
                await fetch('http://localhost:3000/projects', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(project)
                })
                this.$router.push('/')
            }catch(err){
                console.log(err.message)
            }
        }
    }
}
</script>


<style>
    form{
        background: white;
        padding: 20px;
        border-radius: 10px;
        /* text-align: center; */
    }
    label{
        display: block;
        color: #bbb;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1px;
        margin: 20px 0 10px 0;
    }
    input{
        padding: 10px;
        border: 0;
        border-bottom: 1px solid #ddd;
        width: 100%;
        box-sizing: border-box;
    }
    textarea{
        border: 1px solid #ddd;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        height: 100px;
    }
    form button{
        background: #00ce89;
        margin: 20px auto 0;
        padding: 10px;
        border: 0;
        border-radius: 10px;
        font-size: 16px;
    }
    
</style>
