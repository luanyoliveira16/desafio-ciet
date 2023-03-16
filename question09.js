function menorStringMaior(name) {
          let separaName = name.split("");
          let result = [];
          let current;
          let after;
        
          const str = (listaName) => {
            const trocaStr = (arr, c = []) => {
              if (arr.length === 0) {
                result.push(c.join(""));
              } else {
                for (let i = 0; i < arr.length; i++) {
                   current = arr.slice();
                   after = current.splice(i, 1);
                  trocaStr(current.slice(), c.concat(after));
                }
              }
            };
        
            trocaStr(listaName);
        
            return result;
          };
        
          const ordenaName = Array.from(new Set(str(separaName).sort()));
        
          const indexName = ordenaName.findIndex((i) => {
            return i === name;
          });
        
           if(ordenaName[indexName + 1]){
             return ordenaName[indexName + 1];
          }else{
             return 'sem resposta';
          }
}