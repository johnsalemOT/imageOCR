# imageOCR

> **Purpose:**  
> This project is designed to compare the performance and accuracy of two popular OCR (Optical Character Recognition) engines—**Tesseract** and **Google Vision**—by providing a web interface for users to upload images and extract text.

---

## 🚀 Features

- Upload images through a user-friendly browser interface.
- Choose between Tesseract OCR and Google Vision OCR for text extraction.
- Instantly view and compare the extracted text from both engines.
- Server-side rendering using `.ejs` templates.

---

## 🖼️ Demo

<!-- Add a screenshot here if available -->
<!-- ![Screenshot](./images/screenshot.png) -->

---

## 🛠️ How It Works

1. **Access the Web App:**  
   Open the server’s URL in your browser.

2. **Upload an Image:**  
   Click the upload button and select the image file you want to extract text from.

3. **Select OCR Engine:**  
   Choose between **Tesseract** or **Google Vision** from the options provided.

4. **Extract & Compare:**  
   The server processes the image using the selected OCR engine and displays the extracted text in the browser.

5. **Compare Results:**  
   For side-by-side comparison, you can run the same image through both engines and see which performs better for your needs.

---

## 🏗️ Project Structure

- `/views` – Contains `.ejs` templates for rendering HTML.
- `/uploads` – Stores user-uploaded images temporarily.
- `/routes` – Server routes handling upload, OCR processing, and results.
- `/public` – Static files (JS, CSS, images).

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/johnsalemOT/imageOCR.git
   cd imageOCR
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure API Keys:**  
   For Google Vision, you’ll need a Google Cloud API key. Set it in your environment variables or config file as described in the project documentation.

4. **Start the server:**
   ```bash
   node index.js
   ```

5. **Visit in your browser:**  
   Go to `http://localhost:PORT` (default is usually 3000).

---

## 📝 Terms of Use

- Uploaded images are processed temporarily and not stored permanently.
- Google Vision API usage may incur charges—ensure your API key is secured.
- This project is for educational and comparative purposes.

---

## 🤝 Contributions

Feel free to open issues or submit pull requests to improve the app or add more OCR engines!

---

## 📄 License

MIT License

---

<!-- Add logo here if available -->
<!-- ![Logo](./logo.png) -->
