# 🎙️ Reliable Recording Chunking Pipeline

A fault-tolerant audio recording system built for reliable data capture and upload. This project ensures that no recording data is lost, even in cases of network failure or browser interruptions.

---

## 🚀 Overview

This application records audio in the browser, splits it into small chunks, stores them locally using the Origin Private File System (OPFS), and uploads them to a backend server.

The system is designed to handle failures gracefully by retrying uploads and ensuring consistency between client-side storage and server acknowledgment.

---

## ✨ Key Features

* 🎤 **Audio Recording** using MediaRecorder API
* 🧩 **Chunk-based Processing** (2-second intervals)
* 💾 **OPFS Storage** for durable client-side buffering
* ☁️ **Chunk Uploading** to backend server
* 🔁 **Retry Mechanism** for failed uploads
* ✅ **Acknowledgment System (ACK)** for tracking uploads
* ⚡ **Fault-Tolerant Design** (no silent data loss)

---

## 🏗️ Architecture

Client (Browser)

* Records audio and splits into chunks
* Stores chunks in OPFS before upload
* Uploads chunks to backend
* Retries failed uploads from local storage

Backend (Node.js Server)

* Receives chunks via API
* Stores/acknowledges received data

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (App Router), React, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Browser APIs:** MediaRecorder API, OPFS (Origin Private File System)
* **Tools:** Git, GitHub

---

## 📂 Project Structure

```
recording-assignment/
│
├── apps/
│   ├── web/        # Next.js frontend
│   └── server/     # Node.js backend
│
├── README.md
├── package.json
└── turbo.json
```

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR_USERNAME/recording-assignment.git
cd recording-assignment
```

---

### 2️⃣ Start Frontend

```
cd apps/web
npm install
npm run dev
```

---

### 3️⃣ Start Backend

Open a new terminal:

```
cd apps/server
npm install
node server.js
```

---

### 4️⃣ Run the App

* Open: http://localhost:3000
* Allow microphone access
* Click **Start Recording**
* Chunks will be recorded and uploaded

---

## 🧪 What This Project Demonstrates

* Building **fault-tolerant systems**
* Handling **network failures gracefully**
* Using **offline-first storage (OPFS)**
* Designing **reliable data pipelines**

---

## ⚠️ Notes

* Temporary recording chunks (`.webm`) are generated during runtime
* These files are excluded using `.gitignore`
* Database integration can be extended for persistent storage

---

## 🚀 Future Improvements

* Database integration for persistent chunk tracking
* UI improvements and upload progress indicators
* Real-time monitoring dashboard
* Support for video recording

---

## 👨‍💻 Author

**Rajat Chitransh**

---

## ⭐ Conclusion

This project focuses on reliability and consistency in data handling, making it suitable for real-world applications where data loss is unacceptable.

---
