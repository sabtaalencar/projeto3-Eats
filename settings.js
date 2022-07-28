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
        itemsCount = itemsCount - 1; //contador usado para que os cards sejam resetados quando for mudado pra outro cards na mesma seção e não seja contado no contador de incremento

    } else {
        element.classList.add("borderGreen");
        let tag = document.querySelector(".foodCards .borderGreen .icon-check");//deve ser feita uma variável pra declarar o icone pra ele deixar de ser nulo
        tag.classList.remove("hidden");


        itemsCount = itemsCount + 1; //contador o card pra acionar o botao

    }

    nameOfFood = food;//document.querySelector(".title-meal").innerHTML;
    priceMeal = Number(value);//.toFixed(2);//document.querySelector(".priceMeal").innerHTML;


    actionButton();
}

function drinkSelection(element, drink, value) {


    let card = document.querySelector(".drinkCards .borderGreen"); //para não desmarcar os cards do foodSelection é necessário fazer uma descrição exata do elemento que quero manipular (esse eu peguei o conteiner que tem descendentes com a borda)
    let icon = document.querySelector(".drinkCards .borderGreen .icon-check");
    if (card !== null) {
        card.classList.remove('borderGreen');
        icon.classList.add("hidden");//nao precisa está no DOM, A Classe da borda
        itemsCount = itemsCount - 1;

    } else {
        element.classList.add('borderGreen'); //o element é equivalente ao this
        let tag = document.querySelector(".drinkCards .borderGreen .icon-check");
        tag.classList.remove("hidden");

        itemsCount = itemsCount + 1;

    }

    nameOfDrink = drink;
    priceDrink = Number(value)//.toFixed(2);

    actionButton();
}


function dessertSelection(element, dessert, value) {


    let cardsDrink = document.querySelector(".dessertCards .borderGreen");
    let icon = document.querySelector(".dessertCards .borderGreen .icon-check")


    if (cardsDrink !== null) {
        cardsDrink.classList.remove("borderGreen");
        icon.classList.add("hidden");
        itemsCount = itemsCount - 1;
    } else {
        element.classList.add("borderGreen");
        let tag = document.querySelector(".dessertCards .borderGreen .icon-check");
        tag.classList.remove("hidden");

        itemsCount = itemsCount + 1;

    }



    nameOfDessert = dessert; //document.querySelector(".titleDessert").innerHTML; //estou selecionando a classe e acessando o conteúdo da classe no html
    priceDessert = Number(value)//.toFixed(2); //document.querySelector(".priceDessert").innerHTML;


    actionButton(); //chamando a função pra que ela reconheça os cards serem acionados
}

//nao tem onclick, nao é necessário
function actionButton() {
    if (itemsCount === 3) {
        const greenButton = document.querySelector(".border"); //pra fazer funcionar fiz classes de nivel e adicionei o opacity
        greenButton.classList.add("changeColor");
        greenButton.innerHTML = `Fechar Pedido`;
    } else {
       /* if(itemsCount !== null){ 
            const buttonReset = document.querySelector('.border');
            buttonReset.classList.remove("changeColor");
            buttonReset.innerHTML = ` Select  3 items <br />to complete the order`
            console.log(buttonReset)
        }*/
        buttonReset();
    }
}

//adicione o reset caso o usuário desclique os cards
    function buttonReset(){
        if(itemsCount !== null){ //adicione o reset caso o usuário desclique os cards
            const buttonReset = document.querySelector('.border');
            buttonReset.classList.remove("changeColor");
            buttonReset.innerHTML = ` Select  3 items <br />to complete the order`
            console.log(buttonReset)
        }
    }
    /* ESSE METODO TB FUNCIONA
    if (nameOfFood && nameOfDrink && nameOfDessert) {
         let greenButton = document.querySelector(".border");
         greenButton.classList.remove("changeColor");
    
     }
     
     let button = document.querySelector(".border");
     button.classList.add("changeColor");
     button.innerHTML = `Fechar Pedido`;*/



/*function buttonReset(cartaClicada) {
    
    console.log(cartaClicada)
    cartaClicada.classList.remove('changeColor')

}*/
//função fará as pergunats e mostrará o modal
function orderFood() {
    if (itemsCount === 3) {
        clientName = prompt("Tell us your name, please!");
        clientAddress = prompt("And your address!");


        let showModal = document.querySelector(".modal-container");

        let mealTitle = document.querySelector(".mealTitle");
        mealTitle.innerHTML = ` ${nameOfFood}`;


        let foodPrice = document.querySelector(".price-food");
        foodPrice.innerHTML = `$${(priceMeal).toFixed(2)}`;


        let drinkTitle = document.querySelector(".drinkTitle");
        drinkTitle.innerHTML = `${nameOfDrink}`;


        let drinkPrice = document.querySelector(".price-drink");
        drinkPrice.innerHTML = `$${(priceDrink).toFixed(2)}`

        let dessertTitle = document.querySelector(".dessertTitle");
        dessertTitle.innerHTML = `${nameOfDessert}`;


        let dessertPrice = document.querySelector(".price-dessert");
        dessertPrice.innerHTML = `$${(priceDessert).toFixed(2)}`;  //poderia colocar o localestring em cada innerhtml mas resolvi fazer o mais fácil :)


        total = document.querySelector(".value");
        total.innerHTML = `${Number(priceMeal + priceDessert + priceDrink).toLocaleString('en-US',
            {
                style: 'currency', currency: 'USD'
            })}`

        showModal.classList.remove("hidden");

    }
    // showModal.classList.add("hidden");
}


function orderConfirm() {

    let mensagem = `Hi, I would like to order: \n - Food Plate: ${nameOfFood} \n - Drink: ${nameOfDrink} \n - Dessert: ${nameOfDessert} \n Total: ${Number(priceMeal + priceDessert + priceDrink).toLocaleString('en-US',
        {
            style: 'currency', currency: 'USD'
        })} \n Name: ${clientName} \n Address ${clientAddress} `;


    mensagem = encodeURIComponent(mensagem);

    let watsapp = "https://wa.me/5592995049656?text=";
    window.open(watsapp + mensagem); //window.open tem prblemas de segurança melhor usar href

}

function orderCancel() {


    let cancel = document.querySelector(".modal-container");

    if (cancel !== undefined) {

        cancel.classList.remove("hidden");

    }
    cancel.classList.add("hidden");

    // location.reload();
}

//função de recarregar a página quando o cancel button é acionado
//function pageReload() {
let btn = document.querySelector("#refresh");
btn.addEventListener("click", function () {

    location.reload();
});
//funciona tb somente com o metodo location.reload(); dentro da função