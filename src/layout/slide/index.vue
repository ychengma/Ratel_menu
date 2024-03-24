<template>
    <el-menu router active-text-color="#ffd04b" background-color="#142334" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff">
        <el-sub-menu index="/">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>Creer Menu</span>
            </template>
                <el-menu-item index="restaurant">Model restaurant</el-menu-item>
                <el-menu-item index="bubblthe">Model bubblthe</el-menu-item>
                <el-menu-item index="traiteur">Model traiteur</el-menu-item>
                <el-menu-item index="magasin">Model magasin</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Prevoire</span>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon>
                <document />
            </el-icon>
            <span>History</span>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <span>Setting</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup lang='ts'>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.el-menu{
    border-right:none;
}
</style>
