var map;
var uploadMarker;

function initialize() {
  var myOptions = {
    zoom: 13,
    center: new google.maps.LatLng(67.72694, -164.53333),
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    disableDefaultUI: true
  };
  map = new google.maps.Map(document.getElementById('map_canvas'),
myOptions);

/*
  De video’s worden op de kaart geplot. Deze posities zullen in de uiteindelijke site
  waarschijnlijk uit de database komen? Als er een effectievere methode is dan het plaatsen
  van marker’s dan is het natuurlijk ook goed.
*/

  testVideo1 = new google.maps.Marker({
    position: new google.maps.LatLng(67.7268017401174, -164.5453462963867),
    map: map,
    icon: "kvak1-a.png" 
  });

  testVideo2 = new google.maps.Marker({
    position: new google.maps.LatLng(67.72463827351035, -164.53508952911375),
    map: map, 
    icon: "kvak2-a.png" 
  }); 

  testVideo3 = new google.maps.Marker({
    position: new google.maps.LatLng(67.72984326937491, -164.5400677090454),
    map: map, 
    icon: "kvak3-a.png" 
  }); 

/* 
   Deze draggable marker zou je kunnen gebruiken om in het uploadproces
   de geolocatie in de stellen.
   je leest de positie af met uploadMarker.getPosition.toString()
*/

  uploadMarker = new google.maps.Marker({
    position: new google.maps.LatLng(67.72924150075268, -164.54721311386106),
    map: map,
    draggable: true,
    visible: false
  });

}

google.maps.event.addDomListener(window, 'load', initialize);


var showControls = function() {
    $(".kvak-ui.persistent").fadeIn()
};

var hideControls = function() {
    $(".kvak-ui.persistent").hide()
}

var hideOtherScreenElements = function() {
    $(".kvak-ui.specific").hide();
    if (typeof uploadMarker !== "undefined") {
        uploadMarker.setVisible(false);
    }
}

$("#map_canvas").click(function(e) {
    hideOtherScreenElements();
});

$(".kvak-ui.specific").click(function(e) {
    hideOtherScreenElements();
});

$(".kvak-ui.trigger").click(function(e) {
    var target = $('#' + $(this).attr("rel"))

    if( target.is(":visible") ) {
        hideOtherScreenElements();
    }
    else {
        hideOtherScreenElements();
        target.show();
        if ( $(this).attr("id") === "kvak-upload-trigger" ) {
            uploadMarker.setVisible(true);
        }
    }
});

hideOtherScreenElements();  hideControls();

// opening

setTimeout(
    function() {
        map.setZoom(14);
        setTimeout(
            function() {
                map.setZoom(15);
                setTimeout(
                    function() {
                        map.setZoom(16);
                        setTimeout(
                            showControls,
                            1600
                        )
                     },
                     1600
                );
             },
            1600
        );
    },
    1600
);
