<template>
    <div class="home">
        <h1 class="title">
            河南广播电视台新闻热线
        </h1>        
        <ul class="logos-wrap">
            <li class="logo border-bottom-1px" v-for="item of newHotLine" :key="item.tel">                
                <p class="name" v-html="item.name"></p>
                <a v-if="item.tel != '000000'" :href="'tel:' + item.tel" class="href">{{item.tel}}</a>  
                <p v-else class="href no-icon">
                    QQ1: {{item.qq[0]}} 
                    <br>
                    QQ2: {{item.qq[1]}}
                </p>              
            </li>   
        </ul>         
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

import { NEWSHOTLINE } from 'config/index'


export default {
    name:'home',
    data() {
        return {
           newHotLine:NEWSHOTLINE
        }
    },
    methods:{
        goToQrcode(type,qrId) {             
            qrId = parseInt(qrId) - 1
            window.location.href = this.weiboLink[type][qrId].url 
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
        font-size 38px
        color #ffffff
    
    .logos-wrap
        width 100% 
        margin-top 100px              
        .logo
            width 100%
            height 80px
            display flex
            align-items center 
            justify-content space-between
            padding 30px 0
            text-align center            
            .name
                width 200px  
                height 80px
                line-height 80px             
                padding 0 10px                                
                font-size 34px
                color #ffffff
            .href
                flex 1   
                height 80px
                line-height 80px            
                color #ffffff
                font-size 32px                
                background url('./icon-phone.png') right 10px center no-repeat
                background-size auto 50px 
                &.no-icon
                    background none  
                    line-height 1.4         
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

