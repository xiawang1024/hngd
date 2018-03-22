<template>
    <div class="home">
        <h1 class="title">
            河南广播电视台微博矩阵
        </h1>     
        <div class="hngd-weibo">
            <img src="../logos/icon-hngd-logo.png" class="img" @click="goToQrcode(2)">
            <p class="name">河南广播电视台</p>
        </div>   
        <section class="hndt">
            <div class="name-box clearfix border-bottom-1px">
                <h2 class="name-wrap right ">
                    <span class="icon-wrap"></span>
                    <span class="name">广播</span>
                </h2>
            </div>   
            <ul class="logos-wrap">
                <li class="logo" v-for="item of hndtLogo" :key="item.urlId">
                    <img :src="item.url" alt="" class="img" @click="goToQrcode(0,item.urlId)">
                    <p class="name" v-html="item.name"></p>
                </li>   
            </ul>         
        </section>
        <section class="hntv">
            <div class="name-box clearfix border-bottom-1px">
                <h2 class="name-wrap right ">
                    <span class="icon-wrap"></span>
                    <span class="name">电视</span>
                </h2>
            </div>   
            <ul class="logos-wrap">
                <li class="logo" v-for="item of hntvLogo" :key="item.urlId">
                    <img :src="item.url" alt="" class="img" @click="goToQrcode(1,item.urlId)">
                    <p class="name" v-html="item.name"></p>
                </li>   
            </ul>         
        </section>
        <div class="ft">
            <span class="icon-tai">

            </span>
            <span class="name-tai">
                河南广播电视台
            </span>
        </div>        
    </div>
</template>

<script>

import { HNDT_LOGO, HNTV_LOGO, WEIBOLINK } from 'config/index'


export default {
    name:'home',
    data() {
        return {
            hndtLogo:HNDT_LOGO,
            hntvLogo:HNTV_LOGO,
            weiboLink:WEIBOLINK
        }
    },
    methods:{
        goToQrcode(type,qrId) {     
            if(type == 2) {
                window.location.href = 'https://m.weibo.cn/u/6426290707'
                return
            }        
            qrId = parseInt(qrId) - 1
            let url = this.weiboLink[type][qrId].url
            if(url) {
                window.location.href = url
            }else{
                return 
            }
             
        }
    }
}
</script>


<style lang="stylus" scoped>
.home        
    padding 0 75px
    background url('./bg.jpg') top center no-repeat
    background-size cover
    overflow hidden
    box-sizing border-box
    .title
        margin-top 90px
        text-align center
        font-size 48px
        color #ffffff
    .hngd-weibo
        width 300px
        margin 100px auto 0
        text-align center 
        font-size 0
        .img
            width 150px
        .name
            margin-top 28px
            font-size 34px
            color #ffffff
    .hndt,.hntv
        width 100%
        margin-top 40px
        .name-box
            width 100%
            padding-bottom 26px
            .name-wrap
                font-size 0                      
                .icon-wrap
                    vertical-align bottom
                    display inline-block
                    width 35px
                    height 41px
                    background url('./icon-hndt.png') center center no-repeat
                    background-size cover
                .name
                    vertical-align bottom
                    display inline-block
                    margin-left 16px
                    font-size 32px
                    color #ffffff
        .logos-wrap
            width 100%
            display flex
            flex-wrap wrap            
            .logo
                width 200px
                margin-top 80px
                text-align center
                font-size 0
                .img
                    width 140px
                    height 140px
                .name
                    padding 0 10px
                    margin-top 28px
                    line-height 1.4
                    font-size 32px
                    color #ffffff
    .hntv
        .name-box
            .name-wrap
                .icon-wrap
                    width 35px
                    height 43px
                    background url('./icon-hntv.png') center center no-repeat
                    background-size cover
    .ft
        width 100%
        margin 240px 0 90px 0
        text-align center
        color #ffffff
        .icon-tai
            vertical-align middle
            display inline-block
            width 49px
            height 42px
            background url('./icon-tai.png') center center no-repeat
            background-size cover
        .name-tai
            font-size 28px
</style>

