exports.getInputForm = (req, res) => {
  res.render('calc-input-form');
};

exports.calculateResults = (req, res) => {
  const amount = Number.parseInt(req.body.amount);
  const rate = Number.parseFloat(req.body.rate);
  const years = Number.parseInt(req.body.years);

  let balance = amount; // 50000
  let monthlyInterestRate = ((rate / 100) / 12);
  let results = [];

  for (let i = 1; i <= years * 12; i++) {
    let interest = monthlyInterestRate * balance; // 41.67
    balance = balance + interest; // 50041.67
    results.push({month: i, interest: interest.toFixed(2), balance: balance.toFixed(2)});
  }

  console.log(results);
  res.render('results', { results: results });
};
