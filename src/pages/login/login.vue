<template>
    <div class="home">
        <yd-layout>
            <yd-navbar slot="navbar" title="登录">
                <router-link to="#" slot="left">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>
            </yd-navbar>

            <yd-cell-group>
                <yd-cell-item>
                    <span slot="left">用户名：</span>
                    <input slot="right" type="text" placeholder="请输入用户名" v-model="user_name">
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
                    <input slot="right" type="text" placeholder="请输入手密码" v-model="pass_word">
                </yd-cell-item>
            </yd-cell-group>
            
            <div class="login_btn_box">
                <yd-button size="large" type="primary" @click.native="login">登入</yd-button>
            </div>
            <yd-tabbar slot="tabbar">
                <yd-tabbar-item title="首页" link="#" >
                    <yd-icon name="home" slot="icon"></yd-icon>
                </yd-tabbar-item>
                <yd-tabbar-item title="购物车" link="#">
                    <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
                </yd-tabbar-item>
                <yd-tabbar-item title="个人中心" link="#" active>
                    <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
                </yd-tabbar-item>
            </yd-tabbar>

        </yd-layout>
    </div>
</template>
<script>
import {loginFetch} from '@/service/getData'
export default {
    data(){
        return {
            user_name:'',
            pass_word:''
        }
    },
    methods:{
        async login(){
            let {user_name,pass_word} = this;
            let res = await loginFetch({user_name,pass_word})
            console.log(res.data)
        }
    }
}
</script>
<style scoped lang="scss">
.home{
    height: 100%;
    .login_btn_box{
        margin: 0.5rem;
    }
}
</style>

