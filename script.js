let elements = document.getElementsByTagName("strong");

function highlight() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "rgb(0, 128, 0)";
    }
}

function return_normal() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "black";
    }
}


    


