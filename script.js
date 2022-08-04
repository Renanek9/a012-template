const bool1 = false
const bool2 = true
const bool3 = false

// if (bool1) {
//   // deve ser sempre verdadeira, pro bloco ser executado
//   // entra se for true
//   alert('ENTREI NO IF')
// } else {
//   // entra se for false
//   alert('entrei no else')
// }

// if (bool1 === bool2) {
//   alert('1 e 2 SAO IGUAIS!!')
// } else if (bool2 === bool3) {
//   alert('2 e 3 SAO IGUAIS!!')
// } else if (bool1 === bool3) {
//   alert('1 e 3 SAO IGUAIS!!')
// } else {
//   //nenhuma foi atendida, ai o else é executado
//   alert('Nenhum das condicóes foi atendida!!')
// }

// const idade = 61

// if (idade >= 60) {
//   alert('O voto é facultativo')
// } else if (idade >= 16 && idade < 18) {
//   alert('O voto é facultativo')
// } else if (idade >= 18) {
//   alert('Pode e deve emitir o titulo')
// } else {
//   alert(' Nao pode emitir o titulo')
// }

// if (idade >= 60 || (idade >= 16 && idade < 18)) {
//   alert('O voto é facultativo')
//   // uma logica doida
// } else if (idade >= 18) {
//   alert('Pode e deve emitir o titulo')
// } else {
//   alert(' Nao pode emitir o titulo')
// }


// const media = 2;

// if (media >= 5 && media <= 7) {
//         alert("Voce foi aprovado, mas não merecia")
// }   else if (media >7) {
//         alert("CDF")
// }   else if (media >=3){
//         alert ("Vai passar o verão estudando na recuperação")
// }   else if(media <3) {
//         alert ("Tomou bomba....")
// }   else {
//         alert("Dado Invalido")
// }  

//Resolução Julian
const media = Number(prompt('Qual foi a nota de 0 a 10'));

if (media >= 5 && media <= 10){
    alert('Você foi aprovado(a)!')
}else if(media >=3 && media < 5){
    alert('Voce pode recuperar! Vamos lá')
} else if(media < 3 && media >= 0){
    alert('Que pena, você reprovou, tem que estudar mais!')
}else{
    alert('Dados inválidos')
}


// Resolução Levir
// const media = +prompt("Qual foi sua nota no exame final?")

// if (media >= 5 && media <= 10) {
//     alert("Você foi aprovado!")
// } else if (3 <= media && media <= 4.9999999999999999999999999999999999999999999999 ) {
//     alert("Você está de recuperação!")
// } else if (media < 3) {
//     alert("Você foi reprovado!")
// } else {
//     alert("Dado invalido")
// }

// Solução Ralph
// let media = 3

// if (media >= 5){
//     alert("Parabéns, você foi aprovado")
// } else if(media >= 3){
//     alert("Você ainda tem uma chance, vamos para recuperação!")
// }
// else if(media < 3){
//     alert("Que pena! Você foi reprovado.")
// }
// else{
//     alert("dado inválido")
// }