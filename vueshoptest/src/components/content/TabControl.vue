<template>
    <div class="title">
        <span :class="{active:controlIndex===index}" v-for="(item,index) in title" :key="index" @click="controlChange(index)">{{ item }}</span>
    </div>
</template>

<script>
export default {
    name : "TabControl",
    props:{
        title:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data(){
        return{
            controlIndex:0
        }
    },
    methods:{
        controlChange(index){
            this.controlIndex = index;
            this.$emit('titleChange',index);//触发父组件的自定义事件
        }
    }
}
</script>

<style lang="less" scoped>
    .title{
        height: 1rem;
        font-size: 0.4rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #ffffff;
        // border: 1px red solid;
        .active{
            color : #EF232F;
            border-bottom: 3px solid #EF232F;
            line-height: 32px;
        }
    }
</style>