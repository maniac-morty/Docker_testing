const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5000;

// Set up storage for uploaded files using Multer
const storage = multer.diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Serve HTML page for file upload
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle file upload using POST
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const fileInfo = {
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size,
    filename: req.file.filename,
  };

  res.json({ message: 'File uploaded successfully', fileInfo });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
