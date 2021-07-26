import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

let config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
}

export const app = firebase.initializeApp(config)
export const storage = firebase.storage()
// export const firestore = firebase.firestore();

// export const add = (collection, data) => {
// 	data['createdAt'] = new Date().getTime();
// 	return firestore.collection(collection).add(data)
// 		.then(res => formatResult(200, 'Successfully created', res))
// 		.catch(e => formatResult(500, 'Something went wrong'))
// }
//
// /* Common code */
// function formatResult(status, message, data={}) {
// 	return { status, message, data };
// }

export default firebase;
