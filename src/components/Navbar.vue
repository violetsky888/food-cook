
  <template>
     <nav class="navbar">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-logo">
        <img :src="require('../../public/logo.png')" alt=""><span>{{ navbar.websiteName }}</span>
      </router-link>
      <ul class="navbar-menu">
        <li class="navbar-item">
          <router-link :to="{ name: 'home' }" class="navbar-link">{{ navbar.homeLinkText }}</router-link>
        </li>
        <li class="navbar-item">
          <router-link :to="{ name: 'recipes' }" class="navbar-link">{{ navbar.recipesLinkText }}</router-link>
        </li>
        <li class="navbar-item">
          <router-link :to="{ name: 'about' }" class="navbar-link">{{ navbar.aboutLinkText }}</router-link>
        </li>
        <li class="navbar-item">
          <router-link :to="{ name: 'contact' }" class="navbar-link">{{ navbar.contactLinkText }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: "Navbar",
    data() {
      return {
        navbar: {}
      }
    },

    created() {
  // axios.get('/api/navbar')
  //   .then(response => {
  //     console.log(response.data);
  //     // 状态码为 200，且响应数据值为 JSON 数据。
  //     this.navbar = response.data;
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
  this.getData();

},
methods: {
  async getData() {
    try {
      const response = await axios.get('/api/navbar');
      console.log(response.data);
      this.navbar = response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

  
  };
  </script>
  
  <style scoped>
  .navbar {
background-color: #e5d9c3;
color: #7f5c3b;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
    width: 90%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between; 
}
.navbar-logo {
  width: 200px;
  height: 70px;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: #7f5c3b; 
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
 
}
.navbar-logo img {
    width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 5px;
}
.navbar-logo span {
  font-size: 15px;
}
.navbar-logo:hover {
  color: #e1f2e5;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-item {
  margin: 0 1rem;
  font-size:16px;
  
}

.navbar-link {
  text-decoration: none;
  color: #7f5c3b; 
  transition: all 0.2s ease-in-out;
}

.navbar-link:hover {
color: #e1f2e5;
}

  </style>
  