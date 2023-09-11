const entrada= document.getElementById("entrada");
const btn= document.getElementById("btn");

let numSecreto=86;


btn.addEventListener("click", function(){
    console.log("o botão foi clicado");


    console.log( "funciona" )

if (entrada.value > numSecreto) {
    alert("o número de entrada é menor.")
} else if(entrada.value < numSecreto) {
    alert("o número de entrada é maior.")
    
}else 
alert("Parabens!!! você caretou")


})    
