<template>
    <div class="top-nav">
        <Navicateur></Navicateur>
    </div>
    <div class="main">
        <Main></Main>
    </div>
</template>

<script setup lang='ts'>
import Navicateur from './nav/index.vue'
import Main from './main/index.vue'
</script>

<style scoped lang='scss'>
.top-nav{
    background-image: linear-gradient(to right,rgb(204, 202, 202),rgb(240, 219, 219),rgb(223, 203, 203)) !important;
    transition: all 0.3s;
    
}
</style>
