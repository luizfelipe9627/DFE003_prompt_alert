// Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.
const number = prompt("Digite um numero: ");
const double = number * 2;
alert(`O dobro de ${number} é ${double}`);

// Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom.
const dinnerPrice = prompt("Digite o valor da conta do jantar: ");
const tip = dinnerPrice * 0.1;
const totalDinner = Number(dinnerPrice) + Number(tip);
alert(`O valor total da conta é ${totalDinner}`);

// Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.
const pizzeriaPrice = prompt("Digite o valor da conta da pizzaria: ");
const clients = prompt("Digite a quantidade de clientes: ");
const totalPizzeria = pizzeriaPrice / clients;
alert(`O valor a ser pago por cliente é ${totalPizzeria}`);
