let nome = prompt('Digite seu nome');

window.alert(`Olá ${nome} seja bem vindo!`);


function calculator () {
    let num1 = Number.parseInt(window.prompt('Digite um numero'));
    let num2 = Number.parseInt(window.prompt('Digite outro numero'));
    let soma = num1 + num2

    window.alert(`A soma dos números informados é ${soma}`)
}
