// Importa a biblioteca readline-sync para entrada de dados do usuário
import * as readlineSync from 'readline-sync';

// Definição da classe Conta
class Conta {
  numero: string;
  titular: string;
  saldo: number;

  constructor(numero: string, titular: string, saldoInicial: number = 0) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  // Função para exibir o saldo
  mostrarSaldo(): void {
    console.log(`Saldo da conta ${this.numero}: R$ ${this.saldo.toFixed(2)}`);
  }

  // Função para realizar um depósito
  depositar(valor: number): void {
    if (valor <= 0) {
      console.log("Valor de depósito deve ser positivo!");
    } else {
      this.saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }
  }

  // Função para realizar um saque
  sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente!");
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }
  }
}

// Função principal para controlar a interação do usuário
function main() {
  // Dados do usuário
  let numeroConta = readlineSync.question('Digite o número da conta: ');
  let titularConta = readlineSync.question('Digite o nome do titular da conta: ');
  let conta = new Conta(numeroConta, titularConta);

  while (true) {
    console.log("\nEscolha uma opção:");
    console.log("1 - Ver saldo");
    console.log("2 - Depositar");
    console.log("3 - Sacar");
    console.log("4 - Sair");

    let opcao = readlineSync.question('Digite a opção desejada: ');

    switch (opcao) {
      case '1':
        conta.mostrarSaldo();
        break;
      case '2':
        let deposito = readlineSync.questionFloat('Digite o valor a ser depositado: ');
        conta.depositar(deposito);
        break;
      case '3':
        let saque = readlineSync.questionFloat('Digite o valor a ser sacado: ');
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
