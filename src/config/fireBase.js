import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCUktM7JLnzb3UJyTLxv6HKiHUzW3R82EI",
    authDomain: "fotosclase-d1f78.firebaseapp.com",
    projectId: "fotosclase-d1f78",
    storageBucket: "fotosclase-d1f78.appspot.com",
    messagingSenderId: "474591392219",
    appId: "1:474591392219:web:ef6d6181ee43962899b7fe"
  };


const firebaseApp= initializeApp(firebaseConfig);
export const storage= getStorage(firebaseApp);