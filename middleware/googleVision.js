const vision = require('@google-cloud/vision');
const path = require('path');

class GoogleVision {
    constructor() {
        const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
        // Resolve absolute path (important when you run from different locations)
        const absolutePath = path.resolve(credentialsPath);

        // Load the Google Cloud credentials from the environment variable
        this.client = new vision.ImageAnnotatorClient({
            keyFilename: absolutePath
        });
    }

    async extractText(imagePath){
        try{
            const [result] = await this.client.documentTextDetection(imagePath);
            const fullText = result?.fullTextAnnotation?.text;
            const confidence = result?.fullTextAnnotation?.pages[0]?.confidence || null;
            if (!fullText) {
                throw new Error('No text found in the image');
            }
            
            return {
                text: fullText,
                confidence: confidence
            };

        } catch (error) {
            console.error('Google Vision API Error:', error);
            throw new Error('Failed to extract text from image.');
        }
    }
}

module.exports = { GoogleVision };