const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Department of Computer Science & Engineering (AI & ML)</h1>
    <h2>DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING</h2>
    <h3>(ARTIFICIAL INTELLIGENCE & MACHINE LEARNING)</h3>
    <p>Hello! Application deployed using GitHub Actions and Docker.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
