function foodSelection(element){
    let cards = document.querySelector(".borderGreen");

    if(cards !== null){
        cards.classList.remove("borderGreen")
    }
    element.classList.add("borderGreen")
}