<template>
    <nav class="main-nav">
        <router-link :to="{name: 'Home'}">Projects</router-link>
        <router-link :to="{name: 'AddProject'}">Add a new project</router-link> 
    </nav>
</template>

<style>
    .main-nav {
        text-align: center;
        margin: 40px auto;
    }
    .main-nav a {
        display: inline-block;
        margin: 0 10px;
        color: #999;
        text-decoration: none;
    }
    a.router-link-active {
        border-bottom: 2px solid #00ce89;
        padding-bottom: 4px;
        color: #333;
        font-weight: bold;
    }
    
</style>