<template>
    <div>
      <h2>个人信息</h2>
      <div class="user-info">
        <div class="avatar">
          <img :src="userInfo.avatarUrl" />
          <input type="file" @change="uploadAvatar" />
        </div>
        <div class="info">
          <div class="item">
            <label>昵称：</label>
            <div class="value">
              <input type="text" v-model="userInfo.nickname" />
            </div>
          </div>
          <div class="item">
            <label>性别：</label>
            <div class="value">
              <input type="radio" value="male" v-model="userInfo.gender" />男
              <input type="radio" value="female" v-model="userInfo.gender" />女
            </div>
          </div>
          <div class="item">
            <label>介绍：</label>
            <div class="value">
              <textarea v-model="userInfo.intro"></textarea>
            </div>
          </div>
          <div class="item">
            <button @click="saveUserInfo">保存</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userInfo: {
          avatarUrl: 'https://www.gravatar.com/avatar/default.jpg',
          nickname: '',
          gender: '',
          intro: ''
        }
      };
    },
    mounted () {
      this.getMyUserInfo()
    },
    methods: {
      // 获取当前登录用户的信息
      getMyUserInfo() {
        // 根据已登录用户 session 或 token 发送请求获取用户信息，将信息填充到 data 中
        this.userInfo = {
          avatarUrl: 'https://www.gravatar.com/avatar/default.jpg',
          nickname: '张三',
          gender: 'male',
          intro: '这是我的个人介绍'
        }
      },
      // 上传头像
      uploadAvatar(event) {
        // 处理头像上传事件
      },
      // 提交用户信息修改
      saveUserInfo() {
        // 根据已登录用户 session 或 token 将修改后的用户信息发送到后端接口进行存储，并更新本地 data 中的用户信息。
      }
    },
  };
  </script>
  