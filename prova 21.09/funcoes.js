function exe1(){
    // recuperar entrada de dados
    let metros = Number(document.getElementById("metros").value)
    let garagens = Number(document.getElementById("garagens").value)
    let andar = Number(document.getElementById("andar").value)
    let posicao = document.getElementById("posicao").value
    let resultado
    let v1 = 0
    let ac1 = 0
    let ac2 = 0
    let ValorT
    if(metros <= 80){
        switch(garagens){
            case 1: v1 = 300000
                  break
            case 2: v1 = 320000
                  break
            case 3: v1 = 340000
            break
        }
    }
    else if((metros > 80) && (metros <= 120)){
        switch(garagens){
            case 1: v1 = 400000
                  break
            case 2: v1 = 420000
                  break
            case 3: v1 = 440000
                  break
        }
    }
    else if (metros > 120){
        switch(garagens){
            case 1: v1 = 500000
                  break
            case 2: v1 = 520000
                  break
            case 3: v1 = 540000
                  break
        }
    }
    switch(andar){
        case 1: ac1 = 10000
              break
        case 2: ac1 = 20000
              break
        case 3: ac1 = 30000
              break
    }
    switch(posicao){
        case 'M': ac2 = v1 * (5/100)
              break
        case 'T': ac2 = v1 * (8/100)
              break
    }
    ValorT = v1 + ac1 + ac2
    
    resultado = `O valor total do apartamento é R$ ${ValorT} `
    document.getElementById("resultado").innerHTML = resultado
}
function exe2(){
    let contador = 0
    let voto 
    let soma1 = 0
    let soma2 = 0
    let soma3 = 0
    let soma4 = 0
    let soma5 = 0 
    let resultado
    let porcentagem   
    let votos
    while (voto != 0) {
        voto = Number(prompt(`Informe o seu voto \n1- entrega  pelo teams \n2 - entrega em papel \n3- Entrega apenas por whatsapp \n4- entrega apenas por email \n5- Tanto faz \nou digite 0 para parar`))
            contador++
        switch(voto){
            case 0: alert(`finalizar programa`)
            case 1: soma1++
                   break
            case 2: soma2++
                   break
            case 3: soma3++
                   break
            case 4: soma4++
                   break
            case 5: soma5++
                   break
            default: alert('voto invalido')
        }
    }
    votos = contador - 1
    porcentagem = (soma5 * 100) / votos
    alert(`O total de votos para a opcao \n5: ${soma5} \n4: ${soma4} \n3: ${soma3} \n2: ${soma2} \n1: ${soma1 - 1} \nA porcentagem de votos para "tanto faz": ${porcentagem}%`)
}
function exe3(){
    // recuperar entrada de dados
    let metros = Number(document.getElementById("metros").value)
    let garagens = Number(document.getElementById("garagens").value)
    let andar = Number(document.getElementById("andar").value)
    let posicao = document.getElementById("posicao").value
    let resultado
    let v1 = 0
    let ac1 = 0
    let ac2 = 0
    let ValorT 

    switch (garagens) {
        case 1: 
          if(metros <= 80){
              v1 = 300000
          }
          else if((metros > 80) && (metros <=120)){
              v1 = 400000
          }
          else{
              v1 = 500000
          }
            break;
        case 2:
            if(metros <=80){
                v1 = 320000
            }
            else if ((metros > 80) && (metros <=120)){
                v1 = 420000
            }
            else{
                v1 = 520000
            }
            break
        case 3:
            if(metros<=80){
                 v1 = 340000
            }
            else if ((metros > 80) && (metros <= 120)){
                v1 = 440000
            }
            else{
                v1 = 540000
            }
    }
    switch(andar){
        case 1: ac1 = 10000
              break
        case 2: ac1 = 20000
              break
        case 3: ac1 = 30000
              break
    }
    switch(posicao){
        case 'M': ac2 = v1 * (5/100)
              break
        case 'T': ac2 = v1 * (8/100)
              break
    }
    ValorT = v1 + ac1 + ac2
    
    resultado = `O valor total do apartamento é R$ ${ValorT} `
    document.getElementById("resultado").innerHTML = resultado
}