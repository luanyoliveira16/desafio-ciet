function calculaNumeroDaSenha(senha) {
          let count0 = [];
          let count1 = [];
          const arr = [];
          const result = [];
        
          for(let i = 0; i < senha.length; i++) {
            let quantidadeElementos = senha.map(function(item){
                return item[i]
            })  
          arr.push(quantidadeElementos)
        }
        
          for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i].length; j++) {
             if(arr[i][j] == 0){
               count0.push(arr[i][j]);
             }else{
              count1.push(arr[i][j]);
             }
            
          }
          
            if(count0.length > count1.length){
              result.push(0)
            }else if(count0.length == count1.length){
              result.push(1)
            }else{
             result.push(1)
            }
            count0 = [];
            count1 = [];
         }
        
          let dec = 0;
          for (let c = 0; c < result.length; c++) dec += Math.pow(2, c) * result[result.length - c - 1]; 
          return dec;        
}
        
console.log(calculaNumeroDaSenha(["0110100000","1001011111","1110001010","0111010101","0011100110","1010011001","1101100100","1011010100","1001100111","1000011000"]))