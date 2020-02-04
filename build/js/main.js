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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vUFJFTE9BREVSXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICRwcmVsb2FkZXIgPSAkKCcubG9hZGVyQXJlYScpLFxyXG4gICAgICAgICRsb2FkZXIgPSAkcHJlbG9hZGVyLmZpbmQoJy5sb2FkZXInKTtcclxuICAgICRsb2FkZXIuZmFkZU91dCgpO1xyXG4gICAgJHByZWxvYWRlci5kZWxheSg1MDApLmZhZGVPdXQoJ3Nsb3cnKTtcclxufSk7XHJcblxyXG4vLyBBY2NvcmRpb25cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5zZXQgPiBhXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuY29udGVudCcpLnNsaWRlVXAoMjAwKTtcclxuICAgICAgICAgICAgJChcIi5zZXQgPiBhIGlcIikucmVtb3ZlQ2xhc3MoXCJmYS1taW51c1wiKS5hZGRDbGFzcyhcImZhLXBsdXNcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgJChcIi5zZXQgPiBhID4gLmFycm93LTFcIikucmVtb3ZlQ2xhc3MoXCJyb3RhdGUtYXJyb3dcIik7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIuc2V0ID4gYSBpXCIpLnJlbW92ZUNsYXNzKFwiZmEtbWludXNcIikuYWRkQ2xhc3MoXCJmYS1wbHVzXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoXCJpXCIpLnJlbW92ZUNsYXNzKFwiZmEtcGx1c1wiKS5hZGRDbGFzcyhcImZhLW1pbnVzXCIpO1xyXG4gICAgICAgICAgICAkKFwiLnNldCA+IGFcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuc2V0ID4gYSA+IC5hcnJvdy0xXCIpLnJlbW92ZUNsYXNzKFwicm90YXRlLWFycm93XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm1EYXRhLmltYWdlU3RhdGUgPT0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucGhvdG8gPiBpbWcnKS5hZGRDbGFzcyhcImludmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmltYWdlU3RhdGUgPSAoXCIuXCIgKyB0aGlzLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFycm93U3RhdGUgPSAoXCIuclwiICsgdGhpcy5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSk7XHJcbiAgICAgICAgICAgICAgICAkKGZvcm1EYXRhLmltYWdlU3RhdGUpLnJlbW92ZUNsYXNzKFwiaW52aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgJChmb3JtRGF0YS5hcnJvd1N0YXRlKS5hZGRDbGFzcyhcInJvdGF0ZS1hcnJvd1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcuY29udGVudCcpLnNsaWRlVXAoMjAwKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmNvbnRlbnQnKS5zbGlkZURvd24oMjAwKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxudmFyIGZvcm1EYXRhID0ge1xyXG4gICAgc3F1YXJlVmFsdWU6ICcnLFxyXG4gICAgdHVybjogMCxcclxuICAgIHR1cm5CdXR0b25Sb29tOiAwLFxyXG4gICAgdHVybkJ1dHRvbkNoYW5nZTogMCxcclxuICAgIGNoZWNrQnV0dG9uUm9vbTogMSxcclxuICAgIGNoZWNrQnV0dG9uQ2hhbmdlOiAxLFxyXG4gICAgZmlyc3RCbG9ja0J1dHRvbkNoZWNrZWRWYWx1ZTogMSxcclxuICAgIHNlY29uZEJsb2NrQnV0dG9uQ2hlY2tlZFZhbHVlOiAxLFxyXG4gICAgaW1hZ2VTdGF0ZTogJycsXHJcbiAgICBhcnJvd1N0YXRlOiAnJ1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQnV0dG9uUm9vbSh2YWx1ZSkge1xyXG4gICAgdmFyIGEgPSBOdW1iZXIodmFsdWUpO1xyXG5cclxuICAgIGlmICghKGZvcm1EYXRhLnR1cm5CdXR0b25Sb29tID09IDApKSB7XHJcbiAgICAgICAgc3dpdGNoIChmb3JtRGF0YS5jaGVja0J1dHRvblJvb20pIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgJCgoXCIuYnV0dG9uLXJvb20+ZGl2Om50aC1jaGlsZChcIiArIGZvcm1EYXRhLmNoZWNrQnV0dG9uUm9vbSkgKyBcIilcIikuY3NzKFwiYmFja2dyb3VuZEltYWdlXCIsICd1cmwoXCIuLi9pbWcvc3ZnL2hvbWUtYnV0dG9uLnN2Z1wiKScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICQoKFwiLmJ1dHRvbi1yb29tPmRpdjpudGgtY2hpbGQoXCIgKyBmb3JtRGF0YS5jaGVja0J1dHRvblJvb20pICsgXCIpXCIpLmNzcyhcImJhY2tncm91bmRJbWFnZVwiLCAndXJsKFwiLi4vaW1nL3N2Zy9hcGFydG1lbnQtYnV0dG9uLnN2Z1wiKScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICQoKFwiLmJ1dHRvbi1yb29tPmRpdjpudGgtY2hpbGQoXCIgKyBmb3JtRGF0YS5jaGVja0J1dHRvblJvb20pICsgXCIpXCIpLmNzcyhcImJhY2tncm91bmRJbWFnZVwiLCAndXJsKFwiLi4vaW1nL3N2Zy9vZmZpY2UtYnV0dG9uLnN2Z1wiKScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICQoKFwiLmJ1dHRvbi1yb29tPmRpdjpudGgtY2hpbGQoXCIgKyBmb3JtRGF0YS5jaGVja0J1dHRvblJvb20pICsgXCIpXCIpLmNzcyhcImJhY2tncm91bmRJbWFnZVwiLCAndXJsKFwiLi4vaW1nL3N2Zy9vdGhlci1idXR0b24uc3ZnXCIpJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi0JjQt9Cy0LjQvdC40YLQtSwg0L3QviDQvdC10YJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGEpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuY2hlY2tCdXR0b25Sb29tID0gMTtcclxuICAgICAgICAgICAgICAgICQoKFwiLmJ1dHRvbi1yb29tPmRpdjpudGgtY2hpbGQoXCIgKyBmb3JtRGF0YS5jaGVja0J1dHRvblJvb20pICsgXCIpXCIpLmNzcyhcImJhY2tncm91bmRJbWFnZVwiLCAndXJsKFwiLi4vaW1nL3N2Zy9ob21lLWJ1dHRvbi1ob3Zlci5zdmdcIiknKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLnR1cm5CdXR0b25Sb29tKytcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5jaGVja0J1dHRvblJvb20gPSAyO1xyXG4gICAgICAgICAgICAgICAgJCgoXCIuYnV0dG9uLXJvb20+ZGl2Om50aC1jaGlsZChcIiArIGZvcm1EYXRhLmNoZWNrQnV0dG9uUm9vbSkgKyBcIilcIikuY3NzKFwiYmFja2dyb3VuZEltYWdlXCIsICd1cmwoXCIuLi9pbWcvc3ZnL2FwYXJ0bWVudC1idXR0b24taG92ZXIuc3ZnXCIpJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS50dXJuQnV0dG9uUm9vbSsrXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuY2hlY2tCdXR0b25Sb29tID0gMztcclxuICAgICAgICAgICAgICAgICQoKFwiLmJ1dHRvbi1yb29tPmRpdjpudGgtY2hpbGQoXCIgKyBmb3JtRGF0YS5jaGVja0J1dHRvblJvb20pICsgXCIpXCIpLmNzcyhcImJhY2tncm91bmRJbWFnZVwiLCAndXJsKFwiLi4vaW1nL3N2Zy9vZmZpY2UtYnV0dG9uLWhvdmVyLnN2Z1wiKScpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEudHVybkJ1dHRvblJvb20rK1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmNoZWNrQnV0dG9uUm9vbSA9IDQ7XHJcbiAgICAgICAgICAgICAgICAkKChcIi5idXR0b24tcm9vbT5kaXY6bnRoLWNoaWxkKFwiICsgZm9ybURhdGEuY2hlY2tCdXR0b25Sb29tKSArIFwiKVwiKS5jc3MoXCJiYWNrZ3JvdW5kSW1hZ2VcIiwgJ3VybChcIi4uL2ltZy9zdmcvb3RoZXItYnV0dG9uLWhvdmVyLnN2Z1wiKScpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEudHVybkJ1dHRvblJvb20rK1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcItCY0LfQstC40L3QuNGC0LUsINC90L4g0L3QtdGCXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgICQoKFwiLmJ1dHRvbi1yb29tPmRpdjpudGgtY2hpbGQoXCIgKyAxKSArIFwiKVwiKS5jc3MoXCJiYWNrZ3JvdW5kSW1hZ2VcIiwgJ3VybChcIi4uL2ltZy9zdmcvaG9tZS1idXR0b24uc3ZnXCIpJyk7XHJcbiAgICAgICAgc3dpdGNoIChhKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmNoZWNrQnV0dG9uUm9vbSA9IDE7XHJcbiAgICAgICAgICAgICAgICAkKChcIi5idXR0b24tcm9vbT5kaXY6bnRoLWNoaWxkKFwiICsgZm9ybURhdGEuY2hlY2tCdXR0b25Sb29tKSArIFwiKVwiKS5jc3MoXCJiYWNrZ3JvdW5kSW1hZ2VcIiwgJ3VybChcIi4uL2ltZy9zdmcvaG9tZS1idXR0b24taG92ZXIuc3ZnXCIpJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS50dXJuQnV0dG9uUm9vbSsrXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuY2hlY2tCdXR0b25Sb29tID0gMjtcclxuICAgICAgICAgICAgICAgICQoKFwiLmJ1dHRvbi1yb29tPmRpdjpudGgtY2hpbGQoXCIgKyBmb3JtRGF0YS5jaGVja0J1dHRvblJvb20pICsgXCIpXCIpLmNzcyhcImJhY2tncm91bmRJbWFnZVwiLCAndXJsKFwiLi4vaW1nL3N2Zy9hcGFydG1lbnQtYnV0dG9uLWhvdmVyLnN2Z1wiKScpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEudHVybkJ1dHRvblJvb20rK1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmNoZWNrQnV0dG9uUm9vbSA9IDM7XHJcbiAgICAgICAgICAgICAgICAkKChcIi5idXR0b24tcm9vbT5kaXY6bnRoLWNoaWxkKFwiICsgZm9ybURhdGEuY2hlY2tCdXR0b25Sb29tKSArIFwiKVwiKS5jc3MoXCJiYWNrZ3JvdW5kSW1hZ2VcIiwgJ3VybChcIi4uL2ltZy9zdmcvb2ZmaWNlLWJ1dHRvbi1ob3Zlci5zdmdcIiknKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLnR1cm5CdXR0b25Sb29tKytcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5jaGVja0J1dHRvblJvb20gPSA0O1xyXG4gICAgICAgICAgICAgICAgJCgoXCIuYnV0dG9uLXJvb20+ZGl2Om50aC1jaGlsZChcIiArIGZvcm1EYXRhLmNoZWNrQnV0dG9uUm9vbSkgKyBcIilcIikuY3NzKFwiYmFja2dyb3VuZEltYWdlXCIsICd1cmwoXCIuLi9pbWcvc3ZnL290aGVyLWJ1dHRvbi1ob3Zlci5zdmdcIiknKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLnR1cm5CdXR0b25Sb29tKytcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLQmNC30LLQuNC90LjRgtC1LCDQvdC+INC90LXRglwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0J1dHRvbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgdmFyIGIgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgZnVuY3Rpb24gbm9ybWFsQmFja2dyb3VuZCgpIHtcclxuICAgICAgICAkKChcIi5idXR0b24tY2hhbmdlPmRpdjpudGgtY2hpbGQoXCIgKyBmb3JtRGF0YS5jaGVja0J1dHRvbkNoYW5nZSkgKyBcIik+bGFiZWxcIikuY3NzKFwiYmFja2dyb3VuZEltYWdlXCIsICd1cmwoXCIuLi9pbWcvc3ZnL3N0eWxlLWJ1dHRvbi5zdmdcIiknKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzd2l0Y2hIb3ZlcmxCYWNrZ3JvdW5kKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGhvdmVybEJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgICAgICQoKFwiLmJ1dHRvbi1jaGFuZ2U+ZGl2Om50aC1jaGlsZChcIiArIGZvcm1EYXRhLmNoZWNrQnV0dG9uQ2hhbmdlKSArIFwiKT5sYWJlbFwiKS5jc3MoXCJiYWNrZ3JvdW5kSW1hZ2VcIiwgJ3VybChcIi4uL2ltZy9zdmcvc3R5bGUtYnV0dG9uX2hvdmVyLnN2Z1wiKScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKGIpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuY2hlY2tCdXR0b25DaGFuZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJsQmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEudHVybkJ1dHRvbkNoYW5nZSsrXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuY2hlY2tCdXR0b25DaGFuZ2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJsQmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEudHVybkJ1dHRvbkNoYW5nZSsrXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuY2hlY2tCdXR0b25DaGFuZ2UgPSAzO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJsQmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEudHVybkJ1dHRvbkNoYW5nZSsrXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuY2hlY2tCdXR0b25DaGFuZ2UgPSA0O1xyXG4gICAgICAgICAgICAgICAgaG92ZXJsQmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEudHVybkJ1dHRvbkNoYW5nZSsrXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuY2hlY2tCdXR0b25DaGFuZ2UgPSA1O1xyXG4gICAgICAgICAgICAgICAgaG92ZXJsQmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEudHVybkJ1dHRvbkNoYW5nZSsrXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuY2hlY2tCdXR0b25DaGFuZ2UgPSA2O1xyXG4gICAgICAgICAgICAgICAgaG92ZXJsQmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEudHVybkJ1dHRvbkNoYW5nZSsrXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi0JjQt9Cy0LjQvdC40YLQtSwg0L3QviDQvdC10YJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCEoZm9ybURhdGEudHVybkJ1dHRvbkNoYW5nZSA9PSAwKSkge1xyXG4gICAgICAgIHN3aXRjaCAoZm9ybURhdGEuY2hlY2tCdXR0b25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgbm9ybWFsQmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIG5vcm1hbEJhY2tncm91bmQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBub3JtYWxCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgbm9ybWFsQmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIG5vcm1hbEJhY2tncm91bmQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBub3JtYWxCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi0JjQt9Cy0LjQvdC40YLQtSwg0L3QviDQvdC10YJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2hIb3ZlcmxCYWNrZ3JvdW5kKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAkKChcIi5idXR0b24tY2hhbmdlPmRpdjpudGgtY2hpbGQoXCIgKyAxKSArIFwiKT5sYWJlbFwiKS5jc3MoXCJiYWNrZ3JvdW5kSW1hZ2VcIiwgJ3VybChcIi4uL2ltZy9zdmcvc3R5bGUtYnV0dG9uLnN2Z1wiKScpO1xyXG4gICAgICAgIHN3aXRjaEhvdmVybEJhY2tncm91bmQoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIEZvcm1cclxuZnVuY3Rpb24gaXREYXRhQ2hhbmdlKCkge1xyXG4gICAgaWYgKFwiXCIgPT09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3F1YXJlXCIpLnZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J/QtdGA0LLRi9C1INC00LLQsCwg0YHQvNC+0YLRgNC40Lwg0LXRgdGC0Ywg0LvQuCDQuNC30LzQtdC90LXQvdC40Y8g0LIg0LTQstGD0YUg0LHQu9C+0LrQsNGFLCAtINC10YHQu9C4INC90LXRgiDQuNC30LzQtdC90LXQvdC40LkgLSBmYWxzZS5cclxuICAgIGlmICghKGZvcm1EYXRhLmZpcnN0QmxvY2tCdXR0b25DaGVja2VkVmFsdWUgPT0gZm9ybURhdGEuY2hlY2tCdXR0b25Sb29tKSB8fCAhKGZvcm1EYXRhLnNlY29uZEJsb2NrQnV0dG9uQ2hlY2tlZFZhbHVlID09IGZvcm1EYXRhLmNoZWNrQnV0dG9uQ2hhbmdlKSB8fCAhKGZvcm1EYXRhLnNxdWFyZVZhbHVlID09PSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhcmVcIikudmFsdWUpKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjYWNjZXB0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChpdERhdGFDaGFuZ2UoKSAmJiBCb29sZWFuKE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNxdWFyZVwiKS52YWx1ZSkpKSB7XHJcbiAgICAgICAgICAgICQoJyNhY2NlcHQtYXJyb3cnKS5hZGRDbGFzcyhcImFuaW1hdGVcIik7XHJcblxyXG4gICAgICAgICAgICBtZXNzYWdlVmlzaWJsZShcInN1Y2Nlc3MtYWxlcnRcIik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVVudmlzaWJsZShcInN1Y2Nlc3MtYWxlcnRcIik7XHJcbiAgICAgICAgICAgIH0sIDYwMDApO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjYWNjZXB0LWFycm93JykucmVtb3ZlQ2xhc3MoXCJhbmltYXRlXCIpO1xyXG4gICAgICAgICAgICB9LCAyMDEwKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuc3F1YXJlVmFsdWUgPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhcmVcIikudmFsdWUpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5maXJzdEJsb2NrQnV0dG9uQ2hlY2tlZFZhbHVlID0gZm9ybURhdGEuY2hlY2tCdXR0b25Sb29tO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5zZWNvbmRCbG9ja0J1dHRvbkNoZWNrZWRWYWx1ZSA9IGZvcm1EYXRhLmNoZWNrQnV0dG9uQ2hhbmdlO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS50dXJuKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNzYWdlVmlzaWJsZShcImVycm9yLWFsZXJ0XCIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VVbnZpc2libGUoXCJlcnJvci1hbGVydFwiKTtcclxuICAgICAgICAgICAgfSwgNjAwMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi0JLQstC10LTQuNGC0LUg0LTRgNGD0LPQvtC1INC30L3QsNGH0LXQvdC40LUg0L/Qu9C+0YnQsNC00LguXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBtZXNzYWdlVmlzaWJsZSh2YWx1ZSkge1xyXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Y2Nlc3MtYWxlcnRcIik7XHJcbiAgICB2YXIgbWFzc2l2ZUNsYXNzID0gZWxlbS5jbGFzc0xpc3Q7XHJcblxyXG4gICAgaWYgKG1hc3NpdmVDbGFzcy5jb250YWlucyhcInN1Y2Nlc3MtYWxlcnRcIikpIHtcclxuICAgICAgICBtYXNzaXZlQ2xhc3MucmVtb3ZlKFwic3VjY2Vzcy1hbGVydFwiKTtcclxuICAgIH1cclxuICAgIGlmIChtYXNzaXZlQ2xhc3MuY29udGFpbnMoXCJlcnJvci1hbGVydFwiKSkge1xyXG4gICAgICAgIG1hc3NpdmVDbGFzcy5yZW1vdmUoXCJlcnJvci1hbGVydFwiKTtcclxuICAgIH1cclxuICAgIG1hc3NpdmVDbGFzcy5hZGQodmFsdWUpO1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgIGNhc2UgXCJzdWNjZXNzLWFsZXJ0XCI6XHJcbiAgICAgICAgICAgICQoJy5hbGVydF90ZXh0JykuaHRtbCgnPHA+0KDQsNGB0YfRkdGCIDxicj7QstGL0L/QvtC70L3QtdC9PC9wPicpO1xyXG4gICAgICAgICAgICAkKFwiLnN1Y2Nlc3MtYWxlcnRcIikuY3NzKFwiY29sb3JcIiwgJyNmZmYnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImVycm9yLWFsZXJ0XCI6XHJcbiAgICAgICAgICAgICQoJy5hbGVydF90ZXh0JykuaHRtbCgnPHA+0JLQstC10LTQuNGC0LUgLyDQuNC30LzQtdC90LjRgtC1IDxicj7Qt9C90LDRh9C10L3QuNC1PC9wPicpO1xyXG4gICAgICAgICAgICAkKFwiLmVycm9yLWFsZXJ0XCIpLmNzcyhcImNvbG9yXCIsICdyZ2IoMjA0LCAwLCAwKScpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcItCY0LfQstC40L3QuNGC0LUsINC90L4g0L3QtdGCXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBleGlzdGVuY2VDbGFzcyA9IG1hc3NpdmVDbGFzcy5jb250YWlucyhcImhpZGRlblwiKTtcclxuICAgIGlmIChleGlzdGVuY2VDbGFzcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgbWFzc2l2ZUNsYXNzLnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1hc3NpdmVDbGFzcy5yZW1vdmUoXCJzdWNjZXNzLWFsZXJ0LW9wYWNpdHlOb25lXCIpO1xyXG4gICAgfSwgNTApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZXNzYWdlVW52aXNpYmxlKHZhbHVlKSB7XHJcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VjY2Vzcy1hbGVydFwiKTtcclxuICAgIHZhciBtYXNzaXZlQ2xhc3MgPSBlbGVtLmNsYXNzTGlzdDtcclxuICAgIG1hc3NpdmVDbGFzcy5hZGQoXCJzdWNjZXNzLWFsZXJ0LW9wYWNpdHlOb25lXCIpO1xyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBhZGRIaWRkZW5DbGFzcygpLCBmYWxzZSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkSGlkZGVuQ2xhc3MoKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VjY2Vzcy1hbGVydFwiKTtcclxuICAgICAgICB2YXIgbWFzc2l2ZUNsYXNzID0gZWxlbS5jbGFzc0xpc3Q7XHJcbiAgICAgICAgbWFzc2l2ZUNsYXNzLmFkZChcImhpZGRlblwiKTtcclxuICAgIH0sIDE1MDApO1xyXG59Il0sImZpbGUiOiJtYWluLmpzIn0=
