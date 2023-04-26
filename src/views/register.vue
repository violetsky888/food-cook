<template>
    <div>
      <h2>注册</h2>
      <form class="register-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">用户名：</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">密码：</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="confirm-password">确认密码：</label>
          <input
            type="password"
            id="confirm-password"
            v-model="confirmPassword"
            required
          />
        </div>
        <div class="form-group">
          <button type="submit">注册</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      submitForm() {
        // 对用户输入进行验证，如果通过，则提交数据到后端接口进行存储
      }
    }
  };
  </script>
  