// Variables Globales
var map;
var marker;
var geoLoc = navigator.geolocation;

//Renderizar rutas
var directionsService;
var directionsDisplay;

//Latitud y Longitud 
var LatLng = { lat: 10.014970, lng: -84.214422 };

//Función que "enciende" el mapa
function initMap()
{
    //Creamos el mapa que recibe del HTML y un objeto con el zoom y coordenadas
    map = new google.maps.Map(document.getElementById("map"), {
        center: LatLng,
        zoom: 14,
        mapTypeId: 'roadmap'
    });

    //marcador por defecto
    new google.maps.Marker({
        position: LatLng,
        map,
        title: "Zapateria nuevo estilo",
    });
    
    //Creamos objetos para renderizar rutas
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
}
