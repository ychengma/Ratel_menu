<template>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="name">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="description">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="prix">
            <el-input v-model="form.prix" />
        </el-form-item>
        <el-form-item label="tax">
            <el-select v-model="form.tax" placeholder="Choisire une tax pour le produit">
                <el-option label="5.5%" value="5.5" />
                <el-option label="10%" value="10" default/>
                <el-option label="20%" value="20" />
            </el-select>
        </el-form-item>
        <el-form-item label="option">
            <el-input v-model="form.option" />
        </el-form-item>
        <el-form-item label="formul">
            <el-input v-model="form.formul" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>


<script lang="ts" setup>
import { ref } from 'vue'
import PorduitType from './type'
// do not use same name with ref
const form = ref<PorduitType>({
    ref: '',
    name: '',
    description: '',
    prix: 0,
    tax: '10%',
    option: null,
    formul: null
})

const onSubmit = () => {
    console.log('submit!')
}
</script>

<style scoped lang='scss'></style>
