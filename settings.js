function foodSelection(element) {
    let cardsFood = document.querySelector(".borderGreen");


    if (cardsFood !== null) {
        cardsFood.classList.remove("borderGreen");

    }
    element.classList.add("borderGreen");

}

function drinkSelection(element) {
    let card = document.querySelector(".drinkCards .borderGreen"); //para não desmarcar os cards do foodSelectio é necessário fazer uma descrição exata do elemento que quero manipular (esse eu peguei o conteiner que tem descendentes com a borda)

    if (card !== null) {
        card.classList.remove('borderGreen'); //nao precisa está no DOM, A Classe da borda
    }
    element.classList.add('borderGreen'); //nao precisa está no DOM, A Classe da borda


}


function dessertSelection(element) {
    let cardsDrink = document.querySelector(".dessertCards .borderGreen");
    let icon = document.querySelector(".dessertCards .icon-check")
    console.log(icon)


    if (cardsDrink !== null) {
        cardsDrink.classList.remove("borderGreen");

    }
    element.classList.add("borderGreen");

}
