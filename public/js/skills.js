let des = document.querySelector("#graphic")
let langague = document.querySelector("#lang")

let butall = document.getElementById("bnt1")
let butdesign = document.getElementById("bnt2")
let butlangague = document.getElementById("bnt3")


function affiche() {
    let activee = document.querySelector(".d-none");
    des.classList.add("d-block");
    langague.classList.add("d-block");
    activee.classList.remove("d-none");
}
butall.addEventListener("click", affiche);

function visualiser() {
    let activee = document.querySelector(".d-none");
    des.classList.add("d-block");
    activee.classList.remove("d-none");
}
butdesign.addEventListener("click", visualiser);

function coller() {
    let activee = document.querySelector(".d-none");
    des.classList.add("d-none");
    langague.classList.add("d-block");
    activee.classList.remove("d-none");
}
butlangague.addEventListener("click", coller);

