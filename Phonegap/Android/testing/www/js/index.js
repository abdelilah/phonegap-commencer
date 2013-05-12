var map;
var marker;

function initializeMap() {
    var mapOptions = {
          center: new google.maps.LatLng(33.97059, -6.87542),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(33.97059, -6.87542),
      map: map,
      title:"ISESCO"
  });
}


var onSuccess = function(position) {
    marker.setMap(null); // Supprimer le markeur
    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      map: map,
      title:"Position actuelle"
  });
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


$(function(){
    initializeMap();

    navigator.geolocation.getCurrentPosition(onSuccess, onError);


    $('#take-picture').click(function(){
        function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }

        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
        }); 
    });


    $('#select-picture').click(function(){
        function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }

        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        }); 
    });
});