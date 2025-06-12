const express = require('express');
const path = require('path');

const router = express.Router();

// Route to serve index.html
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Serve upload page
router.get('/upload', (req, res) => {
  res.render('upload', { title: 'Upload File' });
});

router.post('/getTextFrmImg', (req, res) => {
    console.log('Received request to get text from image', req.file.path);
});

// API health check route
router.get('/api/health', (req, res) => {
  res.json({ status: 'Server is healthy', timestamp: new Date() });
});

module.exports = router;
