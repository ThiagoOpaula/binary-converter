function convert() {
  const binary = document.getElementById('binary').value;
  if (binary == "") return alert('Please, enter a binary number');
  binary.split('').map((char) => {
    if (char !== '0' && char !== '1') return alert('Please, enter a binary number');
  });
  var l = binary.length;
  if (l > 9) return alert('only 8 characters');
  const decimal = parseInt(binary,2);
  document.getElementById('decimal').value = decimal;
}

function convert2() {
  const decimal = document.getElementById('decimal').value;
  if (decimal == "") return alert('Please, enter a decimal number');
  var d = decimal.length;
  if (d > 16) return alert('only 16 characters');
  const ds = (decimal*1).toString(2);
  document.getElementById('binary').value = ds;
}