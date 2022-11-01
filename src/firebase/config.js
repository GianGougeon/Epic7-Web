import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER,
    appId: process.env.NEXT_PUBLIC_APP_ID,
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const uploadFile = async (file, heroFolder, imageName) => {
    // crear una carpeta por el id del heroe y guardar su imagen de build
    const storageRef = ref(
        storage,
        `/heros-builds-images/${heroFolder}/${imageName}`
    );
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
};
// Recibe la coleccion y devuelve un array con los datos
export const getCollection = async (collectionName) => {
    const colRef = collection(db, collectionName);
    const colSnap = await getDocs(colRef);
    const data = colSnap.docs.map((doc) => doc.data());
    return data;
};
