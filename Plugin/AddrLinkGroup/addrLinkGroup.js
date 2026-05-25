$(document).ready(function() {
    $('#addrLinkGroup').click(function(e) {
        e.stopPropagation();
        $(this).css('opacity', '1');
    });

    $('#body').click(function(e) {
        e.stopPropagation();
        var currentOpacity = $('#addrLinkGroup').css('opacity');
        $('#addrLinkGroup').css('opacity', currentOpacity === '1' ? '0' : '1');
    });

    $(document).click(function() {
        $('#addrLinkGroup').css('opacity', '0');
    });

    $('#edit').click(function(e) {
        e.stopPropagation();
        console.log('按钮1被点击');
    });

    $('#help').click(function(e) {
        e.stopPropagation();
        console.log('按钮2被点击');
    });
});
