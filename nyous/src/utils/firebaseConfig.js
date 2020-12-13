import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDbBMgHVwNDAgsiaMPf27ymsukZcTF62IA",
    authDomain: "nyous-24fc7.firebaseapp.com",
    projectId: "nyous-24fc7",
    storageBucket: "nyous-24fc7.appspot.com",
    messagingSenderId: "209208511265",
    appId: "1:209208511265:web:8dd94275ebedcb7f548c60"
  };

  const app = firebase.initializeApp(firebaseConfig);

  // Exportando o firestore para ser utilizado como componente
  export const db = app.firestore();

  export default firebaseConfig;