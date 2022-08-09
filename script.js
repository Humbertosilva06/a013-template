/*// verificar o dependetnte do ussuario teM ENTRE 13 E 17 ANOS PARA APROVAR CARTAO DE CREDITO utilizando 1 -if animnhado, 2 operadro logicopara unir duas opeções relacionasi, se o numero estiver entre 13 e 17 imprimir mensagem

// com animnhamento de if
let idadeDependente = 13

if (idadeDependente >=13){
    if(idadeDependente >= 18){
        console.log("seu dependete ja pode ter um cartao proprio")
    }else{
        console.log("o seu dependente pode ter um cartao vinculado ao seu")
    }
}else{
    console.log("consulte outras possibilidades")
}

// com operador logico (&& (E), || (OU), ! (não))
if(idadeDependente >= 13 && idadeDependente <=17){
    console.log(" Seu depdendete ja pode  ter um cartão de crédito vinculado ao seu")
}
else{
    console.log("consulte outra possibilidade")
}

//com if ternario
// verificar se o numero é exatamente 13, se sim, imprimir algo, caso não, imprima ouitra
// o ternario resume muito o if else
// condição ? expressão 1 (caso true vai exbir essa): expressão 2 ( caso false vai imprimir essa)
idadeDependente === 13 ? console.log ("a idade do dependente é 13 ja pode ter cartão") : console.log ("consulte outra opções")
//---------------------------------------------

//switch case
//serviço de escolha de cartão, 1 para facil; 2 - para black; 3 para platinum; 4 para master gold; caso opçao diferente "escolha uma das opcçoes dispniveis"
// envolver o prompt com Number pra trasnforma string em number (ou um =+)
let cartao = Number (prompt("solicitação de cartão de credito, escolha uma opção: \n1 - facil \n2- blac \n3-platinum \n4- master gold "))

// o switch case não interrompe automaticamente igual if else, tem que por um break a cada opção

//OBS: apos o case por : (dois pontos)
switch(cartao){
    case 1:
        console.log("cartão facil adquirido")
        break;
    case 2:
        console.log("cartão black adquirdo")
        break;
    case 3:
        console.log("cartao platinum aquirdo")
        break;
    case 4:
        console.log("cartao master adquirdo")
        break;
    default:
        console.log("escolha uma das opções apresentadas") 

}*/

// aula acima comentada, descomentar


// exercicio fixação
// A) codigo que receb anumero por prompt e verificar se é divisivel por 2 e por 3. A- utilizando if aninhado e 2- utilizando operador logico para unir relacionais
// B) dentro do if anterior, criar ternario  que imprima  um numero surpresa que deve ser 30, caso o numero seja 30 imprima "ufa, acertei", caso não seja "nao foi dessa vez:("
// C) ainda no if anterior, criar switch case que verifique se o numero é 6,12,18,24 ou 30 e imprima uma mensagem para cada numero, caso nao seja "o numero é maior que 30 e menor que 6"

//com if aninhado
let numero =+ prompt("digite um numero")
    if(numero % 2 === 0){
        if(numero % 3 === 0){
            console.log("o numero: ", numero, "é divisivel pro 2 e 3")
            numero === 30 ? console.log("ufa, acertei") : console.log("não foi dessa vez")    
        }
    }else{
        console.log("o numero: ", numero, "não é divisivel pro ambos os numeros 2 e 3")
    }

//com operador logico e com switch case

if(numero% 2===0 && numero % 3 ===0){
    console.log("o numero: ", numero, "é divisivel por 2 e 3")
    switch(numero){
        case 6:
            console.log("o numero digitado foi 6")
            break;
        case 12:
            console.log ("o numero escolhido foi 12")
            break;
        case 18:
            console.log ("o numero escolhido foi 18") 
            break;
        case 24:
            console.log("o numero escolhido foi 24")
            break;
        case 30:
            console.log("o numero escolhido foi 30")
            break;
        default:
            console.log("o numero é maior que 30 ou  menor que 6")        
                   
    }
}else {
    console.log("o numero não divisão por ambos os numeros 2 e 3")
}

        