import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDnImivISu9aNaK2smC4IoXXTT9nn8MB5A',
	authDomain: 'tasksproject-d93db.firebaseapp.com',
	databaseURL:
		'https://tasksproject-d93db-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'tasksproject-d93db',
	storageBucket: 'tasksproject-d93db.firebasestorage.app',
	messagingSenderId: '514595961215',
	appId: '1:514595961215:web:542fc331d7cb410624424a',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
