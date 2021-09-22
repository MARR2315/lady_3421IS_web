let simbolo;
let jugador1 = "X";
let jugador2 = "O";
simbolo = prompt("SELECCIONA TU SIMBOLO X u O");
if (simbolo == "X" || simbolo =="x") {
    alert("eres jugador uno");
}
if (simbolo == "O" || simbolo =="o")
{
    alert("eres jugador 2 ");
}
console.log(simbolo);

function Siguiente() {
    let n1 = document.getElementById('n-1').value;
    let n2 = document.getElementById('n-2').value;
    let n3 = document.getElementById('n-3').value;
    let n4 = document.getElementById('n-4').value;
    let n5 = document.getElementById('n-5').value;
    let n6 = document.getElementById('n-6').value;
    let n7 = document.getElementById('n-7').value;
    let n8 = document.getElementById('n-8').value;
    let n9 = document.getElementById('n-9').value;
    console.log(n1,n2);
        if(n1=="x" && n2=="x" && n3 == "x" || n1=="X" && n2=="X" && n3 == "X" ){
            alert("GANO EL JUGADOR 1 ");
        }else if (n1=="o" && n2=="o" && n3 == "o" || n1=="O" && n2=="O" && n3 == "O"){
            alert("GANO EL JUGADOR 2 ");
        }else if(n1=="x" && n5=="x" && n9 == "x" || n1=="X" && n5=="X" && n9 == "X" ){
            alert("GANO EL JUGADOR 1 ");
        }else if (n1=="o" && n5=="o" && n9 == "o" || n1=="O" && n5=="O" && n9 == "O"){
            alert("GANO EL JUGADOR 2 ");
        }else if(n1=="x" && n4=="x" && n7 == "x" || n1=="X" && n4=="X" && n7 == "X" ){
            alert("GANO EL JUGADOR 1 ");
        }else if (n1=="o" && n4=="o" && n7 == "o" || n1=="O" && n4=="O" && n7 == "O"){
            alert("GANO EL JUGADOR 2 ");
        }
        else if(n4=="x" && n5=="x" && n6 == "x" || n4=="X" && n5=="X" && n6 == "X" ){
            alert("GANO EL JUGADOR 1 ");
        }else if (n4=="o" && n5=="o" && n6 == "o" || n4=="O" && n5=="O" && n6 == "O"){
            alert("GANO EL JUGADOR 2 ");
        }
        else if(n7=="x" && n8=="x" && n9 == "x" || n7=="X" && n8=="X" && n9 == "X" ){
            alert("GANO EL JUGADOR 1 ");
        }else if (n7=="o" && n8=="o" && n9 == "o" || n7=="O" && n8=="O" && n9 == "O"){
            alert("GANO EL JUGADOR 2 ");
        }
        else if(n3=="x" && n6=="x" && n9 == "x" || n3=="X" && n6=="X" && n9 == "X" ){
            alert("GANO EL JUGADOR 1 ");
        }else if (n3=="o" && n6=="o" && n9 == "o" || n3=="O" && n6=="O" && n9 == "O"){
            alert("GANO EL JUGADOR 2 ");
        }
        else if(n3=="x" && n5=="x" && n7 == "x" || n3=="X" && n5=="X" && n7 == "X" ){
            alert("GANO EL JUGADOR 1 ");
        }else if (n3=="o" && n5=="o" && n7== "o" || n3=="O" && n5=="O" && n7 == "O"){
            alert("GANO EL JUGADOR 2 ");
        }
        else{
        alert("jugadores empatados");
    }
} 
    

    

    


