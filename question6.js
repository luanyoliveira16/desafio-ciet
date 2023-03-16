function checaNumeroEscondido(numero,numeroOculto) {

          const transformStr = numero.toString().split('');
          const transformOcultoStr = numeroOculto.toString().split('');
          const teste = [];
        
          for (let i = 0; i < transformStr.length; i++){
             for(let j = 0; j < transformOcultoStr.length; j++){
                if(transformStr[i] == transformOcultoStr[j]){
                  teste.push(transformOcultoStr[j]);
                }
             }
          } 
           return teste.length >= transformOcultoStr.length ? true : false;
        }
        
console.log(checaNumeroEscondido(12345,235))        
