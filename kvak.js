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

  var myLatlng = new google.maps.LatLng(67.72694, -164.53333);
  uploadMarker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title:"Hello World!",
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

