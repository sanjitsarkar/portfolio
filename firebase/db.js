import { CACHE_SIZE_UNLIMITED, initializeFirestore } from "firebase/firestore";
import app from "./firebase";
const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED,
});

export default db;
