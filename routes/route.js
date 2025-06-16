const express = require('express');
const path = require('path');
const upload = require('../middleware/upload');
const tesseract = require("node-tesseract-ocr")
const sharp = require('sharp');
const fs = require('fs');
const { GoogleVision } = require('../middleware/googleVision');

const router = express.Router();

// Route to serve index.html
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Serve upload page
router.get('/upload', (req, res) => {
  res.render('upload', { title: 'Upload File' });
});

// Get the uploaded file
router.post('/extract/tesseract', upload.single('file'), async (req, res) => {
  try {
    const config = {
      lang: "eng",
      oem: 3,
      psm: 6,
      tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789:/-.()&, "
    };
    // Perform OCR on the preprocessed image
    const text = await tesseract.recognize(req.file.path, config);
    res.send({ result: text });

  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing the image: ' + error.message);
  }
});

router.post('/extract/googlevision', upload.single('file'), async (req, res) => {
  try {
 
    const vision = new GoogleVision();
    // Perform OCR using Google Vision API
    const text = await vision.extractText(req.file.path);
    
    res.send({ result: text.text });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing the image: ' + error.message);
  }
} );

// API health check route
router.get('/api/health', (req, res) => {
  res.json({ status: 'Server is healthy', timestamp: new Date() });
});

module.exports = router;
