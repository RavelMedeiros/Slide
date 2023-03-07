let imagem = document.querySelector("#imagem")
let botaoAvancar = document.querySelector("#avancar")
let botaoRetornar = document.querySelector("#retornar")
let imagens = [
    "imagem1.jpg",
    "imagem2.jpg",
    "imagem3.jpg",
    "imagem4.jpg",
    "imagem5.jpg"
]
let contador = 0

botaoAvancar.addEventListener("click", avancar)
botaoRetornar.addEventListener("click", retornar)

function avancar() {
    contador++
    if (contador >= imagens.length) {
        contador = 0
    }
    imagem.setAttribute("src", imagens[contador])
}

function retornar() {
    contador--
    if (contador < 0) {
        contador = 4
    }
    imagem.setAttribute("src", imagens[contador])
}
