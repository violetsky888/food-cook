<template>
    <div class="card">
      <h2>{{ title }}</h2>
      <div>{{ content }}</div>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .card {
    border: 1px solid #ccc;
    padding: 1em;
    margin: 1em;
  }
  </style>
  