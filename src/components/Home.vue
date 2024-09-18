<template>
    <div class="center-container">
      <h1><strong>Hola, Mundo</strong></h1>
     
    </div>
    <button @click="borrarLocalstore">borrar localstore</button>

    
  </template>
  
  <style scoped>
  .center-container {
    display: flex;
    justify-content: center; 
    align-items: center;  
    height: 95vh;           
    margin: 0;              
  }

  button {
    width: 10%;
    padding: 12px;
    background-color: #00ff00;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease; 
  }
  
  </style>

  <script>
  export default {
    methods: {
      borrarLocalstore() {
        localStorage.clear();
      },
    },
  };
  </script>
  