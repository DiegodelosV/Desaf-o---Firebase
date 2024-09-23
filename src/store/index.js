import { createStore } from 'vuex';
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc //actualiza la informacion de la db
} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

export default createStore({
  state: {
    usuarios: [],
    usuarioEditando: null
  },
  mutations: {
    setUsuarios(state, usuarios) {
      state.usuarios = usuarios;
    },
    setUsuarioEditando(state, usuario) {
      state.usuarioEditando = usuario;
    }
  },
  actions: {
    fetchUsuarios({ commit }) {
      const db = getFirestore(firebaseApp);
      const usuariosRef = collection(db, 'usuarios');
      onSnapshot(usuariosRef, (snapshot) => {
        const usuarios = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        commit('setUsuarios', usuarios);
      });
    },
    async addUser({ dispatch }, usuario) {
      const db = getFirestore(firebaseApp);
      const usuariosRef = collection(db, 'usuarios');
      await addDoc(usuariosRef, usuario);
    },
    startEditing({ commit }, usuario) {
      commit('setUsuarioEditando', usuario); 
    },
    async updateUser({ commit }, usuarioActualizado) {
      const db = getFirestore(firebaseApp);
      const userDoc = doc(db, 'usuarios', usuarioActualizado.id);
      await updateDoc(userDoc, {
        nombre: usuarioActualizado.nombre,
        email: usuarioActualizado.email
      });
      commit('setUsuarioEditando', null); 
    },
    async removeUser({ commit }, id) {
      const db = getFirestore(firebaseApp);
      const userDoc = doc(db, 'usuarios', id);
      await deleteDoc(userDoc);
    }
  },
  getters: {
    usuarios: (state) => state.usuarios,
    usuarioEditando: (state) => state.usuarioEditando
  }
});
