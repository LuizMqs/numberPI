function calculator() {

  let i = 1n;
  let x = 3n * 10n ** 120n;
  let pi = x;
  while (x > 0) {
    x = (x * i) / ((i + 1n) * 4n);
    pi += x / (i + 2n);
    i += 2n;
  }
  pi = pi / 10n ** 20n;
  let PI = pi + ""
  
  escreverPi(PI)
}

function escreverPi([first, ...rest]){
  let number = rest.join('')
  console.log(number)
  document.getElementById("result").innerHTML = first + "," + number;
}

document.getElementById("button").addEventListener("click", calculator);
