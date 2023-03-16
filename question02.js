function retornaMenorEMaiorValorDeVendas(tickets) {
  const todosValores = [];
  let maior = [];
  let menor = [];
  const menorMaior = [];
  
  for(let i = 0; i < tickets.length; i++){
    for( let j = 0; j < tickets[i].length; j++){
      if(tickets[i][j] != 0 && tickets[i][j] >= 20 && tickets[i][j] <= 500){
        todosValores.push(tickets[i][j])
      }
    }
  }
  
  menor = Math.min(...todosValores);
  maior = Math.max(...todosValores);
  
  menorMaior.push(menor);
  menorMaior.push(maior);
  
  return menorMaior
}








console.log(retornaMenorEMaiorValorDeVendas([[200,100],[300]]))