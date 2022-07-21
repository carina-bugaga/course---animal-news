$(function () {
    $('.news-time').click(function () {
        $(this).parent().parent().css({
            border: '0.3px solid #2196F3',
            'border-radius': '20px',
        });
    });
    //EAOdbvUYDRw6ClOC2rOewoDBq7gbcUmm
   
});

$(document).ready(function () {
    $.get(
        'https://www.cbr-xml-daily.ru/latest.js',
        function (data) {
            let response = JSON.parse(data);
            let usd = (1/response.rates.USD).toFixed(2);
            let eur = (1/response.rates.EUR).toFixed(2);
            $('.dollar').append(usd);
            $('.euro').append(eur);
        });
});