$(document).ready(function () {
    
   // INFORMAR OS POSTOS DE SAUDE
   var locations = [
    ['Varzea', -8.047606718647547, -34.95536057705963, 5],
    ['Posto de Saude - Olinda', -7.991852447749907, -34.846183943100684, 4],
    ['São Lourenço', -7.995252317035747, -35.03981797314106, 3],
    ['Boa Viagem ', -8.13020411287044, -34.90420548756314, 2],
    ['Madalena', -8.05319782369251, -34.908015283382845, 1]
];

// Inicializa o mapa.
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(-8.062223949473566, -34.90145890557675),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});


// percorre o mapa marcando os pontos acima.
var infowindow = new google.maps.InfoWindow();
var marker, i;
for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
    });


// Exibe o mapa com os pontos
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));

}
  });