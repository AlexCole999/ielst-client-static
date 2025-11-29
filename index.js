const express = require('express');
const path = require('path');
const app = express();
const port = 3011;

// Указываем Express отдавать статические файлы из папки dist
app.use(express.static(path.join(__dirname, 'dist')));

console.log(path.join(__dirname, 'dist', 'index.html'))
// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});