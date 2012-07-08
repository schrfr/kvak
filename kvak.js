var showControls = function() {
    $(".kvak-ui.persistent").fadeIn()
};

var hideControls = function() {
    $(".kvak-ui.persistent").hide()
}

var showAbout = function() {
    $("#kvak-about").show();
}

var hideAbout = function() {
    $("#kvak-about").hide();
}

var showLogin = function() {
    $("#kvak-login").show();
}

var hideLogin = function() {
    $("#kvak-login").hide();
}

$("#kvak-about-trigger").click(function(e) {
  showAbout();
});

$("#kvak-login-trigger").click(function(e) {
  showLogin();
});

$("#map_canvas").click(function(e) {
  hideLogin();
  hideAbout();
});

$("#kvak-about").click(function(e) {
  hideAbout();
});


hideAbout(); hideLogin(); hideControls();

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
