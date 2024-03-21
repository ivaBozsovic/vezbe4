let listaDestinacija=document.getElementById("lista-destinacija");
console.log(listaDestinacija);

let naslov=document.getElementsByClassName("title");
console.log(naslov);

let element=document.getElementsByTagName("li");
console.log(element);

let wrap=document.querySelector("#wrapper");
console.log(wrap);

let destinacije=document.querySelectorAll(".naziv");
console.log(destinacije);

console.log("Parent nod liste destinacije je:",listaDestinacija.parentNode);
console.log("Child node su:",listaDestinacija.childNodes);

//childNodes  - vraca sve elemente
//children - vraca samo tagove HTML elemente

console.log("Lista destinacija next sibling je:",listaDestinacija.nextElementSibling);
console.log("Lista destinacija previous sibling je:",listaDestinacija.previousElementSibling);

let banner=document.querySelector("#page-banner");
console.log("Node name je:",banner.nodeName);
console.log("Node type je:",banner.nodeType);
console.log("Node value je:",banner.nodeValue);

let destinacija1=document.querySelector(".naziv");
//destinacija1.textContent="Grad svetlosi";
destinacija1.innerHTML="<b>Grad</b> svetlosi";

let dugmici=document.querySelectorAll(".obrisi");
console.log(dugmici);

Array.from(dugmici).forEach(function(dugme){
    dugme.addEventListener("click",function(e){
        const li=e.target.parentNode;
        let ul=li.parentNode;
        ul.removeChild(li);
    })
})

let forme=document.forms;
console.log(forme);

let forma1=document.forms["dodaj-destinaciju"];
console.log(forma1);

forma1.addEventListener("submit",function(e){
    e.preventDefault();
    let vrednost=document.forms["dodaj-destinaciju"]["polje"];
    console.log(vrednost);
})