var showControls = function() {
    $(".kvak-ui.persistent").fadeIn()
};

var hideControls = function() {
    $(".kvak-ui.persistent").hide()
}

var hideOtherScreenElements = function() {
    $(".kvak-ui.specific").hide();
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
        target.hide();
    }
    else {
        hideOtherScreenElements();
        target.show();
    }
});


hideOtherScreenElements(); hideControls();

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

