function exe1(){
    let opcao
    let vetPessoas = []
    let vetImoveis = []
    do {
        opcao = Number(prompt("Informe \n1. Cadastrar pessoas \n2. Cadastrar imóvel \n3. Consultar valor total de imoveis \n4. CPF dono do imóvel mais caro \n5. Sair"))
        switch(opcao){
            case 1: let objeto1 = {
                        nome: prompt(`Informe o nome da pessoa`),
                        rg: Number(prompt(`Informe o RG da pessoa`)),  
                        cpf: Number(prompt(`Informe o cpf da pessoa`))     
                    }
                    let achou1 = false
                    for(let i=0;i<vetPessoas.length;i++){
                        if (vetPessoas[i].rg == objeto1.rg){
                            achou1 = true
                }
            }
            if (achou1) {
                alert(`Já existe uma pessoa com este rg`)
            }
            else {
                vetPessoas.push(objeto1) 
                alert(`Pessoa cadastrada com sucesso`)
        }
            let achou2 = false
                    for(let i=0;i<vetPessoas.length;i++){
                        if (vetPessoas[i].cpf== objeto1.cpf){
                            achou2 = true
                        }
                    }
            if (achou2) {
                alert(`Ja existe uma pessoa com este cpf`)
            }
            else{
                vetPessoas.push(objeto1)
                alert(`Pessoa cadastrada com sucesso`)
            }
            break
            case 2: let objeto2 = {
                imovel: prompt(`Informe o código do imóvel`),
                edereco: prompt(`Informe o endereço do imóvel`),
                tamanho: Number(prompt(`Informa o tamanho do imóvel`)),
                tipo: prompt(`Informe o tipo de imóvel: `),
                valor: Number(prompt(`Informe o valor do imóvel`)),
                rgDono: Number(prompt(`Informe o RG do dono`))
            }
            let achou3 = false 
            for(let i=0;i<vetPessoas.length;i++){
                if (vetPessoas[i].rg == objeto2.imovel){
                    achou3 = true 
                }
            }
            if (!achou3){
                alert(`RG não cadastrado`)
        }
        else {
            let achou4 = false
            for(let i=0;i<vetImoveis.length;i++){
                if ((vetImoveis[i].imovel == objeto2.imovel) && (vetImoveis[i].rgDono == objeto2.rgDono)){
                    achou4 = true
    }
            }
       if (achou4){
    alert(`Já existe uma venda deste vendedor neste mês`)
}
       else {
            vetImoveis.push(objeto2)
            alert(`Imóvel cadastrado com sucesso`)
            
       }
    }
       break
       case 3: 
       let rgInteresse2 = prompt(`Informe o rg que deseja consultar`)
       let achou5 = false
       let soma = 0
       let nomeConsultado = ""
       for(let i=0;i<vetImoveis.length;i++){
           if ((vetImoveis[i].rgDono == rgInteresse) && (nomeConsultado = objeto1.nome)){
               soma = soma + vetImoveis[i].valor 
               achou5 = true
           }
       }
       if (!achou5){
           alert(`Não foi encontrada imóvel para o (a) ${rnomeConsultado}`)
       }
       else {
           alert(`O valor total de imóveis do ${rnomeConsultado} com rg número ${rgInteresse2} é ${soma}`)
       }
       break
       case 4:
        let pegarValor = 0
        let maiorValor = 0
        let cpfMvalor = 0
        for(let i=0;i<maiorValor.length;i++){
            if ((vetImoveis.valor[i] > maiorValor) && (cpfMvalor = objeto1.cpf)){
                pegarValor = maiorValor
            }
        }
        alert(`O cpf ${cpfMvalor} tem o imovel mais caro`)
        break
        case 5: alert("Finalizando o programa")
        break
        default: alert("Opção inválida")
    }
}
      while (opcao != 5)
}
function exe2(){
    let vetor = [] 
    let matriz = [] 
    entradaDados(vetor, matriz)
    calculaMediaNotas(vetor, matriz)
}
function entradaDados(vetor, matriz){

    for(let i=0;i<4;i++) { 
        let objeto = {
            marca: Number(prompt(`Informe a marca do carro`)),
            modelo: prompt(`Informe o modelo do carro`),
            ano: Number(prompt(`Informe o ano do carro`)),
            valor: Number(prompt(`Informe o valor do carro`))
        }
        vetor[i] = objeto 
        matriz[i] = []  
        }
    }
    function calculaMediaNotas(){
        for(let i=0; i<4; i++){
            matriz[i][j] = Number(prompt(`Informe a nota do carro ${j+1}`))
            let soma = 0
        for (let j=0; j<4; j++){
            soma = soma + matriz[i][j]
        }
            let media
            media = soma / 4
            alert(`a media de notas para cada carro é de ${media}`)
        }
        
    }



       