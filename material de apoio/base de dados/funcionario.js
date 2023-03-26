// ======================
// Banco de Dados EMPRESA
// ======================

// Cria o banco de dados empresa
use empresa

// Exclui banco de dados selecionado
// db.dropDatabase();

// Exclui a coleção funcionario
// db.funcionario.drop();

// Remove todos os documentos da coleção funcionario
db.funcionario.remove({});

// Insere um documento na coleção funcionario
db.funcionario.insertOne({
	"_id" : NumberInt(1),
    "nome" : "CARLOS MACEDO CERRI", 
    "depto" : NumberInt(3), 
    "funcao" : "VENDEDOR",
    "salario" : 1530.00, 
    "admissao" : new ISODate('2010-05-25T20:06:20.123Z'),
	"casado" : true,
	"skill" : "EXCELENTE RELACIONAMENTO INTERPESSOAL",		
	"endereco" : {		
		"logradouro" : "AVENIDA PERNAMBUCO",
		"bairro" : "BRASIL",
		"uf" : "BA",
		"numero" : NumberInt(102),
		"cidade" : "VITÓRIA DA CONQUISTA",
		"cep" : "45000-000"
	},
	"hobbies" : [         
        "TÊNIS DE MESA",
		"YOGA", 
		"VIAGEM"
    ],	
	"notas" : [ 
        {
            "criterio" : "PRODUÇÃO",
            "nota" : 4.8
        }, 
        {
            "criterio" : "CONVÍVIO",
            "nota" : 9.2
        }
    ],
	"avaliacoes" : [73, 87, 77],
	"feedbacks" : [true, true]
});

db.funcionario.insertOne({
	"_id" : NumberInt(2),
    "nome" : "HENRIQUE SOUZA MARCOS", 
    "depto" : NumberInt(2), 
    "funcao" : "GERENTE",
    "salario" : 3985.75,
    "admissao" : new ISODate('2009-07-01T07:12:56.030Z'),
	"filhos" : NumberInt(2),	
	"skill" : "FLUÊNCIA EM INGLÊS",
	"endereco" : {		
		"logradouro" : "RUA JARDIM",
		"bairro" : "CENTRO",
		"uf" : "BA",
		"numero" : NumberInt(245),
		"cidade" : "PLANALTO",
		"cep" : "45190-000"
	},
	"hobbies" : [ 
        "FUTEBOL", 
        "TÊNIS DE MESA",
		"NATAÇÃO"
    ],	
	"notas" : [ 
        {
            "criterio" : "PRODUÇÃO",
            "nota" : 10.0
        }, 
        {
            "criterio" : "CONVÍVIO",
            "nota" : 7.4
        }
    ],
	"avaliacoes" : [75, 73, 87],
	"feedbacks" : [true, true, false]
});

db.funcionario.insertOne({
	"_id" : NumberInt(3),
    "nome" : "ADRIANA ARAUJO DA SILVA", 
    "depto" : NumberInt(3), 
    "funcao" : "SECRETARIA",
    "salario" : 1200.50,
    "admissao" : new ISODate('2010-07-10T22:28:34.567Z'),
	"filhos" : NumberInt(1),
	"casado": true,
	"skill" : "EXCELENTE RELACIONAMENTO INTERPESSOAL",
	"endereco" : {		
		"logradouro" : "TRAVESSA BOTAFOGO",
		"bairro" : "CENTRO",
		"uf" : "BA",
		"numero" : NumberInt(344),
		"cidade" : "VITÓRIA DA CONQUISTA",
		"cep" : "45000-000"
	},
	"hobbies" : [ 
        "NATAÇÃO"
    ],	
	"notas" : [ 
        {
            "criterio" : "PRODUÇÃO",
            "nota" : 5.7
        }, 
        {
            "criterio" : "CONVÍVIO",
            "nota" : 9.8
        }
    ],
	"avaliacoes" : [73, 77, 84],
	"feedbacks" : [false, true, true, false]
});

db.funcionario.insertOne({
	"_id" : NumberInt(4),
    "nome" : "SOLANGE APARECIDA SOUZA", 
    "depto" : NumberInt(5), 
    "funcao" : "ANALISTA",
    "salario" : 1599.51,
    "admissao" : new ISODate('2006-12-08T09:12:22.212Z'),
	"filhos" : NumberInt(3),
	"casado" : false,
	"skill" : "TRABALHO (WORK) EM EQUIPE E GESTÃO DE PROJETOS",
	"endereco" : {		
		"logradouro" : "RUA FLUMINENSE",
		"bairro" : "PRIMAVERA",
		"uf" : "BA",
		"numero" : NumberInt(344),
		"cidade" : "ITAPETINGA",
		"cep" : "45700-000"
	},
	"hobbies" : [         
        "NATAÇÃO",		
		"VIAGEM",
		"YOGA", 
		"CANTAR"
    ],	
	"notas" : [ 
        {
            "criterio" : "PRODUÇÃO",
            "nota" : 7.6
        }, 
        {
            "criterio" : "CONVÍVIO",
            "nota" : 7.5
        }
	],
	"avaliacoes" : [73, 75, 89],
	"feedbacks" : [false, false]
});

db.funcionario.insertOne({
	"_id" : NumberInt(5),
    "nome" : "MARCELO AMORIM PACHECO", 
    "depto" : NumberInt(3), 
    "funcao" : "ANALISTA",
    "salario" : 2850.11,
    "admissao" : new ISODate('2005-06-06T12:55:11.933Z'),	
	"casado" : null,
	"endereco" : {		
		"logradouro" : "AVENIDA BRASIL",
		"bairro" : "CANDEIAS",
		"uf" : "BA",
		"numero" : NumberInt(355),
		"cidade" : "VITÓRIA DA CONQUISTA",
		"cep" : "45000-000"
	},	
	"hobbies" : [         
        "CANTAR",
		"TÊNIS DE MESA",
		"FUTEBOL"
    ],
	"notas" : [ 
        {
            "criterio" : "PRODUÇÃO",
            "nota" : 8.6
        }, 
        {
            "criterio" : "CONVÍVIO",
            "nota" : 5.5
        }
	],
	"avaliacoes" : [77, 75, 77],
	"feedbacks" : [false, true]
});

db.funcionario.insertOne({
	"_id" : NumberInt(6),
    "nome" : "CELIA ASSIS DO AMARAL", 
    "depto" : NumberInt(2), 
    "funcao" : "SECRETARIA",
    "salario" : 1200.50,
    "admissao" : new ISODate('2009-01-10T14:12:45.679Z'),
	"filhos" : NumberInt(1),
	"casado" : false,
	"skill" : "FLUÊNCIA EM FRANCÊS",
	"endereco" : {		
		"logradouro" : "AVENIDA BRASIL",
		"bairro" : "CANDEIAS",
		"uf" : "BA",
		"numero" : NumberInt(56),
		"cidade" : "VITÓRIA DA CONQUISTA",
		"cep" : "45000-000"
	},	
	"hobbies" : null,
	"notas" : [ 
        {
            "criterio" : "PRODUÇÃO",
            "nota" : 9.2
        }, 
        {
            "criterio" : "CONVÍVIO",
            "nota" : 7.1
        }
	],
	"avaliacoes" : [73, 77, 79],	
	"feedbacks" : [false, false, true, false]
});

db.funcionario.insertOne({
	"_id" : NumberInt(7),
    "nome" : "WILSON CAMPOS MACEDO", 
    "depto" : NumberInt(3), 
    "funcao" : "PROGRAMADOR",
    "salario" : 2050.00,
    "admissao" : new ISODate('2012-11-07T15:12:24.555Z'),
	"casado" : false,
	"skill" : "TRABALHAR (WORK) EM EQUIPE E GESTÃO DE PROJETOS",
	"endereco" : {		
		"logradouro" : "AVENIDA TANCREDO NEVES",
		"bairro" : "CENTRO",
		"uf" : "BA",
		"numero" : NumberInt(355),
		"cidade" : "VITÓRIA DA CONQUISTA",
		"cep" : "45000-000"
	},
	"hobbies" : [ 
        "VIAGEM", 
        "NATAÇÃO",
		"ESPORTE RADICAL",
		"CANTAR"
    ],	
	"notas" : [ 
        {
            "criterio" : "PRODUÇÃO",
            "nota" : 5.5
        }, 
        {
            "criterio" : "CONVÍVIO",
            "nota" : 5.1
        }
	],
	"avaliacoes" : [93, 75, 73],
	"feedbacks" : [false, false]
});

db.funcionario.insertOne({
	"_id" : NumberInt(8),
    "nome" : "AUGUSTO AGUIAR SOUZA", 
    "depto" : NumberInt(3), 
    "funcao" : "PROGRAMADOR",
    "salario" : 2050.00,
    "admissao" : new ISODate('2010-05-26T15:16:56.777Z'),
	"casado" : false,
	"skill" : "FLUÊNCIA EM INGLÊS",
	"endereco" : {		
		"logradouro" : "AVENIDA GETÚLIO VARGAS",
		"bairro" : "VILA NOVA",
		"uf" : "BA",
		"numero" : NumberInt(92),
		"cidade" : "POÇÕES",
		"cep" : "45260-000"
	},	
	"hobbies" : null,
	"notas" : [ 
        {
            "criterio" : "PRODUÇÃO",
            "nota" : 9.6
        }, 
        {
            "criterio" : "CONVÍVIO",
            "nota" : 7.7
        }
	],
	"avaliacoes" : [97, 87, 89]
});

db.funcionario.insertOne({
	"_id" : NumberInt(9),
    "nome" : "JESSICA ALVES TOLEDO", 
    "depto" : NumberInt(2), 
    "funcao" : "SUPERVISOR",
    "salario" : 2100.00,
    "admissao" : new ISODate('2006-07-05T17:33:34.888Z'),
	"filhos" : NumberInt(4),
	"casado" : false,
	"skill" : "FACILIDADE EM ADQUIRIR NOVOS CONHECIMENTOS",
	"endereco" : {		
		"logradouro" : "AVENIDA CENTRAL",
		"bairro" : "CENTRO",
		"uf" : "BA",
		"numero" : NumberInt(99),
		"cidade" : "ITAPETINGA",
		"cep" : "45700-000"
	},
	"hobbies" : [ 
        "FUTEBOL", 
        "NATAÇÃO"
    ],	
	"notas" : [ 
        {
            "criterio" : "PRODUÇÃO",
            "nota" : 7.8
        }, 
        {
            "criterio" : "CONVÍVIO",
            "nota" : 4.2
        }
	],
	"avaliacoes" : [84, 79, 84]
});

db.funcionario.insertOne({
	"_id" : NumberInt(10),
    "nome" : "VITORIA CRUZ ALMEIDA", 
    "depto" : NumberInt(2), 
    "funcao" : "ANALISTA",
    "salario" : 2500.00,
    "admissao" : new ISODate('2006-05-23T17:56:13.000Z'),
	"filhos" : NumberInt(1),
	"casado" : true,
	"skill" : "FLUÊNCIA EM INGLÊS",
	"endereco" : {		
		"logradouro" : "AVENIDA JARDIM GUANABARA",
		"bairro" : "BELA VISTA",
		"uf" : "BA",
		"numero" : NumberInt(67),
		"cidade" : "VITÓRIA DA CONQUISTA",
		"cep" : "45000-000"
	},
	"hobbies" : [ 
		"VIAGEM", 
        "CANTAR",
        "CINEMA", 
        "DORMIR"
    ],	
	"notas" : [ 
        {
            "criterio" : "PRODUÇÃO",
            "nota" : 5.9
        }, 
        {
            "criterio" : "CONVÍVIO",
            "nota" : 4.4
        }
	],
	"avaliacoes" : [75, 75, 93],
	"feedbacks" : [false, true, true]
});

db.funcionario.insertOne({
	"_id" : NumberInt(11),
    "nome" : "MARCIO CANUTO DOS SANTOS", 
    "depto" : NumberInt(2), 
    "funcao" : "PROGRAMADOR",
    "salario" : 1800.00,
    "admissao" : new ISODate('2008-07-29T16:41:26.900Z'),
	"casado" : true,
	"skill" : "FACILIDADE EM ADQUIRIR NOVOS CONHECIMENTOS",
	"endereco" : {		
		"logradouro" : "AVENIDA TANCREDO NEVES",
		"bairro" : "CENTRO",
		"uf" : "BA",
		"numero" : NumberInt(55),
		"cidade" : "POÇÕES",
		"cep" : "45260-000"
	},
	"hobbies" : [ 
        "DORMIR",
		"CINEMA", 
        "FOTOGRAFAR"		
    ],	
	"notas" : [ 
        {
            "criterio" : "PRODUÇÃO",
            "nota" : 6.9
        }, 
        {
            "criterio" : "CONVÍVIO",
            "nota" : 6.5
        }
	],
	"avaliacoes" : [84, 79, 73]
});

db.funcionario.insertOne({
	"_id" : NumberInt(12),
    "nome" : "CRISTINA CACHOEIRA BUZZI", 
    "depto" : NumberInt(5), 
    "funcao" : "SUPERVISOR",
    "salario" :  1950.00,
    "admissao" : new ISODate('2011-07-14T14:54:45.999Z'),
	"filhos" : NumberInt(2),
	"casado" : true,
	"skill" : "EXCELENTE RELACIONAMENTO INTERPESSOAL",
	"endereco" : {		
		"logradouro" : "AVENIDA AMAPÁ",
		"bairro" : "PRIMAVERA",
		"uf" : "BA",
		"numero" : NumberInt(34),
		"cidade" : "ITAPETINGA",
		"cep" : "45700-000"
	},
	"hobbies" : [ 
        "XADREZ"        
    ],	
	"notas" : [ 
        {
            "criterio" : "PRODUÇÃO",
            "nota" : 8.5
        }, 
        {
            "criterio" : "CONVÍVIO",
            "nota" : 9.8
        }
	],
	"avaliacoes" : [100, 73, 79]
});

// Mostra as coleções criadas
show collections

// Mostra todos os banco de dados criados
// show dbs
show databases

// Mostra os campos do terceiro documento da coleção
var colunas = db.funcionario.findOne({_id:3});
for (var col in colunas){
	print(col); 
}

// Mostra todos os documentos criados
db.funcionario.find({});