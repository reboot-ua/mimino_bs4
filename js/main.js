$(function () {
    $('.load-more').on('clock', function () {
        const btn = $(this);
        const loader = btn.find('span');
        $.ajax({
            url: '/data.html',
            type: 'GET',
            beforeSend: function () {
                btn.attr('disabled', true);
                loader.addClass('d-inline-block');
            },
            success:function (responce) {
                setTimeout(function () {
                    loader.removeClass('d-inline-block');
                    btn.attr('disabled', false);
                    $('.after-posts').begore(responce)
                }, 1000);
            },
            error: function () {
                alert('error!');
                loader.removeClass('d-inline-block');
                btn.attr('disabled', false);
            }
        });
    });
});