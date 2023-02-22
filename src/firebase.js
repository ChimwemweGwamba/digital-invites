import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD_HUFMORVCfa9dI0zZYM-qtpcIP4hZeow",
  authDomain: "phil-chanda-wedding.firebaseapp.com",
  databaseURL:
    "https://phil-chanda-wedding-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "phil-chanda-wedding",
  storageBucket: "phil-chanda-wedding.appspot.com",
  messagingSenderId: "61444586014",
  appId: "1:61444586014:web:2f3d18d96e90512aea4c0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const reference = ref(db, "guests/" + 0);


function createGuest() {
  set(reference, {
    name: "Tom",
    phoneNumber: 260999,
    response: true,
    entry_status: true,
    church_service: true,
  });
}

export { reference };
