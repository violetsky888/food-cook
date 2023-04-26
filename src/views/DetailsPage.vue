<template>
    <div class="recipe-details">
     <Navbar/>
      <h1>菜谱详情</h1>
      <!-- 显示菜谱名称、图片和描述 -->
      <h1>{{ recipe.title }}</h1>
      <img :src="recipe.image" alt="">
      <p>{{ recipe.description }}</p>
      <Footer/>
    </div>
  </template>
  
 <script>
import Navbar from "@/components/Navbar.vue"
import Footer from "../components/footer.vue";
export default {
  components: {
    Navbar,
    Footer
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },computed: {
    recipe() {
      // 根据传递的id查找对应的recipe
      return this.$parent.recipes.find((recipe) => recipe.id === this.id);
    },
  }

}
  </script> 
 
  