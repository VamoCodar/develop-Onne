

$(document).on("ready", function () {
    
    console.log('teste');

    var parallaxSettings = {
        initialOpacity: 1, //from 0 to 1, e.g. 0.34 is a valid value. 0 = transparent, 1 = Opaque
        opacitySpeed: 0.1, //values from 0.01 to 1 -> 0.01: slowly appears on screen; 1: appears as soon as the user scrolls 1px
        pageLoader: true //creates a page loader. It is set "false" by default.
    };
    parallaxImgScroll(parallaxSettings);
});

$(document).ready(function () {
    var now = new Date();
    var hora = now.getHours();
    var minuto = now.getMinutes();
    var segundo = now.getSeconds();
    var mili = 0;

    // hora = 23;
    // minuto = 59;
    // segundo = 50;

    setInterval(function () {
        var segM = parseFloat(((segundo * 1000) + mili) / 1000);
        var minM = parseFloat(((minuto * 60) + segM) / 60);
        var horaM = parseFloat(((hora * 60) + minM) / 60)
        var horaDeg = ((horaM / 12) * 360);
        var minDeg = ((minM / 60) * 360);
        var segDeg = ((segM / 60) * 360);

        $('.horas').css('transform', 'rotate(' + horaDeg + 'deg)');
        $('.minutos').css('transform', 'rotate(' + minDeg + 'deg)');
        $('.segundos').css('transform', 'rotate(' + segDeg + 'deg)');

        if (mili == 1000) {
            if ((minuto >= 59) && (segundo >= 59)) {
                hora = hora + 1
            }

            if ((hora >= 23) && (minuto == 59) && (segundo == 59)) {
                hora = 0;
            }

            if (segundo >= 59) {
                minuto = minuto + 1
            }

            if (segundo < 59) {
                segundo = segundo + 1;
            } else {
                segundo = 0;
            }

            if (minuto > 59) {
                minuto = 0;
            }

            mili = 0;
        } else {
            mili = mili + 10;
        }
    }, 10);

    $(".btnScroll img").click(function (e) {
        e.preventDefault();
        var marginT = parseInt($('#onne').attr('style').split(': ')[1].replace('px', '')) - 200;
        $('html, body').animate({
            scrollTop: $('#sobreOnne').offset().top - marginT
        }, 2000);
    });
});