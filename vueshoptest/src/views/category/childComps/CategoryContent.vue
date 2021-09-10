<template>
    <div class="category_content">
        <div class="title">
            <div :class="{active : countIndex===index}" v-for="(item , index) in categoryList" :key="index" @click="indexChange(index , item)">{{item.title}}</div>
        </div>
        <div class="content">
            <div v-for="(item , index) in cateContentList" :key="index">
                <img :src="item.image">
                <p>{{item.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'CategoryContent'
}
</script>

<style lang="less" scoped>
.category_content{
    margin-top: 46px;
    overflow: hidden;position: fixed ;top: 0;left: 0;right: 0;bottom: 0;
    .title{
        background-color: #fff;
        text-align: center;
        float: left;
        overflow: auto;
        width: 30%;
        height: 100%;
        div{
            line-height: 0.9rem;
            font-size: 0.4rem;
        }
        div:hover{
            cursor: pointer;
        }
        .active{
            background-color: #fff;
            border-left: 3px solid #ff8a9d;
        }
    }
    .content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        float: left;
        overflow: auto;
        width: 70%;
        height: 100%;
        div{
            img{
                width : 2rem;
                height: 2rem;
            }
            p{
                font-size: 0.36rem;
            }
        }
    }
}
</style>