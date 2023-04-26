<template>
    <div class="recipe-details">
      <h1>{{ recipe.title }}</h1>
      <img :src="recipe.image" :alt="recipe.title" />
      <div class="ingredients">
        <h2>Ingredients:</h2>
        <ul>
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
        </ul>
      </div>
      <div class="slider">
        <h2>Steps:</h2>
        <ul>
          <li v-for="(step, index) in recipe.steps" :key="index">{{ step }}</li>
        </ul>
      </div>
      <div class="rating">
        <h3>用户评分: {{ rating }}</h3>
        <button @click="incrementRating">+1</button>
        <button @click="decrementRating">-1</button>
      </div>
      <div class="comments">
        <h3>评论:</h3>
        <ul>
          <li v-for="(comment, index) in comments" :key="index">{{ comment }}</li>
        </ul>
        <form @submit.prevent="addComment">
          <textarea v-model="newComment" placeholder="添加评论"></textarea>
          <button type="submit">提交</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recipe: {
          title: '黄金炒饭',
          image:
            'https://images.unsplash.com/photo-1578531724149-723a1539e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          ingredients: ['米饭', '蛋', '火腿肠', '玉米粒', '胡萝卜', '豌豆', '葱', '盐', '酱油'],
          steps: [
            '将所有食材切成小丁，备用。',
            '打散蛋液，热锅冷油炒成蛋饼，盛出备用。',
            '热锅再次倒油，加入所有食材炒匀。',
            '将炒好的饭和蛋饼也加入锅中，翻炒均匀即可。',
            '起锅装盘，美味的黄金炒饭就做好了。'
          ]
        },
        rating: 0,
        comments: ['很好吃！', '这道菜看起来不错。'],
        newComment: ''
      };
    },
    methods: {
      incrementRating() {
        this.rating++;
      },
      decrementRating() {
        if (this.rating > 0) {
          this.rating--;
        }
      },
      addComment() {
        this.comments.push(this.newComment);
        this.newComment = '';
      }
    }
  };
  </script>
  
  <style>
  .recipe-details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .recipe-details img {
    max-width: 100%;
  }
  .ingredients,
  .slider,
  .rating,
  .comments {
    margin: 20px 0;
    width: 100%;
    max-width: 600px;
  }
  .slider {
    overflow-y: scroll;
  }
  .ingredients ul,
  .slider ul,
  .comments ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .ingredients li,
  .slider li,
  .comments li {
    margin: 5px 0;
  }
  .rating button {
    margin: 5px;
  }
  </style>
  