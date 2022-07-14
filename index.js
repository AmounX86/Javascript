var x = document.getElementById("test-header");
x.innerText = "Changed by Javascript";
x.innerHTML = "Atha";
document.bgColor = "yellow";

function asd(){
    console.log(x.innerHTML);
    console.log(x.innerText);
    console.log(x.textContent);
}
