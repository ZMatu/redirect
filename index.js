const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const { ip, port } = req.query;

  if (ip && port) {
    const connectUrl = `steam://connect/${ip}:${port}`;
    res.redirect(connectUrl);
  } else {
    res.status(400).send('Invalid address');
  }
});

const PORT = 3000; // Cambia este puerto según lo necesites
app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
