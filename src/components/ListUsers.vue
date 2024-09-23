<template>
  <ul class="listaUsuarios">
    <li v-for="usuario in usuarios" :key="usuario.id" class="usuario">
      <div class="lista">
        {{ usuario.nombre }} - {{ usuario.email }}
      </div>
      <div class="AccionesBotones">
        <button @click="startEditing(usuario)" class="btn edit">Editar</button>
        <button @click="removeUser(usuario.id)" class="btn delete">Eliminar</button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['usuarios'])
  },
  methods: {
    ...mapActions(['removeUser', 'startEditing'])
  }
};
</script>

