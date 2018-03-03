exports.list_all_bills = (req, res) => {
  let amount = req.params.amount;
  //$ 100,00; $ 50,00; $ 20,00 e $ 10,00
  let availableNotes = [100, 50, 20, 10];
  let resultNotes = [];
  let index = 0;
  let rest = amount % availableNotes[index];
  let quo = Math.floor(amount / availableNotes[index]);
  console.log(quo)
  while ( rest > 0 || quo > 1){
    rest = amount % availableNotes[index];
    quo = Math.floor(amount / availableNotes[index]);
    console.log("bill ", availableNotes[index]);
    console.log("rest ", rest);
    console.log("quo ", quo);
    for (let j = 0; j < quo; j++) {
      resultNotes.push(availableNotes[index]);
    }
    index++;
    amount = rest;
  }
  if (amount > 0 ) {
    resultNotes.push(availableNotes[index]);
  }
  res.json(resultNotes);
  console.log(resultNotes);
};