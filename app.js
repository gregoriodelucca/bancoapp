"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importa a biblioteca readline-sync para entrada de dados do usuário
var readlineSync = require("readline-sync");
// Definição da classe Conta
var Conta = /** @class */ (function () {
    function Conta(numero, titular, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    // Função para exibir o saldo
    Conta.prototype.mostrarSaldo = function () {
        console.log("Saldo da conta ".concat(this.numero, ": R$ ").concat(this.saldo.toFixed(2)));
    };
    // Função para realizar um depósito
    Conta.prototype.depositar = function (valor) {
        if (valor <= 0) {
            console.log("Valor de depósito deve ser positivo!");
        }
        else {
            this.saldo += valor;
            console.log("Dep\u00F3sito de R$ ".concat(valor.toFixed(2), " realizado com sucesso."));
        }
    };
    // Função para realizar um saque
    Conta.prototype.sacar = function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente!");
        }
        else {
            this.saldo -= valor;
            console.log("Saque de R$ ".concat(valor.toFixed(2), " realizado com sucesso."));
        }
    };
    return Conta;
}());
// Função principal para controlar a interação do usuário
function main() {
    // Dados do usuário
    var numeroConta = readlineSync.question('Digite o número da conta: ');
    var titularConta = readlineSync.question('Digite o nome do titular da conta: ');
    var conta = new Conta(numeroConta, titularConta);
    while (true) {
        console.log("\nEscolha uma opção:");
        console.log("1 - Ver saldo");
        console.log("2 - Depositar");
        console.log("3 - Sacar");
        console.log("4 - Sair");
        var opcao = readlineSync.question('Digite a opção desejada: ');
        switch (opcao) {
            case '1':
                conta.mostrarSaldo();
                break;
            case '2':
                var deposito = readlineSync.questionFloat('Digite o valor a ser depositado: ');
                conta.depositar(deposito);
                break;
            case '3':
                var saque = readlineSync.questionFloat('Digite o valor a ser sacado: ');
                conta.sacar(saque);
                break;
            case '4':
                console.log("Saindo...");
                return;
            default:
                console.log("Opção inválida.");
                break;
        }
    }
}
// Chama a função principal
main();
