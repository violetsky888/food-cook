<template>
    <div class="contact-page">
      <Navbar />
      <h1>联系我们</h1>
      <p>感谢您对我们网站的关注！如果您有任何疑问或反馈，请随时使用以下表格与我们联系：</p>
      <div class="form-container">
        <form>
          <label for="name">姓名：</label>
          <input type="text" id="name" name="name" required>
          <label for="email">电子邮件：</label>
          <input type="email" id="email" name="email" required>
          <label for="phone">联系电话：</label>
          <input type="tel" id="phone" name="phone" />
          <label for="message">留言内容：</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">联系我们</button>
        </form>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/footer.vue";
  
  export default {
    components: {
      Navbar,
      Footer,
    },
  };
  </script>
  
  <style>
  .contact-page {
    width: 100%;
    height: 800px;
    font-size: 1.2em;
    line-height: 1.6;
    background-color: #f5f5f5;
  }
  
  .form-container {
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
  
  @media only screen and (max-width: 480px) {
    .form-container {
      padding: 20px;
    }
  }
  
  form label,
  form input,
  form textarea {
    display: block;
    margin-bottom: 10px;
  }
  
  form label {
    font-weight: bold;
  }
  
  form input,
  form textarea {
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    border: none;
    background-color: #f5f5f5;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  form input:focus,
  form textarea:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
  
  form button[type="submit"] {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 4px;
    border: none;
    background-color: #ff6f61;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  
  form button[type="submit"]:hover {
    background-color: #dc5a47;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
  }
  </style>
  