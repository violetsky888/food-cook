<template>
    <div class="recipes">
      <div>
        <label>按分类筛选：</label>
        <select v-model="category">
          <option value="">全部</option>
          <option v-for="cat in categories" :value="cat">{{ cat }}</option>
        </select>
        <input v-model="keywords" type="text" placeholder="输入关键字搜索">
      </div>
      <div class="recipe-list">
        <div v-if="filteredRecipes.length > 0" v-for="recipe in filteredRecipes" :key="recipe.id" class="recipe-card">
          <img :src="recipe.imageURL" alt="">
          <h3>{{ recipe.name }}</h3>
          <p>{{ recipe.description }}</p>
          <ul>
            <li>分类: {{ recipe.category }}</li>
            <li>食材: {{ recipe.ingredients.join(', ') }}</li>
            <li>烹饪方式: {{ recipe.method }}</li>
          </ul>
        </div>
        <p v-else>没有符合条件的菜谱</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recipes: [
          {
            id: 1,
            name: "红烧肉",
            category: "猪肉",
            description: "这是一道好吃的红烧肉。",
            ingredients: ["猪腩肉", "青葱", "八角", "生姜", "料酒"],
            method: "红烧",
            imageURL: "https://example.com/images/hongshaorou.jpg"
          },
          {
            id: 2,
            name: "鱼香肉丝",
            category: "猪肉",
            description: "这是一道好吃的鱼香肉丝。",
            ingredients: ["猪里脊肉", "青椒", "木耳", "蒜", "姜"],
            method: "炒菜",
            imageURL: "https://example.com/images/yuxiangrousi.jpg"
          },
          {
            id: 3,
            name: "宫保鸡丁",
            category: "鸡肉",
            description: "这是一道好吃的宫保鸡丁。",
            ingredients: [
              "鸡胸肉",
              "花生米",
              "葱",
              "姜",
              "蒜",
              "干辣椒",
              "汤",
              "淀粉"
            ],
            method: "炒菜",
            imageURL: "https://example.com/images/gongbaojiding.jpg"
          }
        ],
        category: "",
        keywords: ""
      };
    },
    computed: {
      categories() {
        return [...new Set(this.recipes.map(recipe => recipe.category))];
      },
      filteredRecipes() {
        return this.recipes.filter(recipe => {
          let matchesCategory = !this.category || recipe.category === this.category;
          let matchesKeywords =
            !this.keywords ||
            recipe.name.toLowerCase().includes(this.keywords.toLowerCase()) ||
            recipe.ingredients.some(ingredient =>
              ingredient.toLowerCase().includes(this.keywords.toLowerCase())
            ) ||
            recipe.method.toLowerCase().includes(this.keywords.toLowerCase());
          return matchesCategory && matchesKeywords;
        });
      }
    }
  };
  </script>
  