import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD3Zw72q1bsmyB_rRAQvbRQSYNyQ56P98Q",
  authDomain: "englishgemini-dc145.firebaseapp.com",
  databaseURL: "https://englishgemini-dc145-default-rtdb.firebaseio.com",
  projectId: "englishgemini-dc145",
  storageBucket: "englishgemini-dc145.appspot.com",
  messagingSenderId: "2622477593",
  appId: "1:2622477593:web:9103213304a9be6c0e2188",
  measurementId: "G-3GYGC4TJV4"
};

let app = null;

export const useInitializeFirebaseApp = () => {
    app = initializeApp(firebaseConfig);
}