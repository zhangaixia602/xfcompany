<template>
    <footer>
        <div class="container">
            <p><span>版权所有：</span>湖北杜门消防科技有限公司</p>
            <p><span><img alt="微信二维码" src="@/assets/images/police-icon.png" />鄂公网安备：</span><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011502001681"  target="_blank">42011502001681号</a></p>
            <p><span>鄂ICP备：</span><a href="https://beian.miit.gov.cn/" target="_blank">2023016156号-2</a></p>
        </div>
    </footer>
</template>
<style scoped>
footer>div{
  display: flex;
  align-items: center;
  justify-content: center;
  height:100%;
}
p{
    margin:0.5rem;
    font-size:0.9rem;
}
p span{
    display:inline-block;
    max-width: 7rem;
    text-align: right;
}
a{
    color:red;
    padding: 0;
}

@media (max-width: 768px){
    footer>div{
       display:block;
    }
    p{
        font-size:0.7rem;
    }
    p span{
        width: 7rem;
    }
}
</style>