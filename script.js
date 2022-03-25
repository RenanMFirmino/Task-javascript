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

//Ex5:
// let num=[-1,2,-3,4,-5,6,-7,-8,9,-10,11,-12,13,-14,-15,16,-17,-18,19,-20];
// let par=[];
// let impar=[];
// let cont1=0;
// let cont2=0;
// console.log("20 numeros inteiros:")
// for(let i=0;i<20;i++){
//     if(num[i]%2===0){
//         par[cont1]=parseInt(num[i]) ;
//         cont1++;
//     }else{
//         impar[cont2]=parseInt(num[i]);
//         cont2++;
//     }
//     console.log(num[i]);
//     if(i===19){
//         console.log("Numeros par:")
//         for(let j=0;j<cont1;j++){
            
//             console.log(par[j]);
//         }
//         console.log("Numeros impar:")
//         for(let k=0;k<cont2;k++){
//             console.log(impar[k]);
//         }
//     }
// }

//Ex6:
// let notas=[];
// let alunos=[];
// let media=[];
// let cont=0;
// for(let i=0;i<10;i++){
//     alunos[i]=prompt("Nome do aluno:");
//     let soma=0;
//     for(let j=0;j<4;j++){
//         notas[j]=parseFloat(prompt("Digite ah "+(parseInt(j)+1)+"º nota:"));
//         soma+=notas[j];
//     }
//     media[i]=soma/4;
//     if(media[i]>=7){
//         cont++;
//     }
//     if(i===9){
//         console.log("O numero de alunos com media maior que sete é: "+cont);
//     }
// }

//Ex7:
// let num=[2,5,-4,10,-7];
// let soma=0;
// let mult=0;
// for(let i=0;i<5;i++){
//     soma+=num[i];
//     if(i===4){
//         mult=(num[0]*num[01]*num[2]*num[3]*num[4]);
//         console.log("A soma dos numeros eh: "+soma);
//         console.log("A multiplicacao dos numeros eh: "+mult);
//         console.log("Os numeros sao: "+num[0]+" "+num[01]+" "+num[2]+" "+num[3]+" "+num[4])
//     }
// }

//Ex8:
// let idade=[];
// let altura=[];
// for(let i=0;i<5;i++){
//     alert("Pessoa "+(parseInt(i)+1));
//     idade[i]=parseInt(prompt("Informe sua idade:"));
//     altura[i]=parseFloat(prompt("Informe sua altura"));
// }
// console.log("Idade e altura em ordem inversa")
// for(let j=4;j>=0;j--){
//     console.log("Idade "+(parseInt(j)+1)+"º :"+idade[j]+" Altura "+(parseInt(j)+1)+"º :"+altura[j])
// }

//Ex9:
// let terminou=true;
// let pessoa=[];
// let cont=0;
// while (terminou) {
//     pessoa[cont]=prompt("Digite seu nome:")
//     let resp=  prompt("Deseja adicionar concorrente:")
//     if(resp.toLowerCase() === "sim"){
//         cont++;
//     }else{
//         terminou=false;
//         alert("Terminou")
//     }
// }
// let sorteado = Math.floor(Math.random() * cont);
// console.log(pessoa[sorteado]+" foi sorteada para pagar o churrasco!")

//Ex10:
// let terminou=true;
// let pessoa=[];
// let cont=0;
// while (terminou) {
//     pessoa[cont]=prompt("Digite seu nome:")
//     let resp=  prompt("Deseja adicionar concorrente:")
//     if(resp.toLowerCase() === "sim"){
//         cont++;
//     }else{
//         terminou=false;
//         alert("Terminou")
//     }
// }
// let sort1 = Math.floor(Math.random() * cont);
// let p=pessoa[sort1];
// pessoa.splice(sort1,1)
// let sort2 = Math.floor(Math.random() * (parseInt(cont)-1 ));
// console.log(p+" e "+ pessoa[sort2]+" foram sorteados para te dar um presente!")


//Exercicios Função

//Ex1:
// function parimpar(num){
//     if(num%2===0){
//         alert("Numero "+num+ " eh par");
//     }else{
//         alert("Numero "+num+ " eh impar")
//     }
// }
// let num =parseInt(prompt("Digite o numero"));
// parimpar(num)

//Ex2:
// function soma(n1,n2){
//     alert("A soma eh "+(n1+n2))
//     return (n1+n2)
// }
// let num1=parseInt(prompt("Digite o primeiro numero:"));
// let num2=parseInt(prompt("Digite o segundo numero:"));
// result= soma(num1,num2)

//Ex3:
// function oposto(n1){
//     alert("O numero oposto eh "+(n1*-1));
//     return (n1*-1)
// }
// let n=parseInt(oposto(prompt("informe o numero desejado:")))

//Ex4:
// let num=[];
// cont=0;
// let result=true
// while (result) {
//     num[cont]=parseInt(prompt("Digite o numero:"));
//     let resp=prompt("Deseja digitar outro numero ?");
//     if(resp.toLowerCase()==="sim"){
//         cont++;
//     }else{
//         result=false;
//     }
// }
// function somapositiva(num){
//     let soma=0;
//     console.log(num);
//     for(let i=0;i<=num.length;i++){
//         if(num[i]>=0){
//             soma += num[i];
//         }
//     }
//     alert(soma);
//     return soma;
// }
// let soma=somapositiva(num)

//Ex5:
// let num=[];
// cont=0;
// let result=true
// while (result) {
//     num[cont]=parseInt(prompt("Digite o numero:"));
//     let resp=prompt("Deseja digitar outro numero ?");
//     if(resp.toLowerCase()==="sim"){
//         cont++;
//     }else{
//         result=false;
//     }
// }
// function menor(num){
//     let menor=0;
//     console.log(num);
//     for(let i=0;i<=num.length;i++){
//         if(i===0){
//             menor=num[i];
//         }else{
//             if(menor>num[i]){
//                 menor=num[i];
//             }
//         }
//     }
//     alert("O numero menor eh: "+ menor);
//     return menor;
// }
// let Menor=menor(num)