import firebase from 'firebase/app'
import 'firebase/firestore'
import API_KEY from './config'

const firebaseConfig = firebase.initializeApp({
	apiKey: API_KEY,
	authDomain: 'node-app-ba90c.firebaseapp.com',
	databaseURL: 'https://node-app-ba90c.firebaseio.com',
	projectId: 'node-app-ba90c',
	storageBucket: 'node-app-ba90c.appspot.com',
	messagingSenderId: '797191087584',
	appId: '1:797191087584:web:6d4619f3c22e46b137f785',
})

export { firebaseConfig as firebase }
