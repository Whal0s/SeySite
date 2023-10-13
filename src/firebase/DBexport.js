import database from './init.js'
import { collection, addDoc } from 'firebase/firestore'

export function addToCollection() {
    const collectionRef = collection(database, 'images')

    const dataObject = {
        val1: "bye",
        val2: "bobby"
    }

    const docRef = addDoc(collectionRef, dataObject)

    console.log(docRef)
}



