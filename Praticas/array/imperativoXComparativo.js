const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome: 'Maria', nota: 9.9}
]

//Imperativo -> passo a passo
let total1 = 0;
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Declarativo -> não importa como, apenas faça 
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//select codigo, nome from clientes where ativos = 1