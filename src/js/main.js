//PRELOADER
$(window).on('load', function () {
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

// Accordion
$(document).ready(function () {
    $(".set > a").on("click", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");


            $(".set > a > .arrow-1").removeClass("rotate-arrow");

        } else {
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".set > a > .arrow-1").removeClass("rotate-arrow");

            if (formData.imageState == this.getAttribute("value")) {
                return
            } else {
                $('.photo > img').addClass("invisible");
                formData.imageState = ("." + this.getAttribute("value"));
                formData.arrowState = (".r" + this.getAttribute("value"));
                $(formData.imageState).removeClass("invisible");
                $(formData.arrowState).addClass("rotate-arrow");
            }
            $('.content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
        }
    });
});


var formData = {
    squareValue: '',
    turn: 0,
    turnButtonRoom: 0,
    turnButtonChange: 0,
    checkButtonRoom: 1,
    checkButtonChange: 1,
    firstBlockButtonCheckedValue: 1,
    secondBlockButtonCheckedValue: 1,
    imageState: '',
    arrowState: ''
};


function checkButtonRoom(value) {
    var a = Number(value);

    if (!(formData.turnButtonRoom == 0)) {
        switch (formData.checkButtonRoom) {
            case 1:
                $((".button-room>div:nth-child(" + formData.checkButtonRoom) + ")").css("backgroundImage", 'url("../img/svg/home-button.svg")');
                break;
            case 2:
                $((".button-room>div:nth-child(" + formData.checkButtonRoom) + ")").css("backgroundImage", 'url("../img/svg/apartment-button.svg")');
                break;
            case 3:
                $((".button-room>div:nth-child(" + formData.checkButtonRoom) + ")").css("backgroundImage", 'url("../img/svg/office-button.svg")');
                break;
            case 4:
                $((".button-room>div:nth-child(" + formData.checkButtonRoom) + ")").css("backgroundImage", 'url("../img/svg/other-button.svg")');
                break;
            default:
                console.log("Извините, но нет");
        }

        switch (a) {
            case 1:
                formData.checkButtonRoom = 1;
                $((".button-room>div:nth-child(" + formData.checkButtonRoom) + ")").css("backgroundImage", 'url("../img/svg/home-button-hover.svg")');
                formData.turnButtonRoom++
                break;
            case 2:
                formData.checkButtonRoom = 2;
                $((".button-room>div:nth-child(" + formData.checkButtonRoom) + ")").css("backgroundImage", 'url("../img/svg/apartment-button-hover.svg")');
                formData.turnButtonRoom++
                break;
            case 3:
                formData.checkButtonRoom = 3;
                $((".button-room>div:nth-child(" + formData.checkButtonRoom) + ")").css("backgroundImage", 'url("../img/svg/office-button-hover.svg")');
                formData.turnButtonRoom++
                break;
            case 4:
                formData.checkButtonRoom = 4;
                $((".button-room>div:nth-child(" + formData.checkButtonRoom) + ")").css("backgroundImage", 'url("../img/svg/other-button-hover.svg")');
                formData.turnButtonRoom++
                break;
            default:
                console.log("Извините, но нет");
        }
    }
    else {
        $((".button-room>div:nth-child(" + 1) + ")").css("backgroundImage", 'url("../img/svg/home-button.svg")');
        switch (a) {
            case 1:
                formData.checkButtonRoom = 1;
                $((".button-room>div:nth-child(" + formData.checkButtonRoom) + ")").css("backgroundImage", 'url("../img/svg/home-button-hover.svg")');
                formData.turnButtonRoom++
                break;
            case 2:
                formData.checkButtonRoom = 2;
                $((".button-room>div:nth-child(" + formData.checkButtonRoom) + ")").css("backgroundImage", 'url("../img/svg/apartment-button-hover.svg")');
                formData.turnButtonRoom++
                break;
            case 3:
                formData.checkButtonRoom = 3;
                $((".button-room>div:nth-child(" + formData.checkButtonRoom) + ")").css("backgroundImage", 'url("../img/svg/office-button-hover.svg")');
                formData.turnButtonRoom++
                break;
            case 4:
                formData.checkButtonRoom = 4;
                $((".button-room>div:nth-child(" + formData.checkButtonRoom) + ")").css("backgroundImage", 'url("../img/svg/other-button-hover.svg")');
                formData.turnButtonRoom++
                break;
            default:
                console.log("Извините, но нет");
        }
    }
}


function checkButtonChange(value) {
    var b = Number(value);
    function normalBackground() {
        $((".button-change>div:nth-child(" + formData.checkButtonChange) + ")>label").css("backgroundImage", 'url("../img/svg/style-button.svg")');
    }

    function switchHoverlBackground() {
        function hoverlBackground() {
            $((".button-change>div:nth-child(" + formData.checkButtonChange) + ")>label").css("backgroundImage", 'url("../img/svg/style-button_hover.svg")');
        }
        switch (b) {
            case 1:
                formData.checkButtonChange = 1;
                hoverlBackground();
                formData.turnButtonChange++
                break;
            case 2:
                formData.checkButtonChange = 2;
                hoverlBackground();
                formData.turnButtonChange++
                break;
            case 3:
                formData.checkButtonChange = 3;
                hoverlBackground();
                formData.turnButtonChange++
                break;
            case 4:
                formData.checkButtonChange = 4;
                hoverlBackground();
                formData.turnButtonChange++
                break;
            case 5:
                formData.checkButtonChange = 5;
                hoverlBackground();
                formData.turnButtonChange++
                break;
            case 6:
                formData.checkButtonChange = 6;
                hoverlBackground();
                formData.turnButtonChange++
                break;
            default:
                console.log("Извините, но нет");
        }
    }
    if (!(formData.turnButtonChange == 0)) {
        switch (formData.checkButtonChange) {
            case 1:
                normalBackground();
                break;
            case 2:
                normalBackground();
                break;
            case 3:
                normalBackground();
                break;
            case 4:
                normalBackground();
                break;
            case 5:
                normalBackground();
                break;
            case 6:
                normalBackground();
                break;
            default:
                console.log("Извините, но нет");
        }

        switchHoverlBackground();
    }
    else {
        $((".button-change>div:nth-child(" + 1) + ")>label").css("backgroundImage", 'url("../img/svg/style-button.svg")');
        switchHoverlBackground();
    }
}


// Form
function itDataChange() {
    if ("" === document.getElementById("square").value) {
        return false
    }

    // Первые два, смотрим есть ли изменения в двух блоках, - если нет изменений - false.
    if (!(formData.firstBlockButtonCheckedValue == formData.checkButtonRoom) || !(formData.secondBlockButtonCheckedValue == formData.checkButtonChange) || !(formData.squareValue === Number(document.getElementById("square").value))) {
        return true
    }
    return false
}

$(function () {
    $('#accept').click(function () {
        if (itDataChange() && Boolean(Number(document.getElementById("square").value))) {
            $('#accept-arrow').addClass("animate");

            messageVisible("success-alert");
            setTimeout(function () {
                messageUnvisible("success-alert");
            }, 6000);

            setTimeout(function () {
                $('#accept-arrow').removeClass("animate");
            }, 2010);
            formData.squareValue = Number(document.getElementById("square").value);
            formData.firstBlockButtonCheckedValue = formData.checkButtonRoom;
            formData.secondBlockButtonCheckedValue = formData.checkButtonChange;
            formData.turn++;
        }
        else {
            messageVisible("error-alert");
            setTimeout(function () {
                messageUnvisible("error-alert");
            }, 6000);
            console.log("Введите другое значение площади.");
        }
    });
});


function messageVisible(value) {
    var elem = document.querySelector("#success-alert");
    var massiveClass = elem.classList;

    if (massiveClass.contains("success-alert")) {
        massiveClass.remove("success-alert");
    }
    if (massiveClass.contains("error-alert")) {
        massiveClass.remove("error-alert");
    }
    massiveClass.add(value);
    switch (value) {
        case "success-alert":
            $('.alert_text').html('<p>Расчёт <br>выполнен</p>');
            $(".success-alert").css("color", '#fff');
            break;
        case "error-alert":
            $('.alert_text').html('<p>Введите / измените <br>значение</p>');
            $(".error-alert").css("color", 'rgb(204, 0, 0)');
            break;
        default:
            console.log("Извините, но нет");
    }

    var existenceClass = massiveClass.contains("hidden");
    if (existenceClass == true) {
        massiveClass.remove("hidden");
    }
    setTimeout(function () {
        massiveClass.remove("success-alert-opacityNone");
    }, 50);
}

function messageUnvisible(value) {
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



// Animated scroll
var eventObj = {
    appended: ""
};
$(window).scroll(function () {
    var scroll = $(document).scrollTop();
    if (scroll > 1) {
        if (eventObj.appended == "") {
            eventObj.appended = false;
        }
        if (!eventObj.appended) {
            $('.btn-scrollUp').removeClass('invisible');
            setTimeout(function () {
                $('.btn-scrollUp').removeClass("opacityNone");
                eventObj.appended = true;
            }, 50);
        }

    } else if (eventObj.appended) {
        $('.btn-scrollUp').addClass("opacityNone");
        setTimeout(function () {
            $('.btn-scrollUp').addClass("invisible");
            eventObj.appended = false;
        }, 250);
    }
});

$(document).ready(function () {
    $('.btn-scrollUp').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 150)
    });
});

function selectionScrollButton() {
    scaleTransform('.btn-scrollUp');
}
function noselectionScrollButton() {
    unscaleTransform('.btn-scrollUp');
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