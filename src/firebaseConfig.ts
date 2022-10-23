import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
const config = {
  apiKey: "AIzaSyBGSnz95KrcyW5w6YO8p_iJAfalGb8Jr_4",
  authDomain: "omomuro-dev.firebaseapp.com",
  projectId: "omomuro-dev",
  storageBucket: "omomuro-dev.appspot.com",
  messagingSenderId: "676406123871",
  appId: "1:676406123871:web:18e24f922e5772ddc02aea",
  measurementId: "G-7J8CT114L4"
}
export const app = initializeApp(config)
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
