// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY, //se importa la variable de entorno para poder usarla en el archivo .env y proteger la key de la api
  authDomain: "desafio-crud-3fa79.firebaseapp.com",
  projectId: "desafio-crud-3fa79",
  storageBucket: "desafio-crud-3fa79.appspot.com",
  messagingSenderId: "1025335899887",
  appId: "1:1025335899887:web:725223e4ca6ec4bcfb0d1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
