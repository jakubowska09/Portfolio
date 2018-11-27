// button
let graph = document.getElementById("graphisme")
let ng = document.getElementById("ng")
let site = document.getElementById("siteweb")


let sg = document.getElementById("sectiongraphisme")
let sd = document.getElementById("sectiondesign")

function voir() {
    let activee = document.querySelector(".d-none2");
    sg.classList.add("d-block");
    sd.classList.remove("d-block");
    sd.classList.add("d-none2");
    // activee.classList.remove("d-none2");
}
graph.addEventListener("click", voir);


function appli() {
    let activee = document.querySelector(".d-none2");
    sd.classList.add("d-block");
    sg.classList.add("d-none");
    sg.classList.remove("d-block");

    // activee.classList.remove("d-none2")
}
ng.addEventListener("click", appli)