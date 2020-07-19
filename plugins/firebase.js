// Your web app's Firebase configuration
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: '...',
  authDomain: '...',
  databaseURL: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
  appId: '...',
  measurementId: '...',
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
