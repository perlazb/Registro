<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const name = ref('');
    const errorName = ref(false);
    const lastname = ref('');
    const errorLastname = ref(false);
    const year = ref('');
    const errorYear = ref(false);
    const phone = ref('');
    const errorPhone = ref(false);
    const address = ref('');
    const errorAddress = ref(false);
    const email = ref('');
    const errorEmail = ref(false);
    const datosRegistrados = ref(null);

     const isValidEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };
    
    const validateData = () => {
      let isValid = true;

      
      errorName.value = false;
      errorLastname.value = false;
      errorYear.value = false;
      errorPhone.value = false;
      errorAddress.value = false;
      errorEmail.value = false;

      if (name.value === '') {
        isValid = false;
        errorName.value = true;
      }

      if (lastname.value === '') {
        isValid = false;
        errorLastname.value = true;
      }

      if (year.value === '') {
        isValid = false;
        errorYear.value = true;
      }

      if (phone.value.length !== 10 || isNaN(phone.value)) {
        isValid = false;
        errorPhone.value = true;
      }

      if (address.value === '') {
        isValid = false;
        errorAddress.value = true;
      }

      if (!isValidEmail(email.value)) {
        isValid = false;
        errorEmail.value = true;
      }

      return isValid;
    };

    const register = () => {
  const isValid = validateData();

  if (isValid) {
    datosRegistrados.value = {
      nombre: name.value,
      apellido: lastname.value,
      fechaNacimiento: year.value,
      telefono: phone.value,
      direccion: address.value,
      correo: email.value,
    };
    console.log('Registrado');
  }
};

    return {
      name,
      errorName,
      lastname,
      errorLastname,
      year,
      errorYear,
      phone,
      errorPhone,
      address,
      errorAddress,
      email,
      errorEmail,
      register,
      datosRegistrados, 
    };
  },
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Registrate</h3>
            <hr class="hr">
            <div>
              <label for="name">Nombre</label>
              <input type="text" id="name" v-model="name" />
              <span v-if="errorName" class="error-message">El nombre es obligatorio</span>
            </div>
            <div>
              <label for="lastname">Apellido</label>
              <input type="text" id="lastname" v-model="lastname" />
              <span v-if="errorLastname" class="error-message">El apellido es obligatorio</span>
            </div>
            <div>
              <label for="year">Fecha de nacimiento</label>
              <input type="text" id="year" v-model="year" />
              <span v-if="errorYear" class="error-message">Fecha obligatoria</span>
            </div>
            <div>
              <label for="phone">Teléfono</label>
              <input type="text" id="phone" v-model="phone" />
              <span v-if="errorPhone" class="error-message">El teléfono debe tener 10 dígitos</span>
            </div>
            <div>
              <label for="address">Dirección</label>
              <input type="text" id="address" v-model="address" />
              <span v-if="errorAddress" class="error-message">La dirección es obligatoria</span>
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" id="email" v-model="email" />
              <span v-if="errorEmail" class="error-message">El correo electrónico no es válido</span>
            </div>
            <button @click="register">Registrate</button>            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="datosRegistrados" class="datos-registrados">
              <h4>Datos Registrados</h4>
              <p><strong>Nombre:</strong> {{ datosRegistrados.nombre }}</p>
              <p><strong>Apellido:</strong> {{ datosRegistrados.apellido }}</p>
              <p><strong>Fecha de Nacimiento:</strong> {{ datosRegistrados.fechaNacimiento }}</p>
              <p><strong>Teléfono:</strong> {{ datosRegistrados.telefono }}</p>
              <p><strong>Dirección:</strong> {{ datosRegistrados.direccion }}</p>
              <p><strong>Email:</strong> {{ datosRegistrados.correo }}</p>
            </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  color: #fff; 
}

.card-body {
  padding: 40px;
  background-color: #222; 
  border-radius: 8px;
  border: 1px solid #444; 
}

h3 {
  color: #fff;
  text-align: center;
}

.input-wrapper {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  background-color: #333; 
  color: #fff; 
  border: 1px solid #4CAF50;
  border-radius: 5px;
  outline: none;
}

input:focus {
  border-color: #00ff00; 
}

.error-message {
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #00ff00; 
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #000000b7; 
}

hr {
  border-top: 1px solid #444;
  margin-bottom: 20px;
}


</style>
