function imprimirResultado(numero, numero2){
const Resultado = numero + numero2

console.log( Resultado)

}
imprimirResultado(2, 3)


function  receberNumero(numero1, numero2){
 const receber = numero1 >= numero2
 
 console.log(receber)

}
receberNumero(2, 1)


function recebe(numero){
    const imprima = numero %2===0
    console.log(imprima)

}
recebe(3)


function valor(salario){
    return salario * 0.9
}

console.log(valor(2000))
