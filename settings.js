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


/*let food = null;
let nameF = null;
let drink = null;
let dessert = null;
let total = 0;*/

function foodSelection(element, foodsName, value) {
    console.log(element, foodsName, value)
    let card = document.querySelector(".borderGreen");
    let icon = document.querySelector(".hidden");
    if (card !== null) {
        card.classList.remove('borderGreen'); //nao precisa está no DOM, A Classe da borda
        icon.classList.add('hidden');
    }

    element.classList.add('borderGreen'); //nao precisa está no DOM, A Classe da borda
   /* nameF = foodsName;
    total = value;
    food = element.innerHTML;
    greenLight();*/
}
/*
function drinkSelection(element) {
    let card = document.querySelector(".drinkCards .borderGreen"); //para não desmarcar os cards do foodSelectio é necessário fazer uma descrição exata do elemento que quero manipular (esse eu peguei o conteiner que tem descendentes com a borda)
    let icon = document.querySelector(".drinkCards .borderGreen .icon-check.hidden");
    if (card !== null) {
        card.classList.remove('borderGreen'); //nao precisa está no DOM, A Classe da borda
        icon.classList.add('hidden');
    }
    element.classList.add('borderGreen'); //nao precisa está no DOM, A Classe da borda
    element.classList.remove('hidden');
    drink = element.innerHTML;
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
    dessert = element.innerHTML;
    greenLight();
}


function greenLight(element) {
    let green = document.querySelector('.changeColor')
    if (foodSelection !== undefined && drinkSelection !== undefined && dessertSelection !== undefined) {
        green.classList.remove('changeColor')

    }
    element.classList.add('changeColor');
    element.innerHTML = '<p>Finalizar Pedido</p>';
}

function fazerPedido() {
    console.log(fazerPedido)
}

/*function modal(){

}*/

//quando eu clicar no último card o modal deve aparececr