const express = require('express');
const app = express();
const port = 3000;

function isNatural(n) {
  return /^[1-9]\d*$/.test(n);
}

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(x, y) {
  return (x * y) / gcd(x, y);
}

app.get('/sanatabdalov19_gmail_com', (req, res) => {
  const { x, y } = req.query;

  if (!isNatural(x) || !isNatural(y)) {
    return res.send('NaN');
  }

  const result = lcm(Number(x), Number(y));
  res.send(result.toString());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/sanatabdalov19_gmail_com`);
});
