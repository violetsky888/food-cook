<template>
  
    <div class="recipes">
      <Navbar />
      <h1>{{message}}</h1>
      
      <div class="recipe-list">
        <!-- 循环遍历渲染每个菜谱 -->
        <div v-for="(recipe, index) in recipes" :key="index" class="recipe-card" >
          <img :src="recipe.image" alt="" />
          <h2>{{ recipe.title }}</h2>
          <p>{{ recipe.description }}</p>
          <button @click="showDetail(recipe.id)">查看详情</button>
          
        </div>
      </div>
      <div class="detail-container" v-if="currentRecipe">
        <detail :id="currentRecipe.id"></detail>
    </div>
     
     
       <Footer/>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue"
  import Footer from "../components/footer.vue";
  import Detail from "../components/Detail.vue"
  export default {  
    name: 'recipes', 
    components: {
    Navbar,
    Footer,
    Detail
  },
  data() {
    return {
      message: "热门菜谱推荐",
      recipes: [
      {
            id: "1",
            title: "意式面条",
            description: "一道充满了香草和大蒜味的意大利面。",
            image: require("@/assets/Italy.png")
          },
          {
            id: "2",
            title: "炸薯条",
            description: "有着金黄色外皮的美味薯条。",
            image: require("@/assets/French-fries.png")
          },
          {
            id: "3",
            title: "布丁甜点",
            description: "一个美味、轻盈的甜点，带有令人愉悦的香气。",
            image: require("@/assets/ice-cream.png")
          },
          {
            id: "4",
            title: "披萨",
            description: "天然酵母面团与美味的披萨调料混合在一起，制成的美食。",
            image: require("@/assets/pizza.png")
          },{
            id: "5",
            title: "咖喱",
            description: "一道汁浓味美的佳肴,由新鲜的香料、椰子奶和多种蔬菜制作而成。",
            image: require("@/assets/curry.png")
          },
          {
            id: "6",
            title: "铁板烧",
            description: "厚实多汁的牛肉、猪肉或海鲜在特制铁板上翻炒加工,淡出美妙 juice 味。",
            image: require("@/assets/teppanyaki.png")
          }
      ],
      currentRecipe: null
    }
  },
  methods: {
    showDetail(id) {
      this.currentRecipe = this.recipes.find((recipe) => recipe.id === id);
    }
  }
  };
  </script>
  
  <style scoped>
  .detail-container {
  position: absolute;
  z-index: 1;
}
  .recipes {
  background-color: #FAEBD7; 
  height: 900px;
  position: relative;
  }
h1 {

  font-size: 28px;
  text-align: center;
  margin-top: 20px; 
  margin-bottom: 40px;
}
  .recipe-list {
   padding:10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 20px;
    justify-content: center;
    
  }
  
  .recipe-card {
    background-color: #f6f6f6;
    padding: 1rem;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  }
  
  .recipe-card img {
    width: 96px;
    height: 96px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .recipe-card h2 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .recipe-card p {
    font-size: 0.875rem;
    color: #555;
    margin-bottom: 1rem;
  }
  
  .recipe-card router-link {
    background-color: #e83c23;
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    display: inline-block;
    transition: opacity 0.2s ease-in-out;
  }
  
  .recipe-card router-link:hover {
    opacity: 0.8;
  }
  </style>
  