$(document).ready(function(){
    var addedWebAddress = localStorage.getItem('addedWebAddress');
    var selectededWebAddress = localStorage.getItem('selectededWebAddress');

    var selectedAddress = selectededWebAddress ? new Map(JSON.parse(selectededWebAddress)) : new Map();
    var webAddress = addedWebAddress ? new Map(JSON.parse(addedWebAddress)) : new Map();

    $.getJSON('addr.json', function(data) {
        data.forEach(function(category) {
            var $section = $('<div class="selectWeb"></div>');
            $section.append('<p class="web_class">' + category.web_class + '</p>');
            category.sites.forEach(function(site) {
                var statusSrc = selectedAddress.has(site.addr_web) ? '../../Icon/check_green.png' : '../../Icon/more.png';
                $section.append(
                    "<div class='select_addr'>" +
                        "<span class='addr_name'>" + site.addr_web_name + "</span>" +
                        "<span class='myWeb_status'>" +
                            "<img class='web_status' src='" + statusSrc + "'>" +
                            "<p class='addr_web_name'>" + site.addr_web_name + "</p>" +
                            "<p class='addr_web'>" + site.addr_web + "</p>" +
                        "</span>" +
                    "</div>"
                );
            });
            $('#selectWebContainer').append($section);
        });

        // hover 显示 URL
        $('.select_addr').each(function() {
            var $addrWeb = $(this).find('.addr_web');
            var $webClass = $(this).closest('.selectWeb').find('.web_class');
            var original = $webClass.text();
            $(this).hover(function() {
                $webClass.text($addrWeb.text());
            }, function() {
                $webClass.text(original);
            });
        });

        // 点击选择/取消
        $('.myWeb_status').click(function(){
            var key = $(this).children(".addr_web").text();
            var value = $(this).children(".addr_web_name").text();
            if (selectedAddress.has(key)) {
                selectedAddress.delete(key);
            } else {
                selectedAddress.set(key, value);
            }
            localStorage.setItem("selectededWebAddress", JSON.stringify(Array.from(selectedAddress.entries())));
            location.reload();
        });
    });

    setWebAddress();

    $(document).on('mouseenter', '.delete_img', function() {
        this.src = '../../Icon/delete_red.png';
    }).on('mouseleave', '.delete_img', function() {
        this.src = '../../Icon/delete_black.png';
    });

    $(".addr").hover(function() {
        var key;
        if ($(this).children('.addr_delete').length > 0) {
            key = $(this).children('.addr_delete').children('.addr_web').text();
        } else if ($(this).children('.myAddr_delete').length > 0) {
            key = $(this).children('.myAddr_delete').children('.addr_web').text();
        }
        $("#addr").text(key);
    });

    $("#addWebSubmit").click(function(){
        var addressName = $('input[name="addressName"]').val();
        var webAddressAddr = $('input[name="webAddress"]').val();
        webAddress.set(webAddressAddr, addressName);
        localStorage.setItem("addedWebAddress", JSON.stringify(Array.from(webAddress.entries())));
        location.reload();
    });

    $(document).on('click', '.addr_delete', function(){
        var key = $(this).children('.addr_web').text();
        selectedAddress.delete(key);
        localStorage.setItem("selectededWebAddress", JSON.stringify(Array.from(selectedAddress.entries())));
        location.reload();
    });

    $(document).on('click', '.myAddr_delete', function(){
        var key = $(this).children('.addr_web').text();
        webAddress.delete(key);
        localStorage.setItem("addedWebAddress", JSON.stringify(Array.from(webAddress.entries())));
        location.reload();
    });

    $("#time_block").click(function(){ location.reload(); });
    $("#middle_left").click(function(){ setHiddenBlockStatus(0, false); });
    $("#middle_middle").click(function(){ setHiddenBlockStatus(0, true); });
    $("#middle_right").click(function(){ setHiddenBlockStatus(0, false); });

    function setWebAddress() {
        webAddress.forEach(function(value, key) {
            var display = value.length > 10 ? value.substring(0, 9) + ".." : value;
            $("#webAddress").append("<div class='addr'><span class='addr_name'>" + display +
                "</span><span class='myAddr_delete'><img class='delete_img' src='../../Icon/delete_black.png'><p class='addr_web'>" +
                key + "</p></span></div>");
        });
        selectedAddress.forEach(function(value, key) {
            var display = value.length > 10 ? value.substring(0, 9) + ".." : value;
            $("#webAddress").append("<div class='addr'><span class='addr_name'>" + display +
                "</span><span class='addr_delete'><img class='delete_img' src='../../Icon/delete_black.png'><p class='addr_web'>" +
                key + "</p></span></div>");
        });
    }
});
