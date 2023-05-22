let el = document.getElementsByTagName("strong");

function highlight() {
    for (let i = 0; i < el.length; i++) {
        el[i].style.color = "green";
    }
}

function return_normal() {
    for (let i = 0; i < el.length; i++) {
        el[i].style.color = "black";
    }
}

    


