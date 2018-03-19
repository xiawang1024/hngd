<template>
    <div class="home">
        <h1 class="title">
            河南广播电视台微信矩阵
        </h1>        
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
const HNDT_LOGO = [
    {
        url:require('logos/hndt-icon/icon-hndt-01.png'),
        name:'新闻广播',
        urlId:'01'
    },
    {
        url:require('logos/hndt-icon/icon-hndt-02.png'),
        name:'经济广播',
        urlId:'02'
    },
    {
        url:require('logos/hndt-icon/icon-hndt-03.png'),
        name:'交通广播',
        urlId:'03'
    },
    {
        url:require('logos/hndt-icon/icon-hndt-04.png'),
        name:'娱乐976·戏曲广播',
        urlId:'04'
    },
    {
        url:require('logos/hndt-icon/icon-hndt-05.png'),
        name:'魅力881·戏音乐广播',
        urlId:'05'
    },
    {
        url:require('logos/hndt-icon/icon-hndt-06.png'),
        name:'农村广播',
        urlId:'06'
    },
    {
        url:require('logos/hndt-icon/icon-hndt-07.png'),
        name:'My Radio·影视广播',
        urlId:'07'
    },
    {
        url:require('logos/hndt-icon/icon-hndt-08.png'),
        name:'私家车999·旅游广播',
        urlId:'08'
    },
    {
        url:require('logos/hndt-icon/icon-hndt-09.png'),
        name:'UpRadio1066·教育广播',
        urlId:'09'
    },
    {
        url:require('logos/hndt-icon/icon-hndt-10.png'),
        name:'乐龄1056·信息广播',
        urlId:'10'
    },
    {
        url:require('logos/hndt-icon/icon-hndt-11.png'),
        name:'天籁936·古典音乐广播',
        urlId:'11'
    },
]

const HNTV_LOGO = [
    {
        url:require('logos/hntv-icon/icon-hntv-01.png'),
        name:'卫星频道',
        urlId:'01'
    },
    {
        url:require('logos/hntv-icon/icon-hntv-02.png'),
        name:'都市频道',
        urlId:'02'
    },
    {
        url:require('logos/hntv-icon/icon-hntv-03.png'),
        name:'民生频道',
        urlId:'03'
    },
    {
        url:require('logos/hntv-icon/icon-hntv-04.png'),
        name:'法制频道',
        urlId:'04'
    },
    {
        url:require('logos/hntv-icon/icon-hntv-05.png'),
        name:'电视剧频道',
        urlId:'05'
    },
    {
        url:require('logos/hntv-icon/icon-hntv-06.png'),
        name:'新闻频道',
        urlId:'06'
    },
    {
        url:require('logos/hntv-icon/icon-hntv-07.png'),
        name:'欢腾购物频道',
        urlId:'07'
    },
    {
        url:require('logos/hntv-icon/icon-hntv-08.png'),
        name:'公共频道',
        urlId:'08'
    },
    {
        url:require('logos/hntv-icon/icon-hntv-09.png'),
        name:'新农村频道',
        urlId:'09'
    },
    {
        url:require('logos/hntv-icon/icon-hntv-10.png'),
        name:'国际频道',
        urlId:'10'
    },
    {
        url:require('logos/hntv-icon/icon-hntv-11.png'),
        name:'航空港卫视频道',
        urlId:'11'
    },
]

export default {
    name:'home',
    data() {
        return {
            hndtLogo:HNDT_LOGO,
            hntvLogo:HNTV_LOGO,
        }
    },
    methods:{
        goToQrcode(type,qrId) {
            this.$router.push({path:'/qrcode', query:{type, qrId}})            
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
        font-size 36px
        color #ffffff
    .hndt,.hntv
        width 100%
        margin-top 120px
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
                    font-size 28px
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
                    font-size 28px
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
            font-size 25px
</style>

