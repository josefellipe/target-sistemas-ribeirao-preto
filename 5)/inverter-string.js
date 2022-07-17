let button = document.getElementById("button");
let entrada = [];
let invertido = [];
let textoInvertido = [];

button.addEventListener("click", () => {
    entradaString();
})

function entradaString() {
    entrada = document.getElementById("entrada").value;
    entrada = entrada.slice("");
    inverterString();
}

function inverterString() {
    let i = 0;
    let t = entrada.length - 1;
    //esse while entrou no lugar da função entrada.reverse()
    while (i <= t) {
        invertido[i] = entrada[t - i];
        i = i + 1;
    }
    textoInvertido = invertido.join("");
    show();
}

function show() {
    document.querySelector(".saida").innerHTML = textoInvertido;
    console.log(textoInvertido);
}