function getBotResponse(input) {
    //Piedra papel o tijreas
    if (input == "piedra") {
        return "papel";
    } else if (input == "papel") {
        return "tijeras";
    } else if (input == "tijeras") {
        return "piedra";
    }

    //Respuestas 
    if (input == "hola") {
        return "¡Hola! ¿Cuál categoría de zapatos desear encontrar?";
    } else if (input == "adios") {
        return "¡Hasta luego!";
    } else if (input == "caballero") {
        var str = "paginas/coleccionHombre.html";
        var link = str.link("paginas/coleccionHombre.html");
        var msg =link;
        return "Ingresa al siguiente enlace: " + msg;
    }
    else if (input == "Caballero") {
        var str = "paginas/coleccionHombre.html";
        var link = str.link("paginas/coleccionHombre.html");
        var msg =link;
        return "Ingresa al siguiente enlace: " + msg;
    }
    else if (input == "Hombre") {
        var str = "paginas/coleccionHombre.html";
        var link = str.link("paginas/coleccionHombre.html");
        var msg =link;
        return "Ingresa al siguiente enlace: " + msg;
    }
    else if (input == "hombre") {
        var str = "paginas/coleccionHombre.html";
        var link = str.link("paginas/coleccionHombre.html");
        var msg =link;
        return "Ingresa al siguiente enlace: " + msg;
    }
    else if (input == "dama") {
        var str = "paginas/coleccionMujer.html";
        var link = str.link("paginas/coleccionMujer.html");
        var msg =link;
        return "Ingresa al siguiente enlace: " + msg;
    }
    else if (input == "Dama") {
        var str = "paginas/coleccionMujer.html";
        var link = str.link("paginas/coleccionMujer.html");
        var msg =link;
        return "Ingresa al siguiente enlace: " + msg;
    }
    else if (input == "Mujer") {
        var str = "paginas/coleccionMujer.html";
        var link = str.link("paginas/coleccionMujer.html");
        var msg =link;
        return "Ingresa al siguiente enlace: " + msg;
    }
    else if (input == "mujer") {
        var str = "paginas/coleccionMujer.html";
        var link = str.link("paginas/coleccionMujer.html");
        var msg =link;
        return "Ingresa al siguiente enlace: " + msg;
    }
    else if (input == "niño") {
        var str = "paginas/coleccionNino.html";
        var link = str.link("paginas/coleccionNino.html");
        var msg =link;
        return "Ingresa al siguiente enlace: " + msg;
    }
    else if (input == "Niño") {
        var str = "paginas/coleccionNino.html";
        var link = str.link("paginas/coleccionNino.html");
        var msg =link;
        return "Ingresa al siguiente enlace: " + msg;
    }
    else if (input == "nino") {
        var str = "paginas/coleccionNino.html";
        var link = str.link("paginas/coleccionNino.html");
        var msg =link;
        return "Ingresa al siguiente enlace: " + msg;
    }
    else if (input == "Nino") {
        var str = "paginas/coleccionNino.html";
        var link = str.link("paginas/coleccionNino.html");
        var msg =link;
        return "Ingresa al siguiente enlace: " + msg;
    }
    else {
        return "¡Intenta ingresando otra palabra!";
    }
}