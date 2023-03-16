function calculaTopOcorrenciasDeQueries(texto,queries,k) {
          const separaTexto = texto.split(' ');
          const retornoElementos = [];
          const kPrimeiros = [];
          let quantidadeElementos;
          let ordenaElementos = [];
          const result = [];
       
         for(let i = 0; i < queries.length; i++){
           quantidadeElementos = separaTexto.filter(element => element.indexOf(queries[i]) != -1).length;
           retornoElementos.push(quantidadeElementos + queries[i] )  
         } 
           
           ordenaElementos = retornoElementos.sort().reverse()
             
          for(let i = 0; i < ordenaElementos.length; i++) {
            for(let j = 0; j < queries.length; j++) {
              if(ordenaElementos[i].indexOf(queries[j]) != -1 ) {
                 kPrimeiros.push(queries[j])
              }
            }
            
       }
       
         for(let i = 0; i < kPrimeiros.length; i++){
            if(i < k){
              result.push(kPrimeiros[i])
            }
         }  
         return result
       
}

console.log(calculaTopOcorrenciasDeQueries("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",["a","em","i","el"],2))
       
       