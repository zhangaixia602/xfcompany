<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
const isShow = ref(true);
const routes =[
    {
      path: '/',
      name: '首页'
    },
    {
      path: '/learningCenter',
      name: '学习中心'
    },
    {
      path: '/practicalSite',
      name: '实操场地'
    },
    {
      path: '/queryCertificate',
      name: '证书查询'
    }
];
const toggleMenu = () => {
  isShow.value=!isShow.value;
};
</script>
<template>
<header>
    <div class="container">
        <img alt="logo图" class="logo" src="@/assets/images/lg.png" />
        <nav :class="isShow ? 'showMenu' : ''">
            <RouterLink v-for="route in routes" key="route.name" :to="route.path" @click="toggleMenu">{{route.name}}</RouterLink>
        </nav>
        <img alt="菜单" class="menu" src="@/assets/images/menu.png" @click="toggleMenu"/>
    </div>
  </header>
</template>
<style scoped>
header .container{
    display:flex;
    align-items: center;
    height:100%;
    position:relative;
}
header img{
    height:100%;
    margin-right:2rem;
}
.router-link-exact-active{
    padding:0.5rem;
    color:white;
    background-color:red;
    border-radius:0.5rem;
}
img.menu{
  display:none;
}
@media (max-width: 768px){
  header .container{
    justify-content: space-around;
  }
  header img{
    margin-right:0;
  }
  img.menu{
    display: block;
    width: 2rem;
    height: 2rem;
  }
  nav{
    display:none;
    position: absolute;
    left: 0;
    top: 100%;
    background:#00000052;
    width:100%;
  }
  nav.showMenu{
    display: flex;
    flex-wrap: wrap;
  }
  nav.showMenu a{
    padding:0.5rem;
    display:block;
    width:100%;
    text-align: center;
  }

}
</style>