import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8B1zgrSsXI6l6fpDK5nHZYJkJ3P2Kz8Q",
  authDomain: "gamingstore-b2023.firebaseapp.com",
  projectId: "gamingstore-b2023",
  storageBucket: "gamingstore-b2023.appspot.com",
  messagingSenderId: "234238765010",
  appId: "1:234238765010:web:fa07d7b5336e96c63aca0b",
  measurementId: "G-61ZS9XSFER",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
