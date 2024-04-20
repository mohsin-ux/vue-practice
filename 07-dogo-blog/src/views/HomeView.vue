<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames">{{ name }}</div>
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
import {ref, reactive, computed} from 'vue'
export default {
  name: 'HomeView',
  setup(){
    const search = ref('')
    const names = ref(['mario', 'luigi', 'yoshi', 'toad', 'bowser', 'koopa', 'peach'])

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    }) 

    return { search, names, matchingNames }

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

  }

}
</script>
