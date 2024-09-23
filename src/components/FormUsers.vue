<template>
  <div class="formUsuarios">
    <h1>{{ usuarioEditando ? 'Editar Usuario' : 'Formulario de Usuarios' }}</h1>
    <form @submit.prevent="submitForm">
      <input v-model="nuevoUsuario" placeholder="Nuevo usuario" class="input" />
      <input v-model="nuevoEmail" placeholder="Nuevo email" class="input" />
      <button type="submit" class="btn">
        {{ usuarioEditando ? 'Actualizar Usuario' : 'Agregar Usuario' }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      nuevoUsuario: '',
      nuevoEmail: ''
    };
  },
  computed: {
    ...mapState(['usuarioEditando']),
  },
  methods: {
    ...mapActions(['addUser', 'updateUser']), 
    submitForm() {
      if (this.nuevoUsuario && this.nuevoEmail) {
        if (this.usuarioEditando) {
          // Actualizar usuario
          this.updateUser({
            id: this.usuarioEditando.id,
            nombre: this.nuevoUsuario,
            email: this.nuevoEmail
          });
        } else {
          // Agregar nuevo usuario
          this.addUser({
            nombre: this.nuevoUsuario,
            email: this.nuevoEmail
          });
        }
        // Limpiar los campos de entrada
        this.nuevoUsuario = '';
        this.nuevoEmail = '';
      }
    }
  },
  watch: { // "watch" permite observar cambios en propiedades específicas 
    usuarioEditando: {
      immediate: true,
      handler(newValor) { // "handler" es una función que se ejecuta cuando cambia el valor
        if (newValor) {
          this.nuevoUsuario = newValor.nombre;
          this.nuevoEmail = newValor.email;
        } else {
          // limpiar el formulario
          this.nuevoUsuario = '';
          this.nuevoEmail = '';
        }
      }
    }
  }
};
</script>
