<!-- <template>
    <div class="container">
      <div class="card-body">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
          <div class="input-wrapper">
            <label for="name">Nombre:</label>
            <input v-model="name" id="name" type="text" placeholder="Nombre" required />
          </div>
          <div class="input-wrapper">
            <label for="email">Email:</label>
            <input v-model="email" id="email" type="email" placeholder="Correo electronico" required />
          </div>
          <div class="input-wrapper">
            <label for="password">Contraseña:</label>
            <input v-model="password" id="password" type="password" placeholder="Contraseña" required minlength="6" />
          </div>
          <button type="submit" @click="handleLogin">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import router from '../router/router';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  
  const handleLogin = () => {
    if (!name.value || !email.value || !password.value) {
      alert('All fields are required.');
      return;
    }

    console.log('Nombre:', name.value);
    console.log('Email:', email.value);
    console.log('Contraseña:', password.value);

    router.push('/');
  };

 
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #1c1c1c, #333); 
  }
  
  .card-body {
    width: 100%;
    max-width: 200px; 
    padding: 40px;
    background-color: #222;
    border-radius: 10px; 
    border: 1px solid #444;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
    color: #fff;
  }
  
  h1 {
    font-size: 1.5em; 
    margin-bottom: 20px;
    text-align: center; 
  }
  
  .input-wrapper {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #ccc; 
  }
  
  input {
    width: 100%;
    padding: 12px;
    background-color: #333;
    color: #fff;
    border: 1px solid #4CAF50;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease; 
  }
  
  input::placeholder {
    color: #aaa; 
  }
  
  input:focus {
    border-color: #00ff00;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: #00ff00;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease; 
  }
  
  button:hover {
    background-color: #00cc00; 
  }
  </style>
  
   -->


<template>

  <h1>Esta es la pagina de login</h1>
 <router-link to="/register"><button type="button">Registrate</button> </router-link>


</template>

<style scoped>
h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    background: linear-gradient(to right, #1c1c1c, #333); 
  }
button {
    width: 100%;
    padding: 12px;
    background-color: #00ff00;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease; 
  }
  
  button:hover {
    background-color: #00cc00; 
  }
</style>

