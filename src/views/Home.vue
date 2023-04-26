<template>
  <div class="home">
    <Navbar />
    <MainCon/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MainCon from "@/components/main.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    MainCon,
    Footer
  }
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

</style>
