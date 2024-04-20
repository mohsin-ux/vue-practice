<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">show and hide</button>
    <button @click="posts.pop()">delete post</button>

    <!-- <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <button @click="handleWatch">stop</button>
    <div v-for="name in matchingNames">{{ name }}</div> -->
    <!-- <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button> -->
    <!-- <p ref="p">My name is {{ name }} and my age is {{ age }} </p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name"> -->
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import PostList from "../components/PostList.vue";
export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam architecto soluta, corrupti ratione natus praesentium saepe odio libero ab explicabo unde dicta temporibus beatae! Obcaecati, molestias, veniam quod et asperiores dolore enim laudantium aliquid modi, nulla odit? Omnis reiciendis, voluptas quaerat aut accusamus tempore, exercitationem vero expedita ullam quidem quo blanditiis cum nesciunt magni, dolor nam magnam mollitia nihil id quos. Adipisci animi labore fuga odio itaque rerum voluptatum ducimus? Assumenda, atque. Illum aut possimus, fuga eligendi sed ex, similique eos numquam veritatis earum quidem ratione, modi necessitatibus amet itaque aperiam ea expedita. Eveniet, enim ducimus illo provident molestias atque.",
        id: 1,
      },
      { title: "top5 CSS tips", body: "Lorem ipsum", id: 2 },
    ]);
    const showPosts = ref(true)

    return { posts, showPosts };

    // const search = ref("");
    // const names = ref([
    //   "mario",
    //   "luigi",
    //   "yoshi",
    //   "toad",
    //   "bowser",
    //   "koopa",
    //   "peach",
    // ]);

    // const stopWatch = watch(search, () => {
    //   console.log('watch function ran')
    // })

    // const stopEffect = watchEffect(() => {
    //   console.log('watchEffect function ran', search.value)
    // })

    // const  handleWatch = () => {
    //   stopWatch()
    //   stopEffect()
    // }

    // const matchingNames = computed({
    //   get() {
    //     return names.value.filter((name) => name.includes(search.value));
    //   },
    //   set(newValue) {
    //     newValue   = [];
    //   },
    // });

    // return { search, names, matchingNames, handleWatch };

    // console.log('setup')

    // const p = ref(null)

    // let name = ref('mario')
    // let age = ref(10)

    // function handleClick(){
    //   // console.log('clicked me')
    //   // console.log(p.value)
    //   // p.value.classList.add('test')
    //   // p.value.textContent = 'hello ninjas how are you'
    //   name.value = 'luigi'
    //   age.value = 20
    // }
    //   const ninjaOne = ref({ name: 'mario', age: 40 })
    //   const ninjaTwo = reactive({ name: 'luigi', age: 45 })

    //   const updateNinjaOne = () => {
    //     ninjaOne.value.name = 'yoshi'
    //     ninjaOne.value.age = 30
    //   }
    //   const updateNinjaTwo = () => {
    //     ninjaTwo.name = 'mohsin'
    //     ninjaTwo.age = 50
    //     console.log('hello')
    //   }

    //   // return {name, age, handleClick, p}
    //   return{ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo}
  },
};
</script>
