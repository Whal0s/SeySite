import {storage} from "./init.js";
import addToCollection from "./DBexport.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function handleUpload(file) {
    // rename file
    let blob = file.slice(0, file.size, file['type']);
    let name = Date.now() + '_' + makeID(20) + '.' + file.name.split('.').pop();
    file = new File([blob], name, {type: file['type']});
    console.info("Uploading " + file.name);

    const storageRef = ref(storage, `/images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.then(() => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            addToCollection(file.name, url)
            return true
        });
    }).catch(console.error);
}

function makeID(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

export default handleUpload;