// button
let graph = document.getElementById("graphisme")
let ng = document.getElementById("ng")
let site = document.getElementById("siteweb")


let sg = document.getElementById("sectiongraphisme")
let sd = document.getElementById("sectiondesign")
let web = document.getElementById("sectionweb")
function voir() {

    sg.classList.add("d-block");
    sd.classList.add("d-none2");
    sd.classList.remove("d-block");
    web.classList.remove("d-block")

}
graph.addEventListener("click", voir);


function appli() {

    sd.classList.add("d-block");
    sg.classList.add("d-none2");
    sg.classList.remove("d-block");
    web.classList.add("d-none2")
    web.classList.remove("d-block")

}
ng.addEventListener("click", appli)


function wagg() {

    web.classList.add("d-block");
    sd.classList.add("d-none2");
    sd.classList.remove("d-block");
    sg.classList.add("d-none2");
    sg.classList.remove("d-block");


}
site.addEventListener("click", wagg);
