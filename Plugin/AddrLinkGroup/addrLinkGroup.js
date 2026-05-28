$(document).ready(function() {
    var added = localStorage.getItem('addedWebAddress');
    var selected = localStorage.getItem('selectededWebAddress');
    var links = new Map();
    if (selected) new Map(JSON.parse(selected)).forEach(function(v, k) { links.set(k, v); });
    if (added) new Map(JSON.parse(added)).forEach(function(v, k) { links.set(k, v); });

    links.forEach(function(name, url) {
        $('#addr-link-row').append(
            '<a class="addr_link" href="' + url + '" target="_blank">' +
                '<span class="link_name">' + name + '</span>' +
                '<p class="key">' + url + '</p>' +
            '</a>'
        );
    });

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
        window.location.href = 'Page/Collection/Collection.html';
    });

    $('#help').click(function(e) {
        e.stopPropagation();
        console.log('按钮2被点击');
    });
});
