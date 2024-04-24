<template>
    <div class="spin">

    </div>
</template>

<style>
    .spin{
        display: block;
        width: 40px;
        height: 40px;
        margin: 30px auto;
        border: 8px solid transparent;
        border-radius: 50%;
        border-top-color: #ff8800;
        border-left-color: #ff8800;
        border-bottom-color: #ff8800;


        animation: spin 1s ease infinite;
    }
    @keyframes spin{
        to{
            transform: rotateZ(360deg);
        }
    }

</style>