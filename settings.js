
function foodSelection(element) {
    let border = document.querySelector('.foodCards .chooser');
    let icon = document.querySelector('.foodCards .chooser .icon-check');

    if (border !== null) {
        border.classList.remove('borderGreen');
        icon.classList.add('hidden')
    }
    element.classList.add('borderGreen');
    icon.classList.remove('hidden');
}