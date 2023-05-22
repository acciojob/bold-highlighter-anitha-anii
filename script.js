let element = document.getElementsByTagName("strong");

function highlight() {
    for (let i = 0; i < element.length; i++) {
        element[i].style.color = "rgb(0, 128, 0)";
    }
}

function return_normal() {
    for (let i = 0; i < element.length; i++) {
        element[i].style.color = "black";
    }
}

    


