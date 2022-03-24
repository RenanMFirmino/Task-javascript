//Estrutura Sequencial

//Ex1:
// let nome = prompt("Escreva seu nome:");
// alert("Seu nome eh "+nome);
// console.log(nome);

//Ex2:
// let num1 = parseInt(prompt("Digite um numero:"));
// let num2 = parseInt(prompt("Digite um numero:"));
// console.log("A soma dos numeros eh: " (num1 + num2));

//Ex3:
// let nota1 = parseFloat(prompt("Digite a primeira nota:"));
// let nota2 = parseFloat(prompt("Digite a segunda nota:"));
// console.log("A media eh : " +(nota1 + nota2)/2);

//Ex4:
// let anoNasci = parseInt(prompt("Digite seu ano de Nascimento:"));
// dataAtual = new Date();
// anoAtual= dataAtual.getFullYear();
// console.log(anoAtual - anoNasci)

//Ex5:
// let salarioHora= parseFloat(prompt("Quanto voce ganha por hora?"));
// let horaTrabalho= parseInt(prompt("Quantas horas voce trabalha?"));
// dt = new Date();
// month = dt.getMonth();
// year = dt.getFullYear();
// daysInMonth = new Date(year, month, 0).getDate();
// let total =(salarioHora*(horaTrabalho*daysInMonth))
// console.log(total+"R$");

//Ex6:
// let F = parseFloat(prompt("Qual a temperatura em graus Fahrenheit:"))
// console.log("Graus Celsius "+((F-32) / 9)*5);


//EstruturaDeDecisao

//Ex1:
// let num1 = parseInt(prompt("Digite o primeiro numero:"));
// let num2 = parseInt(prompt("Digite o segundo numero:"));
// if (num1>num2) {
//     console.log("O primeiro numero eh maior: "+ num1)
// }else if (num2>num1) {
//     console.log("O segundo numero eh maior: "+ num2)
// }else{
//     console.log("Os numeros sao iguais")
// }

//Ex2:
// let num1 = parseInt(prompt("Digite um numero:"));
// if (num1>=0) { 
//     console.log("numero eh positivo");
// }
// else{
//     console.log("numero eh negativo");
// }

//Ex3:
// let letra=prompt("Digite F(female) ou M(male):").toLowerCase();
// if (letra ==="f") {
//     console.log("Feminino");
// }
// else if (letra ==="m") {
//     console.log("Masculino");
// } else {
//     console.log("Sexo invalido");
// }

//Ex4:
// let nota1=parseFloat(prompt("Digite a primeira nota:"));
// let nota2=parseFloat(prompt("Digite a segunda nota:"))
// let media=((nota1+nota2)/2);
// if (media>=7 && media<10) {
//     console.log("Aprovado")
// }else if (media<7) {
//     console.log("Reprovado")
// }else if (media===10) {
//     console.log("Aprovado com distincao")
// }

//Ex5:
// let n1=parseInt(prompt("Digite um numero:"));
// let n2=parseInt(prompt("Digite um numero:"));
// let n3=parseInt(prompt("Digite um numero:"));
// if (n1>n2 && n2>n3 &&n1>n3) {
//     console.log("O maior eh: "+n1+" e o menor eh: " +n3);
// }else if (n1>n2 && n3>n2 && n1>n3) {
//     console.log("O maior eh: "+n1+" e o menor eh: " +n2); 
// }else if (n2>n1 && n1>n3 &&n2>n3)  {
//     console.log("O maior eh: "+n2+" e o menor eh: " +n3);
// }else if (n2>n1 && n3>n1 && n2>n3) {
//     console.log("O maior eh: "+n2+" e o menor eh: " +n1);
// }else if (n3>n1 && n1>n2 && n3>n2) {
//     console.log("O maior eh: "+n3+" e o menor eh: " +n2);
// }else if (n3>n1 && n2>n1 && n3>n2)  {
//     console.log("O maior eh: "+n3+" e o menor eh: " +n1);
// }

// Ex6:
// let num1 = parseInt(prompt("Digite um numero:"));
// let num2 = parseInt(prompt("Digite um numero:"));
// if (num1%2===0) { (o uso de  tres =(===) compara inclusive o tipo)
//     console.log("numero eh par");
// }
// else{
//     console.log("numero eh impar");
// }
// if (num2%2===0) { (o uso de  tres =(===) compara inclusive o tipo)
//     console.log("numero eh par");
// }
// else{
//     console.log("numero eh impar");
// }


//Estruturas de Repetição

//Ex1:
// while (true) {
//     let nota=parseFloat(prompt("Digite uma nota"));
//     if (nota>=0 && nota<=10) {
//         alert("Sua nota eh: " +nota);
//         break;
//     }else{
//         alert("Nota invalida");
//     }
// }

//Ex2:
// let compara = true;
// while (compara) {
//     let nome=prompt("Digite seu usuario");
//     let senha=prompt("Digite sua senha:");
//     if (nome===senha) {
//         alert("ERRO: usuario e senha igais, repita as informacoes");
//     }
//     else {
//         compara =false;
//         alert("Cadastro realizado");
//     }
// }

//Ex3:
// for(let i=1;i<=20;i++){
//     console.log(i)
// }

//Ex4:
// let maior=0;
// for(let i=0;i<5;i++){
//     let num=parseInt(prompt("Digite um numero"));
//     if(i===0){
//         maior=num;
//     }
//     if(num>maior){
//         maior=num;
//     }
// }
// prompt("O numero maior eh:"+ maior)

//Ex5:
// let soma=0;
// for(let i=0;i<5;i++){
//     let num=parseInt(prompt("Digite um numero"));
//     soma+=num;
// }
// let media=(soma/5)
// prompt("Soma: "+soma+" Media: "+media)

//Ex6:
// for(let i=1;i<=50;i++){
//     if(i%2===1){
//         alert(i);
//         console.log(i)
//     }
// }

//Ex7:
// let num=parseInt(prompt("Digite o numero da tabuada"));
// alert("Tabuada de "+num+":");
// for(let i=1;i<=10;i++){
//     console.log(num+" X "+i+" = "+(num*i));
//     alert(num+" X "+i+" = "+(num*i));
// }


//Desafio FizzBuzz
// let n=100;
// for(let i=1;i<=n;i++){
//     if (i%3===0 && i%5===0) {
//         console.log("FizzBuzz "+i)
//     }else if (i%3===0) {
//         console.log("Fizz " +i)
//     }else if (i%5===0) {
//         console.log("Buzz " +i)
//     }else {
//         console.log(i)
//     }
// }


//Exercícios Lista

//Ex1:
// let minhaLista=[-1,2,-3,4,-5];
// for(let i=0; i<=4; i++){
//     console.log(parseInt(minhaLista[i])) 
// }

//Ex2:
// let minhaLista=[1,2,3,4,5,6,7,8,9,10];
// for(let i=9; i>=0; i--){
//     console.log(minhaLista[i]) 
// }

//Ex3:
// let notas=[10,7.5,8.5,5]
// let soma=0;
// for(let i=0;i<4;i++){
//     console.log("Nota "+(parseInt(i)+1)+" : "+parseFloat(notas[i]));
//     soma+=notas[i];
// }
// alert("A media eh: "+(soma/4));

//Ex4:
// let letras=["a","b","c","d","e","f","g","h","i","j"]
// let cont=0
// for(let i=0;i<10;i++){
//     if(letras[i]!="a" && letras[i]!="e" && letras[i]!="i" && letras[i]!="o" && letras[i]!="u"){
//         cont++;
//     }
// }
// console.log("Quantidade consoantes eh: "+cont);