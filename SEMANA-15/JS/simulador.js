function calcular(){
    var n1 =document.getElementById("valoralorC").value;
    var n2 =document.getElementById("Numc").value;
    var n3 =document.getElementById("Interes").value;
    var ValorA=parseFloat(n1)*parseFloat(n3)
    var vALORB=(parseFloat(n1)*(1+parseFloat(n2)*parseFloat(n3)));
    document.getElementById("ValorA").value=ValorA;
    document.getElementById("ValorB").value=ValorB.toFixed(0);
}