<template>
   <div class='index'>
    <!-- la partie de la gauche -->
    <div class='left'>
        <Slide></Slide>
    </div>
    <!-- la partie de la droite -->
    <div class='right'>
       <!-- la partie de la content -->
        <div class='content'>
            <Content></Content>
        </div>
    </div>
   </div>
</template>

<script setup lang='ts'>
import Slide from './slide/index.vue'
import Content from './content/index.vue'
</script>

<style scoped lang='scss'>
.index{
    display:flex;
    width:100vw;
    height:100vh;
    .left{
        width: 240px;
        background-color: #142334;
        color: #fff;
    }
    .right{
        width: calc(100vw - 240px);
    }
}
</style>
