function exe1(){
    //recuperar entrada de dados
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)

    //caucular a media
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7){
        document.getElementById("resultado").innerHTML =  `A média é ${media} está aprovado`

    }
    else {
        document.getElementById("resultado").innerHTML = `A média é ${media} está aprovado`
    }
    }

    function exe2(){
        //recuperar entrada de dados
        let nota1 = Number(document.getElementById("nota1").value)
        let nota2 = Number(document.getElementById("nota2").value)
    
        //caucular a media
        let media = (nota1 + nota2) / 2
    
        if ((media >= 0 ) && (media < 3)){
            document.getElementById("resultado").innerHTML =  `A média é ${media} está reprovado`
    
        }
        else if ((media >= 3) && (media < 7)){
            document.getElementById("resultado").innerHTML =  `Aluno em exame com media ${media}`
        }
        else if ((media >= 7) && (media <=10)){
            document.getElementById("resultado").innerHTML =  `A média é ${media} está aprovado`
        }
        else{
            resultado =  `Notas informadas sao inválidas`
        }
        //mostra resultado
        document.getElementById("resultado").innerHTML = resultado
    }
    function exe3(){
        //recuperar entrada de dados
        let n1 = Number(document.getElementById("n1").value)
        let n2 = Number(document.getElementById("n2").value)
        if (n1 < n2){
            document.getElementById("resultado").innerHTML = `O menor numero é ${n1}`
        }
        else if (n2 < n1){
            document.getElementById("resultado").innerHTML = `O menor número é ${n2}`
        }
        else{
            document.getElementById("resultado").innerHTML = `Nao existe numero menor, ambos sao iguais`
        }

    }
    function exe4(){
        let n1 = Number(document.getElementById("n1").value)
        let n2 = Number(document.getElementById("n2").value)
        let n3 = Number(document.getElementById("n3").value)

        if ((n1 == n2) && (n1 == n3)){
            document.getElementById("resultado").innerHTML = `Todos os numeros sao iguais`
        }
        else if ((n1 > n2) && (n1 > n3)){
            document.getElementById("resultado").innerHTML = `O maior número é  ${n1}`
        }
        else if (n2 > n3){
            document.getElementById("resultado").innerHTML = `O maior número é  ${n2}`
        }
            else{
               document.getElementById("resultado").innerHTML = `O maior número é  ${n3}`
        }
    }
    function exe5(){
        let n1 = Number(document.getElementById("n1").value)
        let n2 = Number(document.getElementById("n2").value)
        let opcao = Number(document.getElementById("opcao").value)
        let resultado
        switch (opcao) {
            case 1: resultado = (n1 + n2) / 2
                break
        
            case 2:
                if (n1 >= n2){
                    resultado = n1 - n2
                }
                else{
                    resultado = n2 - n1
                }
                break
            case 3: resultado = (n1 * n2)
                break
            case 4: 
                if (n2 != 0){
                    resultado = n1 / n2
                }
                else{
                    resultado = "Divisao por zero"
                }
                break
            default: resultado = "opçao inválida"
        }
        document.getElementById("resultado").innerHTML = resultado
    }
    function exe6(){
        let n1 = Number(document.getElementById("n1").value)
        let n2 = Number(document.getElementById("n2").value)
        let opcao = document.getElementById("opcao").value
        let resultado
        switch (opcao) {
            case 1:
                resultado = `O valor é ${Math.pow(n1, n2)}`
                break
            case 2: 
                resultado = `O valor é ${Math.sqrt(n1)} e ${Math.sqrt(n2)}`
                break
            case 3:
                resultado = ` O valor é ${Math.cbrt(n1)} e ${Math.cbrt(n2)}`
                break
            default: resultado = "opçao inválida"
                break;
        }
        document.getElementById("resultado").innerHTML = resultado
    }
    function exe7(){
        let salario = Number(document.getElementById("salario").value)
        let aumento = 0
        if (salario < 500){
            aumento = (salario * 30)/ 100
        }
        if (aumento == 0){
            document.getElementById("resultado").innerHTML = `Nao houve aumento`
        }
        else{
            document.getElementById("resultado").innerHTML = `Aumento ${aumento} e salário reajustado:
             ${salario + aumento}`
        }
    }