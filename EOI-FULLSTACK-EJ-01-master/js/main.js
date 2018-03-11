

// Devuelve EL NOMBRE del mayor de los tres
function quienEsMayorDeLosTres(p1, p2, p3){
    console.log(p1);
    console.log(p2);
    console.log(p3);
    if(compareAge(p1,p2,p3)) return p1.name;
    if(compareAge(p2,p1,p3)) return p2.name;
    if(compareAge(p3,p1,p2)) return p3.name;
    return "ninguno";
}

// Devuelve en forma de boolean el resultado
// NOTA: las mayúsculas y minúsculas no se consideran distintas
function hayAlgunCorreoRepetido(p1, p2, p3){
    var e1 = p1.email.toLowerCase();
    var e2 = p2.email.toLowerCase();
    var e3 = p3.email.toLowerCase();
    return (e1.email===e2.email || e1.email === e3.email || e2.email === e3.email );
}    

// Pregunta al usuario por su edad y devuelve en boolean la respuesta
function elUsuarioEsMayorQueLosTres(p1, p2, p3){
    var usuario = prompt("Que edad tienes")
    return (parseInt(usuario) > parseInt(p2.age) && parseInt(usuario) > parseInt(p3.age) && parseInt(usuario) > parseInt(p1.age))
}

// Devuelve el número de los que tienen correo acabado en gmail.com
// RESTRICCIÓN: Resuélvelo usando los métodos .indexOf() ó .lastIndexOf()
// RESTRICCIÓN: Resuélvelo usando el método .search()
// RESTRICCIÓN: Resuélvelo usando los métodos .substring() ó substr()
// RESTRICCIÓN: Plantea otra forma de solucionarlo que no use ninguno de los métodos de arriba
// Deja descomentada solo una de las soluciones
function cuantosTienenCorreoDeGmailDotCom(p1, p2, p3){
    var numberOfEmails=0;
    numberOfEmails+=existGmail(p1);
    numberOfEmails+=existGmail(p2);
    numberOfEmails+=existGmail(p3);

    
    // if(p1.email.substring(p1.email.length -9) === "gmail.com"){
    //     numberOfEmails++;
    // }
    // if(p2.email.substring(p2.email.length -9)=== "gmail.com"){
    //     numberOfEmails++;
    // }
    // if(p3.email.substring(p3.email.length -9)=== "gmail.com"){
    //     numberOfEmails++;
    // }

    // if(p1.email.indexOf('gmail.com')!= -1){
    //     numberOfEmails++;
    // }
    // if(p2.email.indexOf("gmail.com")!= -1){
    //     numberOfEmails++;
    // }
    // if(p3.email.indexOf("gmail.com")!= -1){
    //     numberOfEmails++;
    // }


    // if(p1.email.search('gmail.com')!= -1){
    //     numberOfEmails++;
    // }
    // if(p2.email.search("gmail.com")!= -1){
    //     numberOfEmails++;
    // }
    // if(p3.email.search("gmail.com")!= -1){
    //     numberOfEmails++;
    // }
    
    return numberOfEmails;
}


function existGmail(p){
    if(p.email.search("gmail.com")!= -1){
        return 1 ;  
    } 
    return 0;
}

function compareAge(p1,p2,p3) {
    if(parseInt(p1.age) > parseInt(p2.age) && parseInt(p1.age) > parseInt(p3.age)){
        return true;
    }
    return false;
}