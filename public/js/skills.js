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
    let act = document.querySelector(".d-none");
    des.classList.add("d-block");
    langague.classList.remove("d-block");
    langague.classList.add("d-none");
    act.classList.remove("d-none");
}
butdesign.addEventListener("click", visualiser);

function coller() {
    let accelerer = document.querySelector(".d-none");
    langague.classList.add("d-block");
    des.classList.remove("d-block");
    des.classList.add("d-none");
    accelerer.classList.remove("d-none");
}
butlangague.addEventListener("click", coller);

