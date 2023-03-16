function shuffleMusicas(musicasTocadas) {

          let retornoOrdenado = [];
        
          for(let i = 0; musicasTocadas.length > 0; i++) {
             if(i % 2 == 0){
              retornoOrdenado.push(Math.max(...musicasTocadas));
              let maior = musicasTocadas.indexOf(Math.max(...musicasTocadas));
              musicasTocadas.splice(maior, 1);
            }else{
              retornoOrdenado.push(Math.min(...musicasTocadas));
              let menor = musicasTocadas.indexOf(Math.min(...musicasTocadas));
              musicasTocadas.splice(menor, 1);
            }
           
          }
        
          return retornoOrdenado
         
}