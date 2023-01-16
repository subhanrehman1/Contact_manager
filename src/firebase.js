import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCe8-IJKGUd-yXoYR0xQKMdSuIv5YsznDE",
//   authDomain: "fileuploads-be0db.firebaseapp.com",
//   projectId: "fileuploads-be0db",
//   storageBucket: "fileuploads-be0db.appspot.com",
//   messagingSenderId: "832032829361",
//   appId: "1:832032829361:web:f2079f619d4aad32ae9790",
// };
// const firebaseConfig = {
//     apiKey: "AIzaSyAKStFm5xGExO_sxSgutsZNdor7gUInejU",
//     authDomain: "contactavatar-683f0.firebaseapp.com",
//     projectId: "contactavatar-683f0",
//     storageBucket: "contactavatar-683f0.appspot.com",
//     messagingSenderId: "256261130437",
//     appId: "1:256261130437:web:42ff2eac39124dfd3448ac"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);




const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAKStFm5xGExO_sxSgutsZNdor7gUInejU",
 authDomain: "contactavatar-683f0.firebaseapp.com",
  projectId: "contactavatar-683f0",
 storageBucket: "contactavatar-683f0.appspot.com",
   messagingSenderId: "256261130437",
 appId: "1:256261130437:web:42ff2eac39124dfd3448ac"
});

const db = firebaseApp.firestore();
export default db;
