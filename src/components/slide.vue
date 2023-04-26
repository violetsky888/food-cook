<template>
    <div>
      <img :src="currentSlideUrl" />
      <button @click="prevSlide">Previous</button>
      <button @click="nextSlide">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slides: [
          'https://example.com/slide1.jpg',
          'https://example.com/slide2.jpg',
          'https://example.com/slide3.jpg',
        ],
        currentIndex: 0,
      };
    },
    computed: {
      currentSlideUrl() {
        return this.slides[this.currentIndex];
      },
    },
    methods: {
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      },
    },
  };
  </script>
  