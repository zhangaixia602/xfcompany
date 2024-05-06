<script setup>
import { getImgUrl } from '@/stores/counter';
const LearnArrs=[
  {
    title:"一消",
    code:"yx",
    src:"yx.jpg",
    href:"https://m.qlchat.com/wechat/page/channel-intro?channelId=2000020626493638"
  },
  {
    title:"二消",
    code:"ex",
    src:"ex.jpg",
    href:"https://m.qlchat.com/wechat/page/channel-intro?channelId=2000015652086755"
  },
  {
    title:"中级消操",
    code:"xc",
    src:"xc.jpg",
    href:"https://m.qlchat.com/wechat/page/channel-intro?channelId=2000015087294643"
  },
  {
    title:"实操",
    code:"sc",
    src:"sc.png",
    href:"https://m.qlchat.com/wechat/page/channel-intro?channelId=2000020238297383"
  }
]
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>课程介绍</h2>
        <p>Course Introduction</p>
      </div>
      <div class="learnCenter">
         <a class="learnItem" v-for="LearnArr in LearnArrs" key="LearnArr.id" :href="LearnArr.href" target="_blank">
            <img :src="getImgUrl(LearnArr.src)" />
            <span>点击学习</span>
         </a>
      </div>
    </div>
  </main>
</template>
<style scoped>
main{
  padding:5rem 0 6rem;
}
.title{
  text-align: center;
}
.title h2{
  color: #333;
  font-size:2rem;
}
.title p{
  color: #acabab;
  font-size:0.9rem;
  margin:0 !important;
}
.title p:before, .title p:after{
    content: " ";
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    background: linear-gradient(45deg, #e30a0a, transparent);
    margin: 0 0.2rem;
}
.learnCenter{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.learnItem{
  display:block;
  margin-top:2rem;
  cursor: pointer;
  text-align:center;
  padding:0;
}
.learnItem span{
  display:block;
  color: red;
  background: #c0c0c040;
  padding: 0.3rem;
  font-size: 1rem;
}
.learnItem img{
  max-width:26rem;
  max-height:26rem;
}
@media (max-width: 768px){
  main{
    padding:4rem 0 2rem;
  }
  .learnCenter{
    width: 100%;
    padding: 0 0.5rem;
  }
  .learnItem img{
    width:100%;
  }
}
</style>