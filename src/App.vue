<template>
  <div id="app">
    <FormUsers />
    <ListUsers />
  </div>
</template>

<script>
import FormUsers from './components/FormUsers.vue';
import ListUsers from './components/ListUsers.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    FormUsers,
    ListUsers
  },
  created() {
    this.fetchUsuarios(); 
  },
  methods: {
    ...mapActions(['fetchUsuarios']),
  }
};
</script>

<style>

</style>
