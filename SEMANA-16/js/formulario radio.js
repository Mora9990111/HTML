function ingresar(){
    let nombre,edad,estado, institucion;
    nombre=document.getElementById("nom").value;
    edad=document.getElementById("ed").value;
    institucion=document.getElementById("ins").value;
    //CONDICION DE COMPROBAR CHECHESD RADIO
    if (document.getElementById("radio1").checked){
        estado="Sin nivel de estudios";
    }
    else if (documentElementById("radio2").checked){
        estado="Primaria";
    }else if (document.getElementById("radio3").checked){
        estado="Secundaria";
    }else if (document.getElementById("radio4").checked){
        estado="Técnico";
    }else if (document.getElementById("radio5").checked){
        estado="Universitario";
    }else if (document.getElementById("radio6").checked){
        estado="Otro tipo de estudio";
    }
    alert("El estudiante:..."+nombre+" "+" con edad de:..."+edad+"años "+" "+"\n"+"Nivel del estudio..."+estado+"\n"+"Graduado en la institución..."+institucion);

}