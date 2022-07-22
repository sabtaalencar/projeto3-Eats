let nameOfFood = null; //title
let nameOfDrink = null;
let nameOfDessert = null;

let priceMeal, priceDessert, priceDrink, total, clientName, clientAddress;


let itemsCount = 0;


// é uma forma de conversão fazer uma função somente para converter, mas o modo mais fácil é converter direto nas funções onde possuem os valores Ah o tofixed e o localeString transformam o number em string
/*function convertionNumber(price) {

    let value = price.toLocaleString('en-US',
    {
        style: 'currency', currency: 'USD'
    })
    
    value = Number(price);

    return price;
}*/

function foodSelection(element, food, value) {


    let cardsFood = document.querySelector(".foodCards .borderGreen"); //div conteiner foodCards e seletor css para os filhos
    let icon = document.querySelector(".foodCards .borderGreen .icon-check")//aqui deve ser especifica a busca para que o classList dê certo

    if (cardsFood !== null) {
        cardsFood.classList.remove("borderGreen");
        icon.classList.add("hidden")

    } else {
        element.classList.add("borderGreen");
        let tag = document.querySelector(".foodCards .borderGreen .icon-check");//deve ser feita uma variável pra declarar o icone pra ele deixar de ser nulo
        tag.classList.remove("hidden");


        itemsCount = itemsCount + 1; //contador o card pra acionar o botao
        console.log(itemsCount)
    }

    nameOfFood = food;//document.querySelector(".title-meal").innerHTML;
    priceMeal = Number(value);//.toFixed(2);//document.querySelector(".priceMeal").innerHTML;
    console.log(nameOfFood)

    actionButton();
}

function drinkSelection(element, drink, value) {


    let card = document.querySelector(".drinkCards .borderGreen"); //para não desmarcar os cards do foodSelectio é necessário fazer uma descrição exata do elemento que quero manipular (esse eu peguei o conteiner que tem descendentes com a borda)
    let icon = document.querySelector(".drinkCards .borderGreen .icon-check");
    if (card !== null) {
        card.classList.remove('borderGreen');
        icon.classList.add("hidden");//nao precisa está no DOM, A Classe da borda
    } else {
        element.classList.add('borderGreen'); //o element é equivalente ao this
        let tag = document.querySelector(".drinkCards .borderGreen .icon-check");
        tag.classList.remove("hidden");

        itemsCount = itemsCount + 1;
        console.log(itemsCount)
    }

    nameOfDrink = drink;
    priceDrink = Number(value)//.toFixed(2);
    console.log(nameOfDrink)
    console.log(priceDrink)

    actionButton();
}


function dessertSelection(element, dessert, value) {


    let cardsDrink = document.querySelector(".dessertCards .borderGreen");
    let icon = document.querySelector(".dessertCards .borderGreen .icon-check")


    if (cardsDrink !== null) {
        cardsDrink.classList.remove("borderGreen");
        icon.classList.add("hidden");
    } else {
        element.classList.add("borderGreen");
        let tag = document.querySelector(".dessertCards .borderGreen .icon-check");
        tag.classList.remove("hidden");

        itemsCount = itemsCount + 1;
        console.log(itemsCount)
    }



    nameOfDessert = dessert; //document.querySelector(".titleDessert").innerHTML; //estou selecionando a classe e acessando o conteúdo da classe no html
    priceDessert = Number(value)//.toFixed(2); //document.querySelector(".priceDessert").innerHTML;
    console.log(nameOfDessert)

    actionButton(); //chamando a função pra que ela reconheça os cards serem acionados
}

//nao tem onclick, nao é necessário
function actionButton() {

    if (itemsCount === 3) {
        const greenButton = document.querySelector(".border"); //pra fazer funcionar fiz classes de nivel e adicionei o opacity
        greenButton.classList.add("changeColor");
        greenButton.innerHTML = `Fechar Pedido`;

    }
}

/* if (nameOfFood !== undefined && nameOfDrink !== undefined && nameOfDessert !== undefined) {
     console.log("oi")
     let greenButton = document.querySelector(".border");
     greenButton.classList.remove("changeColor");
     greenButton.innerHTML = `Fechar Pedido`;
 }
 let button = document.querySelector(".border");
 button.classList.add("changeColor");
 button.innerHTML = `Fechar Pedido`;
 
 
 /* let contador = 0;
  while (contador === 3 ) {
      let greenButton = document.querySelector(".border");
      greenButton.classList.add("changeColor");
      greenButton.innerHTML = `Fechar Pedido`
      contador++;
      console.log(contador)
  }*/



//função fará as pergunats e mostrará o modal
function orderFood() {
    if (itemsCount === 3) {
        clientName = prompt("Tell us your name, please!");
        clientAddress = prompt("And your address!");

        let showModal = document.querySelector(".modal-container");



        let mealTitle = document.querySelector(".mealTitle");
        mealTitle.innerHTML = ` ${nameOfFood}`;
        console.log(mealTitle)

        let foodPrice = document.querySelector(".price-food");
        foodPrice.innerHTML = `$${(priceMeal).toFixed(2)}`;
        console.log(foodPrice)

        let drinkTitle = document.querySelector(".drinkTitle");
        drinkTitle.innerHTML = `${nameOfDrink}`;
        console.log(drinkTitle)

        let drinkPrice = document.querySelector(".price-drink");
        drinkPrice.innerHTML = `$${(priceDrink).toFixed(2)}`
        console.log(drinkPrice)

        let dessertTitle = document.querySelector(".dessertTitle");
        dessertTitle.innerHTML = `${nameOfDessert}`;
        console.log(dessertTitle)

        let dessertPrice = document.querySelector(".price-dessert");
        dessertPrice.innerHTML = `$${(priceDessert).toFixed(2)}`;  //poderia colocar o localestring em cada innerhtml mas resolvi fazer o mais fácil :)
        console.log(dessertPrice)

        total = document.querySelector(".value");
        total.innerHTML = `${Number(priceMeal + priceDessert + priceDrink).toLocaleString('en-US',
            {
                style: 'currency', currency: 'USD'
            })}`
        console.log(total)

        showModal.classList.remove("hidden");

    }
    // showModal.classList.add("hidden");

}


function orderConfirm() {

    let mensagem = `Hi, I would like to order: \n - Food Plate: ${nameOfFood} \n - Drink: ${nameOfDrink} \n - Dessert: ${nameOfDessert} \n Total: ${total} \n Name: ${clientName} \n Address ${clientAddress} `;


    mensagem = encodeURIComponent(mensagem);

    let watsapp = "https://wa.me/5592995049656?text=";
    window.open(watsapp + mensagem);

}

function orderCancel() {


    let cancel = document.querySelector(".modal-container");

    if (cancel !== undefined) {

        cancel.classList.remove("hidden");

    }
    cancel.classList.add("hidden");
    console.log(cancel)
}
