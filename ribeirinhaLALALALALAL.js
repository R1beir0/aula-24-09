function imprimirOlaMundo() {console.log("Olá Mundo!")}
imprimirOlaMundo()


function imprimirNome(nome) {
    console.log(`Olá ${nome}`)
} 
let nome = "Maria"
imprimirNome(nome)

imprimirNome("Eduarda")
imprimirNome("Duda")
imprimirNome("Ribeiro")


function calcularNumeros(x, y) {
    let soma = x + y 
return soma 
}
const resultadoSoma = calcularNumeros(2, 2)
console.log(calcularNumeros(2, 2))



let array = [2, 4, 6, 8]
function qualquerCoisa(arrayzinho) {
 let arrayzao = []
 let a = arrayzinho[0] / 2
 let b = arrayzinho [3] / 2
 arrayzao.push(a, b)
 return arrayzao 
}

/*qualquerCoisa(array)*/
console.log(qualquerCoisa(array))


let imprimirNome2 = function(nome2) {
    console.log(`Olá ${nome2}`)
}
 imprimirNome2(nome)

 let lalala = [1, 2, 3, 4]
 let novaArray = function(lalala) {
    let arrayNova = []
    let a = lalala[0] / 2
    let b = lalala[3] / 2
    arrayNova.push(a, b)
    return arrayNova

 }
console.log(novaArray(lalala))


 
