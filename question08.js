function escolheTaxi(tf1,vqr1,tf2,vqr2) {
  
          const fixo1 = parseFloat(tf1);
          const fixo2= parseFloat(tf2);
          const taxa1= parseFloat(vqr1);
          const taxa2 = parseFloat(vqr2);
         
          if(taxa1 === taxa2 && fixo1 === fixo2){
            return "Tanto faz"
          } else {
           const difTaxas = taxa1 > taxa2 ? taxa1 - taxa2 : taxa2 - taxa1;
           const difFixos = fixo1 > fixo2 ? fixo1 - fixo2 : fixo2 - fixo1;
           const distanciaBruta = Math.round((difFixos/difTaxas) * 100) / 100
           const distancia = `${distanciaBruta}`.includes(".") ? distanciaBruta : distanciaBruta.toFixed(1)
           const menor = (distancia - 1) * taxa1 + fixo1 < (distancia - 1) * taxa2 + fixo2 ? "Empresa 1" : "Empresa 2"
           const tantoFaz = `Tanto faz quando a distância = ${distancia}`
           const maior = (distancia + 1) * taxa1 + fixo1 < (distancia + 1) * taxa2 + fixo2 ? "Empresa 1" : "Empresa 2"
           
           if(maior == menor){
             return maior
           }
           
           return(
             `${menor} quando a distância < ${distancia}, ${tantoFaz}, ${maior} quando a distância > ${distancia}`)
          }
         
         }