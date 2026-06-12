let pessoa = {
  nome: "Ana",
  idade: 19,
  falar: function() {
    console.log("Hello World")
  }
};

console.log(pessoa)
pessoa.idade = 25
console.log(pessoa.falar())

var array_teste = [1,1,1]
array_teste.push(4)
console.log(array_teste)
array_teste.pop()
console.log(array_teste)

let alunos = ["João", "Rafael", "Henrique"]

function mostrarAlunos(alunos) {
  console.log(alunos)
}

mostrarAlunos(alunos)

let livro = {
  titulo: "O pequeno principe",
  autor: "Antoine de Saint-Exupéry",
  anoPublicacao: 1943 
}
console.log(`propiedades do Objeto Livro Titulo: ${livro.titulo}  Autor: ${livro.autor}  Ano de publicação: ${livro.anoPublicacao}`)

var array_cinconums = [1,2,3,4,5]

let num1 = array_cinconums[0]
let ultimoNum = array_cinconums[array_cinconums.length-1]

let soma = num1 + ultimoNum
console.log(soma)


