<template>
    <div class="category">
        <category-tab></category-tab>
        <category-content :categoryList="categoryList"></category-content>
    </div>
</template>

<script>
//网络请求js模块
import { getCategory } from '@/network/category'

import CategoryTab from './childComps/CategoryTab.vue'
import CategoryContent from './childComps/CategoryContent.vue'
export default {
    name : 'Category',
    data(){
        return{
            categoryList : [
                // {item : 'a'},
                // {item : 'a'},
                // {item : 'a'},
                // {item : 'a'},
                // {item : 'a'},
            ]
        }
    },
    created(){
        getCategory().then((res)=>{
            const {list} = res.data.category;
            this.categoryList = list;
        })
    },
    components:{
        CategoryTab,
        CategoryContent
    }
}
</script>

<style lang="less" scoped>
.category{
    .category-content{
        margin-bottom: 1rem;
    }
}
</style>