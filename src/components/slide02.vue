<template>
    <div>
      <h2>{{ recipe.title }}</h2>
      <!-- 制作步骤滑动组件 -->
      <div class="slider">
        <div v-for="(step, index) in recipe.steps" :key="index">
          {{ step }}
        </div>
      </div>
      <!-- 用户评分评论组件 -->
      <div>
        <h3>用户评分</h3>
        <p>{{ recipe.rating }}</p>
        <h3>用户评论</h3>
        <ul>
          <li v-for="(comment, index) in recipe.comments" :key="index">{{ comment }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      recipe: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .slider {
    overflow-x: scroll;
  }
  </style>
  