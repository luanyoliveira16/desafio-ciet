function ultimaParada(combustivel,consumo,postosDeGasolina) {
  
          const qtdeMaxPossivel = combustivel*consumo;
          let paradasPossiveis = [];
          let paradaMax = [];
        
          for(let i = 0; i < postosDeGasolina.length; i++){
             if(postosDeGasolina[i] <= qtdeMaxPossivel){
               paradasPossiveis.push(postosDeGasolina[i]);
             }
          }
          
          paradaMax = Math.max(...paradasPossiveis);
      
          return paradasPossiveis.length == 0 ? -1 : paradaMax;
          
}

console.log(ultimaParada(2,8,[2,15,22,11]));