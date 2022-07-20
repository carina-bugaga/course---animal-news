$(function () {
    $('#btn-allNews')
       /* .click(function () {
            $('.news-comments-count').each(function () {
                if ($(this).text() >= 20) {
                    $(this).css('color', 'blue');
                }
            });
        });*/

    $('.news-time').click(function(){
        $(this).parent().parent().css({
            border : '0.3px solid #2196F3',
            'border-radius': '20px',
        });
    });
});