let comidaSelecionada
let bebidaSelecionada
let sobremesaSelecionada
let nomeCliente
let enderecoCliente
//comidas


function selecionarComida(qualComida) {
    deselecionarComida()
    //iconeshow()
    const comida = document.querySelector("." + qualComida)
    comidaSelecionada = qualComida
    comida.classList.add("selecionado1")
    showbotao()

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
    showbotao()

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
    showbotao()

}

function deselecionarSobremesa() {
    const escolherSobremesa= document.querySelector(".selecionado3")
    if (escolherSobremesa !== null) {
        escolherSobremesa.classList.remove("selecionado3")
    }
}

function showbotao() {
    if ((comidaSelecionada !== undefined) && (bebidaSelecionada !== undefined) && (sobremesaSelecionada !== undefined)) {
        const botaoAparece = document.querySelector(".ativo")
        botaoAparece.classList.remove("hidden")

        const botaoSome = document.querySelector(".button")
        botaoSome.classList.add("hidden")
    }
}

function pedirDados() {
    nomeCliente = prompt("Qual é o seu nome?")
    enderecoCliente = prompt("Qual o seu endereço?")
    let message;
    message ="Olá, gostaria de fazer o pedido:\n- Prato:"+" "+comidaSelecionada+"\n- Bebida:" + " "+bebidaSelecionada+"\n- Sobremesa:" + " "+sobremesaSelecionada+ "\nNome: "+nomeCliente+"\nEndereço: "+enderecoCliente;
    
    window.open("https://wa.me/5534993056450?text="+encodeURI(message));
}
