import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAGrVuIL88QHI-OtYfN13HpxCUlqs8xBeM",
    authDomain: "codepen-8f098.firebaseapp.com",
    projectId: "codepen-8f098",
    storageBucket: "codepen-8f098.appspot.com",
    messagingSenderId: "930375163208",
    appId: "1:930375163208:web:deebafa4000788a441277d"
  };

  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app);