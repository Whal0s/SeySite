import * as nsfwjs from 'nsfwjs';

const model = await nsfwjs.load('/model/');

async function predict(image) {
    const predictions = model.classify(image);

    return
}

async function isSafe(image) {

}

export {predict, isSafe};