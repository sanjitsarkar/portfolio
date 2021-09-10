import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { CACHE_SIZE_UNLIMITED, initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  //...{
  apiKey: "AIzaSyCX1XcFsVZHjxDhIKwcM23DzQbBITBliKI",
  authDomain: "xanjitsarkar.firebaseapp.com",
  projectId: "xanjitsarkar",
  storageBucket: "xanjitsarkar.appspot.com",
  messagingSenderId: "518936243425",
  appId: "1:518936243425:web:8f05d436084bda538e5ba0",
  measurementId: "G-HRKZR75M3X",
};

const app = initializeApp(firebaseConfig);
// enableIndexedDbPersistence().catch((err) => {
//   if (err.code == "failed-precondition") {
//     // Multiple tabs open, persistence can only be enabled
//     // in one tab at a a time.
//     // ...
//   } else if (err.code == "unimplemented") {
//     // The current browser does not support all of the
//     // features required to enable persistence
//     // ...
//   }
// });
export const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED,
});

export const auth = getAuth(app);
export const storage = getStorage(app);
