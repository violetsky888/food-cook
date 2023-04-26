<template>
    <div class="recipe-review">
      <h2>User Reviews</h2>
  
      <div class="review-form">
        <h3>Add a review</h3>
  
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name:</label>
            <input v-model="name" type="text" id="name" required />
          </div>
  
          <div class="form-group">
            <label for="rating">Rating (out of 5):</label>
            <select v-model="rating" id="rating" required>
              <option value="" disabled>Select rating</option>
              <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>
  
          <div class="form-group">
            <label for="comment">Comment:</label>
            <textarea v-model="comment" id="comment" required></textarea>
          </div>
  
          <button class="btn btn-primary" type="submit">Submit Review</button>
        </form>
      </div>
  
      <div class="reviews-list">
        <h3>Reviews:</h3>
        <ul>
          <li v-for="(review, index) in reviews" :key="index">
            <p><strong>{{ review.name }}</strong> - {{ review.rating }}/5</p>
            <p>{{ review.comment }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        rating: '',
        comment: '',
        reviews: [],
      };
    },
    methods: {
      handleSubmit() {
        const newReview = {
          name: this.name,
          rating: Number(this.rating),
          comment: this.comment,
        };
  
        this.reviews.push(newReview);
        this.name = '';
        this.rating = '';
        this.comment = '';
      },
    },
  };
  </script>
  
  <style lang="scss">
  .recipe-review {
    .review-form {
      margin-bottom: 30px;
  
      h3 {
        margin-bottom: 10px;
      }
  
      form {
        display: flex;
        flex-direction: column;
  
        .form-group {
          margin-bottom: 20px;
  
          label {
            display: block;
            margin-bottom: 5px;
          }
  
          input,
          textarea,
          select {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border-radius: 5px;
          }
        }
  
        button {
          width: fit-content;
          margin-top: 10px;
          align-self: flex-start;
        }
      }
    }
  
    .reviews-list {
      h3 {
        margin-bottom: 10px;
      }
    }
}  