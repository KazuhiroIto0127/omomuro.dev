import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";

const config = {
  apiKey: "AIzaSyBGSnz95KrcyW5w6YO8p_iJAfalGb8Jr_4",
  authDomain: "omomuro-dev.firebaseapp.com",
  projectId: "omomuro-dev",
  storageBucket: "omomuro-dev.appspot.com",
  messagingSenderId: "676406123871",
  appId: "1:676406123871:web:18e24f922e5772ddc02aea",
  measurementId: "G-7J8CT114L4"

}

if (import.meta.env.DEV) {
  //@ts-ignore
  window.self.FIREBASE_APPCHECK_DEBUG_TOKEN = true // デバッグ用文字列の生成
}
const app = initializeApp(config)
// const analytics = getAnalytics(app);

// App Checkでクライアントをチェックする
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Lf0LboiAAAAAI6vacIbXd5pPpFHwYMYBA4IOxTK'),
  isTokenAutoRefreshEnabled: true
});

export const db = getFirestore(app)
