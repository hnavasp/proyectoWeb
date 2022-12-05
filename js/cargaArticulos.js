var datos;
var urlApp = "https://developer77-77.github.io/ApiArticulos/db.json";
function callService() {
    $.ajax({
        url: urlApp,
        type: "get",
        dataType: "json",
        success: onSuccess,
        error: onError
    });
}
function onSuccess(data) {
    datos = data;
    procesarDatos();
}

function filtrarTenisMujer() {
    let articulosContainer = document.getElementById("menu-container-id");
    let htmlDinamico = "";
    datos.articulos.forEach(articulo => {
        if (articulo.clasificacion == "tenismujer") {
            htmlDinamico += "<div class='col'>";
            htmlDinamico += "<div class='card card-cover h-100 overflow-hidden text-bg-dark rounded-10 shadow-lg m-10' style=\"background-image: url('" + articulo.imagen + "');\">";
            htmlDinamico += "<div class='d-flex flex-column h-100 p-5 pb-5 ml-5 mt-5 text-white text-shadow-1'>";
            htmlDinamico += "<h4 class='display-6 lh-1 fw-bold m text-center'>" + articulo.nombre + "</h4>";
            htmlDinamico += "<h6 class='display-6 lh-1 fw-bold text-center'>" + articulo.precio + "</h6>";
            htmlDinamico += "</div>";
            htmlDinamico += "</div>";
            htmlDinamico += "</div>";
        }

    });
    articulosContainer.innerHTML = "";
    articulosContainer.innerHTML = htmlDinamico;
    console.log(htmlDinamico);
}
function filtrarTaconMujer() {
    let articulosContainer = document.getElementById("menu-container-id");
    let htmlDinamico = "";
    datos.articulos.forEach(articulo => {
        if (articulo.clasificacion == "taconmujer") {
            htmlDinamico += "<div class='col'>";
            htmlDinamico += "<div class='card card-cover h-100 overflow-hidden text-bg-dark rounded-10 shadow-lg m-10' style=\"background-image: url('" + articulo.imagen + "');\">";
            htmlDinamico += "<div class='d-flex flex-column h-100 p-5 pb-5 ml-5 mt-5 text-white text-shadow-1'>";
            htmlDinamico += "<h4 class='display-6 lh-1 fw-bold m text-center'>" + articulo.nombre + "</h4>";
            htmlDinamico += "<h6 class='display-6 lh-1 fw-bold text-center'>" + articulo.precio + "</h6>";
            htmlDinamico += "</div>";
            htmlDinamico += "</div>";
            htmlDinamico += "</div>";
        }

    });
    articulosContainer.innerHTML = "";
    articulosContainer.innerHTML = htmlDinamico;
    console.log(htmlDinamico);
}

function filtrarBotaDama() {
    let articulosContainer = document.getElementById("menu-container-id");
    let htmlDinamico = "";
    datos.articulos.forEach(articulo => {
        if (articulo.clasificacion == "botaMujer") {
            htmlDinamico += "<div class='col'>";
            htmlDinamico += "<div class='card card-cover h-100 overflow-hidden text-bg-dark rounded-10 shadow-lg m-10' style=\"background-image: url('" + articulo.imagen + "');\">";
            htmlDinamico += "<div class='d-flex flex-column h-100 p-5 pb-5 ml-5 mt-5 text-white text-shadow-1'>";
            htmlDinamico += "<h4 class='display-6 lh-1 fw-bold m text-center'>" + articulo.nombre + "</h4>";
            htmlDinamico += "<h6 class='display-6 lh-1 fw-bold text-center'>" + articulo.precio + "</h6>";
            htmlDinamico += "</div>";
            htmlDinamico += "</div>";
            htmlDinamico += "</div>";
        }

    });
    articulosContainer.innerHTML = "";
    articulosContainer.innerHTML = htmlDinamico;
    console.log(htmlDinamico);
}
function filtrarSandaliaMujer() {
    let articulosContainer = document.getElementById("menu-container-id");
    let htmlDinamico = "";
    datos.articulos.forEach(articulo => {
        if (articulo.clasificacion == "sandaliamujer") {
            htmlDinamico += "<div class='col'>";
            htmlDinamico += "<div class='card card-cover h-100 overflow-hidden text-bg-dark rounded-10 shadow-lg m-10' style=\"background-image: url('" + articulo.imagen + "');\">";
            htmlDinamico += "<div class='d-flex flex-column h-100 p-5 pb-5 ml-5 mt-5 text-white text-shadow-1'>";
            htmlDinamico += "<h4 class='display-6 lh-1 fw-bold m text-center'>" + articulo.nombre + "</h4>";
            htmlDinamico += "<h6 class='display-6 lh-1 fw-bold text-center'>" + articulo.precio + "</h6>";
            htmlDinamico += "</div>";
            htmlDinamico += "</div>";
            htmlDinamico += "</div>";
        }
    });
    articulosContainer.innerHTML = "";
    articulosContainer.innerHTML = htmlDinamico;
    console.log(htmlDinamico);
}

function onError(jqXHR, textstatus, errorThrow) {
    alert("Mensaje de Error: " + errorThrow + "\nURL " + urlApp);
}
function procesarDatos() {
    let articulosContainer = document.getElementById("menu-container-id");
    let htmlDinamico = "";
    datos.articulos.forEach(articulo => {
        htmlDinamico += "<div class='col'>";
        htmlDinamico += "<div class='card card-cover h-100 overflow-hidden text-bg-dark rounded-10 shadow-lg m-10' style=\"background-image: url('" + articulo.imagen + "');\">";
        htmlDinamico += "<div class='d-flex flex-column h-100 p-5 pb-5 ml-5 mt-5 text-white text-shadow-1'>";
        htmlDinamico += "<h4 class='display-6 lh-1 fw-bold m text-center'>" + articulo.nombre + "</h4>";
        htmlDinamico += "<h6 class='display-6 lh-1 fw-bold text-center'>" + articulo.precio + "</h6>";
        htmlDinamico += "</div>";
        htmlDinamico += "</div>";
        htmlDinamico += "</div>";
    });
    articulosContainer.innerHTML = "";
    articulosContainer.innerHTML = htmlDinamico;
    console.log(htmlDinamico);
}

