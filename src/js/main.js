//PRELOADER
$(window).on('load', function () {
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

var formData = {
    squareValue: '',
    turn: 0
};

function isDataChanged() {
    if (!(formData.turn === 0)) {
        if (formData.squareValue == document.getElementById("square").value) {
            return false
        } else return true
    } else return true
}

$(function () {
    $('#accept').click(function () {
        if (Boolean(document.getElementById("square").value) && isDataChanged()) {
            $('#hhh').addClass("animate");
            
            setTimeout(function () {
                $('#hhh').removeClass("animate");
            }, 2010);
            formData.squareValue = document.getElementById("square").value;
            formData.turn++;
        }
        else {
            console.log("Введите другое значение площади.");
        }
    });
});



function selectionScrollButton() {
    scaleTransform('.btn-scrollUp');
}
function noselectionScrollButton() {
    unscaleTransform('.btn-scrollUp');
}

function selectionButtonHamburger() {
    scaleTransform('#icon-hamburger');
    $('#icon-hamburger').css("backgroundColor", 'rgba(46, 6, 39, 0.137)');
    $('#icon-hamburger').css("borderRadius", '8px');

}
function noselectionButtonHamburger() {
    unscaleTransform('#icon-hamburger');
    $('#icon-hamburger').css("backgroundColor", 'rgba(46, 6, 39, 0)');
    $('#icon-hamburger').css("borderRadius", '0');
}

function scaleTransform(value) {
    $(value).css("-o-transform", 'scale(1.2, 1.2)');
    $(value).css("-ms-transform", 'scale(1.2, 1.2)');
    $(value).css("-moz-transform", 'scale(1.2, 1.2)');
    $(value).css("-webkit-transform", 'scale(1.2, 1.2)');
    $(value).css("transform", 'scale(1.2, 1.2)');
    $(value).css("boxShadow", 'inset 0 0 10px 4px rgba(0, 0, 0, 0.822)');
}
function unscaleTransform(value) {
    $(value).css("-o-transform", 'scale(1.0, 1.0)');
    $(value).css("-ms-transform", 'scale(1.0, 1.0)');
    $(value).css("-moz-transform", 'scale(1.0, 1.0)');
    $(value).css("-webkit-transform", 'scale(1.0, 1.0)');
    $(value).css("transform", 'scale(1.0, 1.0)');
    $(value).css("boxShadow", '0 0 0 0 rgba(0, 0, 0, 0)');
}


function messageVisible() {
    var elem = document.querySelector("#success-alert");
    var massiveClass = elem.classList;
    var existenceClass = massiveClass.contains("hidden");
    if (existenceClass == true) {
        massiveClass.remove("hidden");
    }
    setTimeout(function () {
        massiveClass.remove("success-alert-opacityNone");
    }, 50);
}

function messageUnvisible() {
    var elem = document.querySelector("#success-alert");
    var massiveClass = elem.classList;
    massiveClass.add("success-alert-opacityNone");
    elem.addEventListener("transitionend", addHiddenClass(), false);
}
function addHiddenClass() {
    setTimeout(function () {
        var elem = document.querySelector("#success-alert");
        var massiveClass = elem.classList;
        massiveClass.add("hidden");
    }, 1500);
}


