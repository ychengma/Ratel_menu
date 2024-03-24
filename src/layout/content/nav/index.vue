<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect">
        <el-menu-item index="0">
            <img style="width: 30px" src="@/assets/vue.svg" alt="logo" />
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1">Date</el-menu-item>
        <el-sub-menu index="2">
            <template #title>Langage</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>Admin</template>
            <el-menu-item index="3-1">Se Connecter</el-menu-item>
            <el-menu-item index="3-1">Modifier</el-menu-item>
            <el-menu-item index="3-2">Se Deconnecter</el-menu-item> 
        </el-sub-menu>
    </el-menu>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const activeIndex = ref('1')
</script>

<style scoped lang="scss">
.flex-grow {
  flex-grow: 1;
}
</style>
