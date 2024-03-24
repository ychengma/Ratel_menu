<template>
    <el-table :data="tableData" style="width: 100%" max-height="250">
        <el-table-column fixed prop="ref" label="ref" width="80" />
        <el-table-column prop="name" label="Name" width="200" />
        <el-table-column prop="description" label="descrption" width="200" />
        <el-table-column prop="prix" label="prix" width="120" />
        <el-table-column prop="tax" label="tax" width="60" />
        <el-table-column prop="option" label="option" width="200" />
        <el-table-column prop="formul" label="formul" width="300" />
        <el-table-column fixed="right" label="Operations" width="158">
            <template #default="scope">
                <el-button type="success" size="small">
                    <el-icon>
                        <View />
                    </el-icon>
                </el-button>
                <el-button type="primary" size="small" :icon="Edit" />
                <el-button type="danger" size="small" :icon="Delete" @click.prevent="deleteRow(scope.$index)" />
            </template>
        </el-table-column>
    </el-table>
    <el-button class="mt-4" style="width: 100%" @click="onAddItem">Add Item</el-button>
    <el-dialog v-model="dialogTableVisible" title="Shipping address" width="800">
     <Edite></Edite>
  </el-dialog>
</template>

<script setup lang='ts'>
import { Delete, Edit, View } from '@element-plus/icons-vue'
import { ref } from 'vue'
import Edite from '@/components/menus/edite.vue'

interface User {
    date: string
    name: string
    address: string
}


const dialogTableVisible = ref(false)
const deleteRow = (datas: number) => {
    alert(datas)
}
const onAddItem = () => {
    dialogTableVisible.value = true
}
const tableData: User[] = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>

<style scoped lang='scss'></style>