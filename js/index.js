const lucroDoDia = preços => {
  let maiorGanho = -1;
  let compra = 0;
  let venda = 0;
  let troca = true;

  for (let i = 0; i < preços.length; i++) {
    if (troca) {
      compra = preços[i];
    }
    venda = preços[i + 1];

    if (venda < compra) {
      troca = true;
    } else {
      let lucroTemporario = venda - compra;
      if (lucroTemporario > maiorGanho) {
        maiorGanho = lucroTemporario
      }
      troca = false;
    }
  }
  return maiorGanho;
}

console.log(lucroDoDia([32, 46, 26, 38, 40, 48, 42]))
console.log(lucroDoDia([10, 18, 4, 5, 9, 6, 16, 12]))