db.embedded.insertOne({
    nome: "Anderson",
    idade:48,
    endereco:{
        rua: "Rua das Flores",
        numero: "1314",
        complemento: "Casa"
    }
})

db.embedded.insertOne({
    nome:"João",
    idade:35,
    enderecos:{
        casa:{
            rua: "Ruas das Flores",
            numero: "1234",
            complemento: "Casa"
        },
        trabalho:{
            rua: "Rua das Árvores",
            numero: "123 C",
            complemento: "Galpão"
        }
    }
})

db.pessoas.insertOne({
    nome: "Godofredo",
    idade: 30,
    profissao: "Programador"
})

db.enderecos.insertOne({
    rua: "Ruas das Flores",
    numero:"1212",
    complemento: "Casa",
    pessoa_id: p._id 
})

db.pessoas.insertOne({
    nome: "Gustavo",
    idade: 29,
    profissao:"Gerente"
})

db.compras.insertMany([
    { produtos: ["Livro", "Celular"], pessoa_id: godofredoid },
    { produtos: ["Mouse", "Teclado"], pessoa_id: godofredoid },
    { produtos: ["Agenda"], pessoa_id: gustavoid },
    { produtos: ["Barbeador", "Suporte TV"], pessoa_id: gustavoid }
])

db.pessoas.insertOne({
    nome: "Pedro",
    idade: 44,
    profissao: "Motorista"
})

db.cursos.insertMany([
    {nome:"PHP Avançado"},
    {nome:"Javascript Básico"},
    {nome:"Banco de Dados NoSQL"}
])

db.curso_pessoa.insertMany([
    { curso_id: php._id, pessoa_id: gustavo._id },
    { curso_id: js._id, pessoa_id: gustavo._id },
    { curso_id: php._id, pessoa_id: godofredo._id }
])

// todos os alunos que cursam JS

const idsAlunosJs = [];
db.curso_pessoa.find({ curso_id: js._id }).forEach(function(aluno){
    idsAlunosJs.push(aluno.pessoa_id);
});

const idsAlunosPhp = [];
db.curso_pessoa.find({ curso_id: php._id }).forEach(function(aluno){
    idsAlunosPhp.push(aluno.pessoa_id);
});

const idsAlunosBd = [];
db.curso_pessoa.find({ curso_id: bd._id }).forEach(function(aluno){
    idsAlunosBd.push(aluno.pessoa_id);
});

// usando o operador $in para fazer a seleção dentro do array 
db.pessoas.find({
    _id:{ $in: idsAlunosJs }
})

db.pessoas.find({
    _id:{ $in: idsAlunosPhp }
})

db.pessoas.find({
    _id:{ $in: idsAlunosBd }
})

const idsAlunosBd2 = [];
db.curso_pessoa.find({ curso_id: bd._id }).forEach(function(aluno){
    idsAlunosBd2.push(aluno.pessoa_id);
});