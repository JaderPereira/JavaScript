const pessoas = [
    { id: 1, nome: 'Jader'},
    { id: 2, nome: 'Asaf'},
    { id: 3, nome: 'Paula'}
]

const novasPessoas = {}

for(const pessoa of pessoas) {
    const id =  pessoa
    novasPessoas[id] = { ...pessoas }
}
console.log(novasPessoas)