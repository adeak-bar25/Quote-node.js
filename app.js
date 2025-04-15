// app.js
const express = require('express');
const app = express();
const port = 3000;

// Array kutipan absurd
const kutipan = [
  "Jangan pernah menyerah, kecuali ada diskon besar di toko online",
  "Kesuksesan itu seperti mie instan, cepat tapi tidak sehat",
  "Hidup itu seperti sepeda, kalau berhenti ya jatuh sih",
  "Jika kamu tidak bisa menjadi bintang, jadilah router WiFi, semua mencarimu",
  "Tidur siang itu tidak malas, itu menghemat energi",
  "Kalau tidak bisa membawa pulang piala, bawa pulang menu restoran saja",
  "Saya tidak malas, saya sedang menghemat tenaga",
  "Tersesat bukan berarti hilang, hanya saja GPS-nya error",
  "Teman sejati adalah yang meminjamkan charger tanpa diminta"
];

// Array emoji acak
const emojis = [
  "🤦‍♂️", "🐒", "🌮", "🤯", "🥳", "🦄", "🦥", "🍕", "🛌", 
  "🚀", "🦖", "⏰", "🧠", "🌈", "🤡", "🧟‍♂️", "🧙‍♂️", "🦸‍♀️"
];

// Siapkan templat HTML
const createMemePage = (quote, emoji) => `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meme Motivasi Absurd</title>
  <style>
    body { 
      background-color: #ff9966; 
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      flex-direction: column;
    }
    .meme-container {
      background: linear-gradient(45deg, #ff6b6b, #5f27cd);
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
      text-align: center;
      max-width: 500px;
    }
    .quote { 
      font-size: 24px; 
      color: white;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .emoji { font-size: 70px; }
    button {
      margin-top: 40px;
      padding: 12px 24px;
      background-color: #6c5ce7;
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    button:hover { transform: scale(1.05); }
  </style>
</head>
<body>
  <div class="meme-container">
    <div class="quote">"${quote}"</div>
    <div class="emoji">${emoji}</div>
  </div>
  <button onclick="window.location.reload()">Meme Baru!</button>
</body>
</html>
`;

// Route untuk halaman utama
app.get('/', (req, res) => {
  const randomQuote = kutipan[Math.floor(Math.random() * kutipan.length)];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  res.send(createMemePage(randomQuote, randomEmoji));
});

// Mulai server
app.listen(port, () => {
  console.log(`Aplikasi meme absurd berjalan di http://localhost:${port}`);
});