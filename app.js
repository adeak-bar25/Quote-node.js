// app.js
const express = require('express');
const app = express();
const port = 3000;

// mengakses file pada folder public
app.use(express.static('public'));

// Array kutipan absurd
const quotes = [
  { quote: "Kehidupan adalah sebuah perjalanan, bukan tujuan.",
    author: "Ralph Waldo Emerson",
    info: "Penulis dan filsuf asal Amerika",
  },
  { quote: "Semakin tinggi kita terbang, semakin kecil kita terlihat bagi mereka yang tidak bisa terbang.",
    author: "Friedrich Nietzsche",
    info: "Filsuf asal Jerman",
  },
  { quote: "Gantungkan cita-cita mu setinggi langit! Bermimpilah setinggi langit. Jika engkau jatuh, engkau akan jatuh di antara bintang-bintang.",
    author: "Ir. Soekarno",
    info: "Presiden pertama Republik Indonesia",
  },
  { quote: "Keberhasilan bukanlah milik orang yang pintar. Keberhasilan adalah kepunyaan mereka yang senantiasa berusaha.",
    author: "B.J. Habibie",
    info: "Presiden ke-3 Republik Indonesia",
  },
  { quote: "Jangan tinggalkan apa pun untuk hari esok untuk sesuatu yang dapat dikerjakan hari ini.",
    author: "Abraham Lincoln",
    info: "Presiden ke-16 Amerika Serikat.",
  },
  { quote: "Hidup itu seperti mengendarai sepeda. Untuk menjaga keseimbangan, kamu harus terus melaju.",
    author: "Albert Einstein",
    info: "Fisikawan kelahiran Jerman",
  },
  { quote: "Untuk setiap tindakan selalu ada reaksi yang setara atau berlawanan",
    author: "Isaac Newton",
    info: "Ahli fisika asal Inggris",
  },
  { quote: "Kekuatan tidak datang dari pengetahuan yang disimpan tetapi dari pengetahuan yang dibagikan",
    author: "Bill Gates",
    info: "Pendiri Microsoft Corp",
  },
  { quote: "Sesuatu akan selalu tampak mustahil sampai itu selesai dilakukan",
    author: "Nelson Mandela",
    info: "Prediden Ke-9 Afrika Selatan",
  },
  { quote: "Masa depan bergantung pada apa yang kamu lakukan hari ini.",
    author: "Mahatma Gandhi",
    info: "Politikus asal India",
  },
]

// Array emoji acak
const emojis = [
  "🤦‍♂️", "🐒", "🌮", "🤯", "🥳", "🦄", "🦥", "🍕", "🛌", 
  "🚀", "🦖", "⏰", "🧠", "🌈", "🤡", "🧟‍♂️", "🧙‍♂️", "🦸‍♀️"
];

// Siapkan templat HTML
const createWebPage = (quote, author, info) => `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quote Hari Ini</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="container">
      <div id="quote-wrapper">
        <div id="title">Kata Kata Hari Ini!</div>
        <div id="quote-symbol"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.7 22.3">
            <path d="M49.7,37.4v5.7c-2.07,0-3.43.43-4.1,1.3s-1,2.47-1,4.8h5.1V59.7h-11V51q0-7,2.55-10.3T49.7,37.4Zm14.7,0v5.7c-2.07,0-3.43.43-4.1,1.3s-1,2.47-1,4.8h5.1V59.7h-11V51q0-7,2.55-10.3T64.4,37.4Z" transform="translate(-38.7 -37.4)" style="fill: #231f20"/>
          </svg>
          </div>
        <div id="quote">${quote}</div>
        <div id="author">
            <div id="author-name">${author}</div>
            <div id="author-info">(${info})</div>
        </div>
        <div id="bottom">Dibuat dengan ❤️ oleh Ade Akbar Magri Dinata </div>
    </div>
    
    <!-- <div class="quote">"${quote}"</div> -->
  </div>
  <button onclick="window.location.reload()">Quote Baru</button>
</body>
</html>
`;

// Route untuk halaman utama
app.get('/', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.send(createWebPage(randomQuote.quote, randomQuote.author, randomQuote.info));
});

// Mulai server
app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});