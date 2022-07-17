//selecionar o card
//seleciona a borda ou adicionar
//selecionar o check se o card estiver clicado e remover quando não está selecionado

/*function foodSelection() {
    let card = document.querySelector(".chooser");
    let icon = document.querySelector(".icon-check");
    if (card !== null) {
        card.classList.add("borderGreen");
        icon.classList.remove("hidden");
    }
    else {
        card.classList.remove("borderGreen");
        icon.classList.add("hidden");

    }
}*/



function foodSelection(element, foodsName, value) {
    console.log(element, foodsName, value)
    let card = document.querySelector(".borderGreen");
    let icon = document.querySelector(".icon-check");
    if (card !== null) {
        card.classList.remove('borderGreen'); //nao precisa está no DOM, A Classe da borda
        icon.classList.add('hidden');
    }
    element.classList.add('borderGreen'); //nao precisa está no DOM, A Classe da borda
    element.classList.remove('hidden');
    greenLight();
}

function drinkSelection(element) {
    let card = document.querySelector(".drinkCards .borderGreen"); //para não desmarcar os cards do foodSelectio é necessário fazer uma descrição exata do elemento que quero manipular (esse eu peguei o conteiner que tem descendentes com a borda)
    let icon = document.querySelector(".drinkCards .borderGreen .icon-check");
    if (card !== null) {
        card.classList.remove('borderGreen'); //nao precisa está no DOM, A Classe da borda
        icon.classList.add('hidden');
    }
    element.classList.add('borderGreen'); //nao precisa está no DOM, A Classe da borda
    element.classList.remove('hidden');
    greenLight();
}


function dessertSelection(element) {
    let card = document.querySelector(".dessertCards .borderGreen");
    let icon = document.querySelector(" .dessertCards .borderGreen .icon-check");
    if (card !== null) {
        card.classList.remove('borderGreen'); //nao precisa está no DOM, A Classe da borda
        icon.classList.add('hidden');
    }
    element.classList.add('borderGreen'); //nao precisa está no DOM, A Classe da borda
    element.classList.remove('hidden');
    greenLight();
}


function greenLight() {
    console.log(greenLight)
    let green = document.querySelector('.border')
    if (foodSelection !== null && drinkSelection !== null && dessertSelection !== null) {
        green.classList.remove('changeColor')
        green.innerHTML = '<p>Finalizar Pedido</p>'
    }
   green.classList.add('changeColor')
}

function fazerPedido(){
    console.log(fazerPedido)
}