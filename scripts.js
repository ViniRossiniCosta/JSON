const obj = [
    {
        "nome": "Vinicius",
        "idade": 30,
        "esta_trabalhando": true,
        "detalhes_profissao": {
            "nome_profissao": "Programador",
            "empresa_atual": "Freeline info.",
            "horas_semanais": 30
        },
        "hobbies": [
            "Programar",
            "jogar piant-ball",
            "jogar CS 1.6",
            "Maratonar Black-Mirror"
        ],
    },
    {
        "nome": "sla",
        "idade": 30,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "nome_profissao": null,
            "empresa_atual": null,
            "horas_semanais": null
        },
        "hobbies": [
            "Programar",
            "jogar piant-ball",
            "jogar CS 1.6",
            "Maratonar Black-Mirror"
        ]
    }
]

console.log(obj)

// convertendo para JSON
const jsonData = JSON.stringify(obj);

console.log(jsonData)
console.assert.log(typeof jsonData)

// JSON to obj
const objData = JSON.parse(jsonData);

console.log(jsonData)
console.assert.log(typeof jsonData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})
