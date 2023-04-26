<template>
    <div class="herobar">
      <div class="hero-bg" >
        <video autoplay muted loop class="hero-video">
          <source src="../assets/berry.mp4" type="video/mp4">
          
        </video>
        <div class="hero-content">
          <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <router-link to="/recipes">
          <button>查看菜谱</button>
        </router-link>
        </div>
      </div>
      <div class="hero-search">
        <input type="text" placeholder="请输入要搜索的内容" v-model="searchText">
        <button @click="handleSearch">搜索</button>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';
  export default {
    name: 'Main',
    data() {
      return {
        searchText: '',
        title: '',
      description: ''
      }
    },
    async created() {
    try {
      const response = await axios.get('/api/main');
      this.title = response.data.title;
      this.description = response.data.description;
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  },
    methods: {
      handleSearch() {
        console.log('搜索内容：', this.searchText)
        // 这里可以进行搜索处理...
      }
    }
  }
  </script>
  
  <style scoped>
  .herobar {
    position: relative;
  }
  
  .hero-bg {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.5;
  }
  button {
  background-color: #FFA07A;
  border-radius: 5px;
  color: #fff;

  padding: 10px 20px;
  font-size: 16px;
  border: none;
  box-shadow: 2px 2px 5px #ccc;
  transition: background-color 0.3s ease;
}
button:hover {
background-color:   #FF6347;
  cursor: pointer;
  

}

  .hero-content {
    text-align: center;
    z-index: 10;
  }
  
  .hero-content h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  
  .hero-search {
    margin-top: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
  }
  
  .hero-search input[type="text"] {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    width: 60%;
    margin-right: 1rem;
    border-radius: 30px;
    outline: none;
    border: none;
  }
  
  .hero-search button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #FF6347;
    color: #fff;
    border-radius: 30px;
    border: none;
    cursor: pointer;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  