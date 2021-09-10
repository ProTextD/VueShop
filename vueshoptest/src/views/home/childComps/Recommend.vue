<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
            <a :href="item.link">
                <img :src="item.image" @load="recomLoad">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Recommend',
    props:{
        recommend:{
            type : Array,
            default(){
                return[
                    {image : 'https://img01.yzcdn.cn/vant/apple-1.jpg'},
                    {image : 'https://img01.yzcdn.cn/vant/apple-2.jpg'},
                    {image : 'https://img01.yzcdn.cn/vant/apple-3.jpg'}
                ]
            }
        }
    },
    data(){
        return {};
    },
    methods:{
        recomLoad(){
            this.$emit('recomImgLoad')
        }
    }
}
</script>

<style lang="less" scoped>
    .recommend{
        display: flex;
        justify-content: space-around;
        margin-top: 0.2rem;
        img{
            width: 20vw;
            height: 20vw;
        }
    }
</style>