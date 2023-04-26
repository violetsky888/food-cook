<template>
    <div class="about-page">
      <Navbar />
      <div class="main-content">
        <div class="about-content">
            <h1>关于我们</h1>
            <p>你好，欢迎来到这里！我是精通烹饪的厨艺爱好者，也是这个网站的创建者。在这个美食主题的网站上，您可以找到很多让人垂涎三尺、看了就想动手做的菜谱、食谱和餐厅推荐，希望让您的口腹之欲得到满足。</p>
            <p>值得一提的是，这个网站还提供了很多厨房技巧、烹饪秘诀和有用的小贴士，无论您是厨艺高手还是才开始入门，都能在这里学到一些实用的东西。</p>
            <p>此外，我们不仅分享自己的热爱和经验，也非常欢迎来自您的反馈、建议和意见，让我们可以不断改进和完善现有内容。期待与您的交流，谢谢！</p>
            <p>祝愿您享受美食、享受生活！</p>
        </div>
      <Footer/>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue"
  import Footer from "@/components/footer.vue";
  export default {
    components: {
      Navbar,
      Footer
    }
  }
  </script>
  
  <style scoped>
  .about-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
}

.about-content {
  position: relative;
  padding: 40px 20px;
  border-radius: 16px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  text-indent: 2em;
  background-color: #fff;
  color: #333;
}

.about-content:before {
  content: "";
  display: block;
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 32px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transform: rotateZ(45deg);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.about-content h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: #ff6f61;
}

.about-content p {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
  </style>
  