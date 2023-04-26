<template>
    <div class="carousel">
      <video  class="hero-video" controls>
        <source :src="videos[currentVideoIndex].src" type="video/mp4">
      </video>
      <button v-on:click="previousVideo">Previous</button>
      <button v-on:click="nextVideo">Next</button>
    </div> 

  
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentVideoIndex: 0,
        videos: [
        { src: '../public/berry.mp4' },
        { src: '../public/orange.mp4' },
        { src: '../public/coffee.mp4' }
        ]
      };
    },
    methods: {
      nextVideo() {
        if (this.currentVideoIndex === this.videos.length - 1) {
          this.currentVideoIndex = 0;
        } else {
          this.currentVideoIndex += 1;
        }
      },
      previousVideo() {
        if (this.currentVideoIndex === 0) {
          this.currentVideoIndex = this.videos.length - 1;
        } else {
          this.currentVideoIndex -= 1;
        }
      }
    }
  };
  </script>
  <style scoped>
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
  
</style>