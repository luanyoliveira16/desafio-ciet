function calculaPorcentagemSorteio(assinante,minutosAssistidos) {
          const minParaHora =  [];
          const arredondandoHora = [];
          const probabilidade = [];
          const proporcionais = [];
          const retornoProbabilidade = [];
          
          for(let i= 0; i < minutosAssistidos.length; i++){
            if(minutosAssistidos[i] % 60 == 0){
               minParaHora.push(minutosAssistidos[i]/60);
           }else{
               minParaHora.push(minutosAssistidos[i]/60)
           }
          }
        
          for(let i = 0; i < minParaHora.length; i++){
             if(minParaHora[i] == 0){
              arredondandoHora.push(0)
             }
             const str = minParaHora[i].toString()
             if(str.indexOf('0') == 2 || str.indexOf('0') == 0){
               arredondandoHora.push(Math.round(minParaHora[i]) + 1)
             }else{
              arredondandoHora.push(Math.round(minParaHora[i]))
             }
         
            }
         
          for(let i= 0; i < assinante.length; i++){
            if(assinante[i] == true){
               proporcionais.push(arredondandoHora[i]*2)
               
            }else{
               proporcionais.push(arredondandoHora[i])
            }
            
         }
        
          const somaProporcionais = proporcionais.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          );
        
        
          for(let i= 0; i < proporcionais.length; i++){
            probabilidade.push((proporcionais[i]/somaProporcionais)*100)
            retornoProbabilidade.push(Math.round(probabilidade[i]))
            
        }
        
             return retornoProbabilidade
}

console.log(calculaPorcentagemSorteio([true,false],[60,120]))