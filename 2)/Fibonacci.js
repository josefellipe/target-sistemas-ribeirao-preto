//valores relacionados ao html
var num;
let botao = document.getElementById("check");
let n1;
let n2;
let text;
let index;
let aviso;

//criar sequência de fibo até ela passar do num escolhido
let fibo = [1, 2];

botao.addEventListener('click', () => {
    criarSequenciaFibo();
    conferirSeNumE();
    fibo = [1, 2];
    n1 = 0;
    n2 = 1;
})

function criarSequenciaFibo() {
    n1 = 0;
    n2 = 1;
    num = document.getElementById("num").value
    while (n2 < num) {
        let n3 = n2 + n1;
        n1 = n2;
        n2 = n3;
        fibo.push(n2);
        index = fibo.length
    }
}


function conferirSeNumE() {
    if (num == n2) {
        text = `O número ${num} pertence a sequência de Fibonacci e é o termo número ${index}`;
        aviso = `Parabéns, você acertou em cheio!`
    }
    else {
        text = `Infelizmente o seu número não está na Sequência, mas o número ${num} está entre os valores ${n1} e ${n2} onde  ${n2} é o termo número ${index}`;
        aviso = `Não foi dessa vez!`
    }
    show();
}

function show() {
    document.querySelector(".text").innerHTML = text;
    document.querySelector(".aviso").innerHTML = aviso;
    console.log(text);
    console.log(n1);
    console.log(n2);
    console.log(num);
    console.log(index);
}