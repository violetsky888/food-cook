<template>
    <div>
      <h2>登录</h2>
      <form class="login-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">用户名：</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">密码：</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <button type="submit">登录</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      submitForm() {
        // 对用户输入进行验证，如果通过，则将用户登录状态保存到前端缓存中
      }
    }
  };
  </script>
  