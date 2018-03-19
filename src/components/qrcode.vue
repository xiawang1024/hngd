<template>
    <div class="qrcode">
        <span class="to-home" @click="toHome"></span>
        <div class="qrcode-wrap">
            <img :src="qrUrl" alt="" class="img">
        </div>
        <div class="tips">
            <span class="arrow"></span>
            <span class="text">长按二维码加关注</span>
        </div>
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
import { QRCODELIST } from 'config/index'

export default {
    name:'qrcode',
    data() {
        return {
            qrcodeList:QRCODELIST,
            qrUrl:''
        }
    },    
    created() {
        let query = this.$route.query;
        let [type, qrId] = [query.type, query.qrId]       
        if(!qrId && !type){
            this.$router.push('/home')
            return
        }
        qrId = parseInt(qrId) - 1
        
        this.qrUrl = this.qrcodeList[type][qrId].url      
        this.$nextTick(() => {

        }) 
    },
    methods:{
        toHome() {
            console.log(111)
            this.$router.push('/home')
        }
    }
}
</script>


<style lang="stylus" scoped>
.qrcode
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    width 100%
    height 100%
    padding 0px
    background url('./bg.jpg') top center no-repeat
    background-size cover    
    box-sizing border-box
    .to-home
        position absolute
        z-index 1024
        top 30px
        right 30px
        display inline-block
        padding 20px
        width 80px
        height 80px
        background url('./home.png') center center no-repeat
        background-size 80px 80px
    .qrcode-wrap
        text-align center
        padding-top 200px
        font-size 0
        .img
            width 360px
            height 360px
    .tips
        position relative
        margin-top 80px
        text-align center
        font-size 28px
        color #ffffff
        .arrow
            position absolute
            top -50px
            left 50%
            margin-left -16px
            display inline-block
            border 16px solid transparent
            border-bottom-color #fff
    .ft
        position absolute
        bottom 90px
        left 0
        width 100%        
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
