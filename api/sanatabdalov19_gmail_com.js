export default function handler(req, res) {
  const { x, y } = req.query;

  const isNatural = (n) => /^[1-9]\d*$/.test(n);

  if (!isNatural(x) || !isNatural(y)) {
    return res.status(200).send("NaN");
  }

  const gcd = (a, b) => {
    while (b) [a, b] = [b, a % b];
    return a;
  };

  const lcm = (a, b) => (a * b) / gcd(a, b);

  const result = lcm(Number(x), Number(y));
  res.status(200).send(result.toString());
}
