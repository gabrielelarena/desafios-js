//testando códigos :)

// teste 1

var vel = 78.2
console.log(`A velocidade do seu carro é ${vel}Km/h`)
if (vel > 60) {
    console.log(`Você ultrapassou a velocidade permitida. Multado!`)
}
console.log(`Dirija sempre usando cinto de segurança!`)

// teste 2

var país = 'Brasil'
console.log(`Você vive no ${país}`)
if (país != 'Brasil') {
    console.log(`Você é estrangeiro!`)
} else {
    console.log(`Você é brasileiro!`)
}

// teste 3

var idade = 12
if (idade < 18) {
    console.log(`Menor de idade`)
} else {
    console.log(`Maior de idade`)
}

// teste 4 

var idade = 12
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não vota!`)
} else if (idade < 18 || idade > 65) {
    console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatório`)
}

// teste 5

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora <= 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}

// teste 6

var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
    default:
        console.log('[ERRO] - DIA INVÁLIDO')
}

// teste 7

var c = 1
while (c <= 3) {
    console.log('Tudo bem?')
    c++
}

var c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 2)

// teste 8

console.log(`Vai começar...`)
for (var c = 1; c <= 4; c++) {
    console.log(c)
}
console.log('Fim!')


// teste 9

let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 84.5,
    engordar(p = 0) {
        console.log('Engordou!')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

// teste 10 (exibir números usando caracteres)

let array = ['b', 'p', 'c', 'a']
array.sort()
console.log("ORDENADO:", array)
for (let x in array) {
    console.log(`LETRA: ${array[x]} CÓDIGO: ${array[x].charCodeAt(0)}`)
}

array = ['b', 'P', 'c', 'a']
array.sort()
console.log("ORDENADO:", array)
for (let x in array) {
    console.log(`LETRA: ${array[x]} CÓDIGO: ${array[x].charCodeAt(0)}`)
}

const numeros = [99, 25, 100]
numeros.sort()
console.log("ORDENADO:", numeros)
for (let x in numeros) {
    console.log(`NÚMERO: ${numeros[x]} CÓDIGO: ${String(numeros[x]).charCodeAt(0)}`)
}

const numbers = [40, 100, 1, 5, 25, 10]
numbers.sort((a, b) => a - b)
console.log("ORDENADO:", numbers)

// teste 11 (for)

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for(let pos in valores) { //simplificação
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// teste 12 (vetores)

let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}`)

let num2 = [5, 8, 2, 9, 3]
num2.sort()
num2.push(1)
console.log(num2)
console.log(`O vetor tem ${num2.length} posições`)
console.log(`O primeiro valor do vetor é ${num2[0]}`)


let num3 = [5, 8, 2, 9, 3]
num2.sort()
num2.push(1)
console.log(num3)
console.log(`O vetor TEM ${num3.length} posições`)
console.log(`O primeiro valor do vetor é ${num3[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}

// teste 13 (funções)

function parimpar(n) {
    if (n%2 == 0) {
        return 'PAR!'
    } else {
        return 'IMPAR!'
    }
}
console.log(res)

function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma)

let v = function(x) {
    return x*2
}
console.log(v)

// teste 14 (recursividade)

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial)

// ou 

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial)