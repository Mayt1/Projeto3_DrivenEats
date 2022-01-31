let comidaSelecionada
let bebidaSelecionada
let sobremesaSelecionada

//comidas


function selecionarComida(qualComida) {
    deselecionarComida()
    //iconeshow(qualComida)
    const comida = document.querySelector("." + qualComida)
    comidaSelecionada = qualComida
    comida.classList.add("selecionado1")

}

function deselecionarComida() {
    //iconehidden()
    const escolherComida = document.querySelector(".selecionado1")
    if (escolherComida !== null) {
        escolherComida.classList.remove("selecionado1")
    }
    
}
/*
function iconeshow(qualComida){
    const icone = document.querySelector(".food-select") //ta pegando so o primeiro filho, mesmo colocando mais especifico nao funciona
    icone.classList.remove('hidden')
}

function iconehidden(){
    const escolhericone = document.querySelector(".food-select") // ele esta tirando e colocando o primeiro filho, essa funçao funciona mas nao do jeito q eu gostaria
    if (escolhericone !== null) {
        escolhericone.classList.add("hidden")
    }

}
*/
//bebidas
function selecionarBebida(qualBebida) {
    deselecionarBebida()
    const bebida = document.querySelector("." + qualBebida)
    bebidaSelecionada = qualBebida
    bebida.classList.add("selecionado2")

}

function deselecionarBebida() {
    const escolherbebida = document.querySelector(".selecionado2")
    if (escolherbebida !== null) {
        escolherbebida.classList.remove("selecionado2")
    }
}

//sobremesas
function selecionarSobremesa(qualSobremesa) {
    deselecionarSobremesa()
    const sobremesa = document.querySelector("." + qualSobremesa)
    sobremesaSelecionada = qualSobremesa
    sobremesa.classList.add("selecionado3")

}

function deselecionarSobremesa() {
    const escolherSobremesa= document.querySelector(".selecionado3")
    if (escolherSobremesa !== null) {
        escolherSobremesa.classList.remove("selecionado3")
    }
}

function acionarbotao() {
    if ((comidaSelecionada !== null) && (bebidaSelecionada !== null) && (sobremesaSelecionada !== null)) {


    }
}