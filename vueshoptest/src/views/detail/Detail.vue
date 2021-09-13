<template>
    <div class="detail">
        <!-- 导航栏 -->
        <van-nav-bar class="detail_nav" title="标题" left-allow @click-left="onClickLeft" fixed>
            <div slot="title" class="title">
                <span :class="{active:contIndex === index}" v-for="(item , index) in title" :key="index" @click="changeIndex(index)">{{item}}</span>
            </div>
        </van-nav-bar>

        <!-- 轮播图组件 -->
        <detail-swiper :detailSwiper='this.detailSwiper'></detail-swiper>
        <!-- 基本信息组件 -->
        <detail-base-info :goodsInfo='goodsInfo'></detail-base-info>
        <!-- 店铺信息 -->
        <detail-shop-info :shopInfo='shopInfo'></detail-shop-info>
        <!-- 商品图片详细信息 -->
        <detail-image-info :detailInfo='detailInfo'></detail-image-info>
        <!-- 商品参数信息 -->
        <detail-params-info ref="paramsRef" :paramsInfo='paramsInfo'></detail-params-info>
        <!-- 商品评论信息 -->
        <detail-comment-info ref="commentRef" :commentInfo='commentInfo'></detail-comment-info>
        <!-- 商品推荐 -->
        <goods-list ref="recommendRef" :goods="recommend"></goods-list>
        <!-- 底部商品导航 -->
        <detail-footer-bar class="footer_bar" @addCart='addCart'></detail-footer-bar>
    </div>
</template>

<script>
//js网络请求模块
import {getDetail , getRecommend , Goods , Shop} from '../../network/request.js'

import DetailSwiper from './childComps/DetailSwiper.vue' //轮播图组件
import DetailBaseInfo from './childComps/DetailBaseInfo.vue' //商品基本信息组件
import DetailShopInfo from './childComps/DetailShopInfo.vue' //店铺信息组件
import DetailImageInfo from './childComps/DetailImageInfo.vue' //商品图片详细信息
import DetailParamsInfo from './childComps/DetailParamsInfo.vue' //商品参数信息组件
import DetailCommentInfo from './childComps/DetailCommentInfo.vue' //商品的评论信息
import GoodsList from '../../components/content/good/GoodsList.vue'
import DetailFooterBar from "./childComps/DetailFooterBar.vue"  //底部商品导航

import Scroll from '../../components/common/scroll/Scroll.vue'

export default {
    name : 'Detail',
    data(){
        return{
            title:['商品' , '参数' , '评论' , '推荐'],
            contIndex:0,
            idd:null,
            detailSwiper:[],//商品轮播的图片信息
            goodsInfo:{},//保存基本的商品信息对象
            shopInfo:{},//保存店铺信息对象
            detailInfo:{},//商品详情信息
            paramsInfo:{},//商品参数信息
            commentInfo:{},//商品评论信息
            recommend:{},//商品推荐数据
            themeTopYs:[],  //联动的元素 距离顶部的距离 组成的数组
        }
    },
    components:{
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailImageInfo,
        DetailParamsInfo,
        DetailCommentInfo,
        DetailFooterBar,
        GoodsList,
        Scroll
    },
    created(){
        //获取iid
        this.iid = this.$route.params.iid;
        getDetail(this.iid).then((res) =>{
            // console.log(res)
            const {result} = res
            //轮播如数据
            this.detailSwiper = result.itemInfo.topImages
            // console.log(result)

            //es6 语法中的创建一个实例对象 记住，一定要加new;
            //创建商品信息数据对象
            
        })
    }
}
</script>