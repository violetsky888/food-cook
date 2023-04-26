<template>
    <div class="user">
      <h1>{{ user.name }}的个人信息</h1>
      <div class="info">
        <img :src="user.avatar" :alt="user.name" />
        <div class="details">
          <p>用户名: {{ user.name }}</p>
          <p>邮箱: {{ user.email }}</p>
          <p>城市: {{ user.city }}</p>
          <button @click="editUser">编辑</button>
        </div>
      </div>
      <div v-if="showEdit">
        <h2>编辑个人信息</h2>
        <form @submit.prevent="submitForm">
          <label for="name">用户名:</label>
          <input type="text" id="name" v-model="newUser.name" />
          <label for="email">邮箱:</label>
          <input type="email" id="email" v-model="newUser.email" />
          <label for="city">城市:</label>
          <input type="text" id="city" v-model="newUser.city" />
          <button type="submit">提交</button>
          <button type="button" @click="cancelEdit">取消</button>
        </form>
      </div>
      <hr>
      <h2>上传菜谱</h2>
      <form @submit.prevent="submitRecipe">
        <label for="title">标题:</label>
        <input type="text" id="title" v-model="newRecipe.title" />
        <label for="image">图片链接:</label>
        <input type="text" id="image" v-model="newRecipe.image" />
        <label for="ingredients">食材:</label>
        <textarea id="ingredients" v-model="newRecipe.ingredients"></textarea>
        <label for="steps">制作步骤:</label>
        <textarea id="steps" v-model="newRecipe.steps"></textarea>
        <button type="submit">提交</button>
      </form>
      <hr>
      <h2>收藏菜谱</h2>
      <ul>
        <li v-for="(recipe, index) in favoriteRecipes" :key="index">
          {{ recipe.title }} - {{ recipe.image }}
          <button @click="removeFavorite(index)">移除</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: 'Guest',
          email: 'guest@example.com',
          city: 'Shanghai',
          avatar:
            'https://images.unsplash.com/photo-1511110019365-6bfe10ce7857?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        showEdit: false,
        newUser: {
          name: '',
          email: '',
          city: ''
        },
        newRecipe: {
          title: '',
          image: '',
          ingredients: '',
          steps: ''
        },
        favoriteRecipes: []
      };
    },
    methods: {
      editUser() {
        this.showEdit = true;
        this.newUser = Object.assign({}, this.user);
      },
      cancelEdit() {
        this.showEdit = false;
      },
      submitForm() {
        this.user = Object.assign({}, this.newUser);
        this.showEdit = false;
      },
      submitRecipe() {
        let recipe = Object.assign({}, this.newRecipe);
        recipe.ingredients = recipe.ingredients.split('\n');
        recipe.steps = recipe.steps.split('\n');
        this.favoriteRecipes.push(recipe);
        this.newRecipe = {
          title: '',
          image: '',
          ingredients: '',
          steps: ''
        };
      },
      removeFavorite(index) {
        this.favoriteRecipes.splice(index, 1);
      }
    }
  };
  </script>
  
  <style>
  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .user img {
    max-width: 100%;
  }
  .info {
    display: flex;
    align-items: center;
  }
  .info .details {
    margin-left: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 600px;
  }
  form label {
    display: block;
    font-weight: bold;
  }
  