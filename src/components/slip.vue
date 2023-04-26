<template>
    <div class="step-list">
      <div v-for="(step, index) in steps" :key="index" class="step">
        <div class="step-number">{{ index + 1 }}</div>
        <div class="step-description">{{ step }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      steps: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style>
  .step-list {
    display: flex;
    flex-direction: column;
  }
  
  .step {
    display: flex;
    margin-bottom: 10px;
  }
  
  .step-number {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }
  
  .step-description {
    font-size: 16px;
  }
  </style>
  