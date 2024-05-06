<script setup>
import { getImgUrl } from '@/stores/counter';
const imgArrs=[
  {
    id:0,
    src:"banner1.jpg"
  },
  {
    id:1,
    src:"banner2.jpg"
  },
  {
    id:2,
    src:"banner3.jpg"
  },
  {
    id:3,
    src:"banner4.jpg"
  },
  {
    id:4,
    src:"banner5.jpg"
  }
]
</script>
<template>
  <main>
    <a-carousel arrows autoplay>
      <template #prevArrow>
        <div class="custom-slick-arrow left">
          <img src="@/assets/images/left.png" />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow right">
          <img src="@/assets/images/left.png" />
        </div>
      </template>
      <div v-for="imgArr in imgArrs" key="imgArr.id" class="bannerImg"><img :src="getImgUrl(imgArr.src)" /></div>
    </a-carousel>
  </main>
  <main>
    <video autoplay loop controls>
    <source src="@/assets/images/trailer.mp4" type="video/mp4"></source>
    </video>
    <div class="aboutUs">
      <h3>关于我们</h3>
      <p>杜门消防科技中心,坐落于中国武汉江夏客厅站旁。专注于消防安全技术实操领域,掌握消防实操全流程核心技术,更不断向技术边界发起挑战。我们拥有专业的管理团队,科学的教学标准,用实力演绎杜门精神。</p>
      <p>目前我们已经率先开展消防实操技术的培训,丰富的消防现场实操经验,老师亲自传授各种实操技巧,带领着大家理论实操双结合教学,手把手帮你解决实际难题,给你提供永久的答疑解惑服务。完善的设施设备,青鸟海湾泰和安利达等火灾自动报警系统、气体灭火系统、自动喷水灭火系统、消防给水系统、防排烟系统一应俱全，为大家提供最详尽最专业的教学指导。我们的学员遍布中国各地，获得越来越多伙伴的认可与信心，让消防实操知识注入每一位学员。</p>
    </div>
  </main>
</template>
<style scoped>
main{
  width:100%;
}
:deep(.slick-slide) {
  height:100vh;
  overflow: hidden;
}
.custom-slick-arrow{
  width:4rem;
  height:4rem;
  z-index:99;
}
.custom-slick-arrow img{
  width:100%;
  height:100%;
}
.custom-slick-arrow.left{
  left: 1rem;
}
.custom-slick-arrow.right{
  right:1rem;
  transform: rotate(180deg);
}
.bannerImg img{
  width:100%;
  height:100%;
}
.aboutUs{
  padding:1rem;
  text-align: center;
  display:none;
}
.aboutUs h3{
  font-size:1.2rem;
  color:#050318;
  padding-bottom:0.8rem !important;
  border-bottom:1px solid #05031821;
  position: relative;
}
.aboutUs h3:after{
    content: "";
    display: inline-block;
    width: 2rem;
    height: 0.2rem;
    background: red;
    position: absolute;
    bottom: -0.1rem;
    left: 50%;
    transform: translateX(-50%);
}
.aboutUs p{
  font-size: 0.9rem;
  text-align: left;
  text-indent: 2em;
  margin: 0.5rem 0 0;
}
.map{
  margin:1.5rem 0 6rem;
  box-shadow: 0px 10px 20px #d0d0d1;
}
.map img{
  width:100%;
}
@media (max-width: 768px){
  main{
    height:auto;
    position: static;
  }
  .bannerImg img{
    width:auto;
  }
  video{
    width:100%;
  }
  .aboutUs{
    display:block;
  }
}
</style>
