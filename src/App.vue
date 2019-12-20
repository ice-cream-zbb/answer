<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <b-navbar id="navbar" toggleable="lg" type="light" variant="light">
      <img class="logo" src="@/assets/logo.png" />
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
      <!-- 用于响应式-移动端  -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- 分类 -->
        <b-navbar-nav class="nav_div">
          <!-- <b-nav-item class="nav_item" v-for="(item,index) in groups" :key="index"> -->
          <router-link
            class="nav_item"
            :to="item.url"
            v-for="(item,index) in groups"
            :key="index"
          >{{item.name}}</router-link>
          <!-- </b-nav-item> -->
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto nav_right">
          <router-link to="/">登录</router-link>
          <router-link to="/about">注册</router-link>
          <router-link to="/">个人中心</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  // @Prop() private msg!: string;
  // private sg: string = 'xx'; // string必须使用单引号，注释双斜杠后必须空一格。
  private groups: any[] = [
    { id: '1', name: 'Android', url: '/' },
    { id: '2', name: 'IOS', url: '/about' },
    { id: '3', name: '小程序', url: '/' },
    { id: '4', name: '云函数', url: '/HomeX' }
  ]
}
</script>
<style lang="scss">
// 只能在style中引入了才能用。这样写不能全局。
// @import './src/theme/common/mixins/_flex.scss';
// @import './src/theme/common/mixins/_theme.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#navbar {
  border-bottom: #e7e7e7 solid 1px;
  padding: 0px 32px;
  // height: 54px;
  .logo {
    height: 48px;
    width: 100px;
  } // 大括号后不能有空格
  #nav-collapse {
    // height: 100%;
    .nav_div {
      // height: 100%;
      margin-left: 16px;
      // .nav_item {
        // padding-left: 8px;
        // padding-right: 8px;
        // height: 54px;
        // line-height: 54px;
        // margin: 0px 4px;
        // min-width: 64px;
      // }
      .router-link-exact-active {
        color: #42b983;
        border-bottom: #42b983 solid 2px;
      }
    }
  }
  a {
    text-decoration: none;
    color: #2c3e50;
    padding-left: 8px;
    padding-right: 8px;
    height: 54px;
    line-height: 54px;
    margin: 0px 4px;
    min-width: 64px;
  }
  // .nav_right {
  // }
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
