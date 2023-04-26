<template>
    <div class="rating-comment">
      <div class="ratings">
        <div v-for="(star, index) in stars" :key="index" 
          :class="['star', { filled: index < rating }]" 
          @click="setRating(index + 1)">
          <i class="fa fa-star"></i>
        </div>
      </div>
      <textarea v-model="comment" placeholder="Leave a comment"></textarea>
      <button @click="submit">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rating: 0,
        comment: ''
      };
    },
    computed: {
      stars() {
        return Array(5).fill(null);
      }
    },
    methods: {
      setRating(rating) {
        this.rating = rating;
      },
      submit() {
        // Submit the rating and comment to the server
        console.log(`Rating: ${this.rating}`);
        console.log(`Comment: ${this.comment}`);
      }
    }
  }
  </script>
  
  <style>
  .rating-comment {
    display: flex;
    flex-direction: column;
  }
  
  .ratings {
    display: flex;
    margin-bottom: 10px;
  }
  
  .star {
    font-size: 24px;
    cursor: pointer;
    color: #ccc;
    transition: color 0.2s ease-out;
  }
  
  .star.filled {
    color: #f6b93b;
  }
  
  textarea {
    height: 100px;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 10px 0;
  }
  
  button {
    padding: 10px;
    background-color: #f6b93b;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>
  