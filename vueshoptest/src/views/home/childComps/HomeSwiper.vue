<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in banner" :key="index">
            <img :src="item.image" />
        </van-swipe-item>
    </van-swipe>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
export default {
    name : "HomeSwiper",
    props:{
        banner:{
            type : Array,
            default(){
                return[
                    {image : 'https://img01.yzcdn.cn/vant/apple-1.jpg'},
                    {image : 'https://img01.yzcdn.cn/vant/apple-2.jpg'},
                    {image : 'https://img01.yzcdn.cn/vant/apple-3.jpg'}
                ]
            }
        }
    }
}

</script>

<style lang="less" scoped>
    .van-swipe{
        margin-top: 46px;
        width: 100vw;
        height: 3.9rem;
        .van-swipe-item{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>