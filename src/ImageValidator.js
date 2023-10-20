import {load as loadModel} from "nsfwjs";

const model = await loadModel('/model/', {
    type: 'graph'
});

async function predict(image) {
    if (image instanceof File) {
        image = await convertImageFileToImageData(image)
    }

    const predictions = await model.classify(image);

    console.info('Predictions: ', predictions)

    let flagged = []

    for (let {className, probability} of predictions.filter(item => ["Hentai", "Porn", "Sexy"].includes(item.className))) {
        if (probability >= 0.2) flagged.push(className);
    }

    return flagged;
}

function convertImageFileToImageData(imageFile) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = function () {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            resolve(imageData);
        };

        img.onerror = function () {
            reject(new Error('Failed to load the image.'));
        };

        img.src = URL.createObjectURL(imageFile);
    });
}


export {predict, convertImageFileToImageData}