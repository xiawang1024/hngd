<template>
    <div class="home">                                       
        <ul class="logos-wrap">
            <li class="logo border-bottom-1px clearfix" v-for="item of hntvLogo" :key="item.urlId" @click="goToQrcode(item.urlId)">
                <img :src="item.url" alt="" class="img" >
                <span class="name" v-html="item.name"></span>
                <span class="icon border-bottom-white-1px"></span>
            </li>   
        </ul>                             
    </div>
</template>

<script>

import { HNTV_LOGO, HTTVLIVELINK } from 'config/index'


export default {
    name:'home',
    data() {
        return {            
            hntvLogo:HNTV_LOGO,
            hntvLive:HTTVLIVELINK         
        }
    },
    methods:{
        goToQrcode(qrId) {             
            qrId = parseInt(qrId) - 1
            window.location.href = this.hntvLive[qrId].url 
        }
    }
}
</script>


<style lang="stylus" scoped>
.home            
    padding-bottom 60px 
    overflow hidden
    box-sizing border-box
    .logos-wrap
        width 100%
        .logo
            display flex
            width 100%
            height 150px
            align-items center
            justify-content space-between
            font-size 0
            padding 12px 0 12px 30px
            box-sizing border-box
            .img
                width 120px
                height 120px
                padding 4px
                border 6px solid #fff
                box-shadow: 0px 0px 6px #aeabae inset,0px 0px 6px #aeabae
                background-color #ffffff
                box-sizing border-box
            .name
                flex 1
                padding-left 30px
                font-size 30px
            .icon
                display inline-block
                width 150px
                height 150px
                background url('./icon-tv.png') center center no-repeat
                background-size 60px auto
                background-color #248380
                border-bottom 1px solid #ffffff
                box-sizing border-box
</style>

