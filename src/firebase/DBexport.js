import { database } from './init.js'
import { collection, addDoc } from 'firebase/firestore'

export function addToCollection(filename, url) {
    const collectionRef = collection(database, 'images');

    const dataObject = {
        Name: filename,
        URL: url,
        date: Date.now(),
    }

    const docRef = addDoc(collectionRef, dataObject);

    console.log(docRef);
}

export default addToCollection;

