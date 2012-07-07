var showControls = function() {
    $(".kvak-ui").visibility("visible")
};

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

hideAbout(); hideLogin();
