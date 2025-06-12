const express = require('express');
const path = require('path');
const multer = require('multer');
const mainRoutes = require('./routes/route');

const app = express();

// Set up multer for file uploads
app.use(express.static(path.join(__dirname, 'uploads')));
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to parse JSON request bodies
// app.use(express.json());

// Multer configuration for file uploads
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to the original file name
  }
});

const upload = multer({ storage: storage });

// Use the modular routes
app.use('/', mainRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
