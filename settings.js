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



function foodSelection(){
    let card = document.querySelector(".chooser");
    let icon = document.querySelector(".icon-check");
    if (card !== null) {
        card.classList.contains("borderGreen"); //nao precisa está no DOM, A Classe da borda
        card.classList.toggle("borderGreen");
        icon.classList.contains("hidden");
        icon.classList.toggle("hidden");
    }
}