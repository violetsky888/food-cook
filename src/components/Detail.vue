<template>
    <div class="recipe-details">
     <Navbar/>
     <div class="container">
      <h1>菜谱详情</h1>
      <!-- 显示菜谱名称、图片和描述 -->
      <div class="detail">
      <h2>菜单名:{{ $route.query.title }}</h2>
     <img :src="$route.query.image" alt="">
      <p>简介:{{ $route.query.description  }}</p>
    </div>
     </div>
      
      <Footer/>
    </div>
  </template>
  
 <script>
import Navbar from "@/components/Navbar.vue"
import Footer from "./footer.vue";
export default {
  name: 'Detail',
  components: {
    Navbar,
    Footer
  }

}
  </script> 
<style scoped>
.recipe-details{
  width: 100%;
  height: 100%;
}
  h1 {
    font-size: 1.5em;
  }
  .container {
  width: 50%;
  /* 让容器占满整个页面高度 */
  margin:0 auto;
  padding-top: 30px;
}

.detail {
  height: 60vh; 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; 
  align-items: center; 
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

.detail h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.detail img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.detail p {
  font-size: 18px;
  line-height: 1.5;
}
</style>
 
  