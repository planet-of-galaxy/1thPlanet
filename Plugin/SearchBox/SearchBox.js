$(document).ready(function(){
    $("#search1 .search-btn").click(function(){
        var $href = "https://www.bing.com/search?q=" + $("#search1 .search-input").val();
        window.location.href= $href;
        return false;
    })
    $("#search2 .search-btn").click(function(){
        var $href = "https://www.baidu.com/s?wd=" + $("#search2 .search-input").val();
        window.location.href= $href;
        return false;
    })
    $("#search3 .search-btn").click(function(){
        var $href = "https://www.google.com/search?q=" + $("#search3 .search-input").val();
        window.location.href= $href;
        return false;
    })
    $("#search1 .search-submit").click(function(){
        var $href = "https://www.bing.com/search?q=" + $("#search1 .search-input").val();
        window.location.href= $href;
        return false;
    })
    $("#search2 .search-submit").click(function(){
        var $href = "https://www.baidu.com/s?wd=" + $("#search2 .search-input").val();
        window.location.href= $href;
        return false;
    })
    $("#search3 .search-submit").click(function(){
        var $href = "https://www.google.com/search?q=" + $("#search3 .search-input").val();
        window.location.href= $href;
        return false;
    })

    $(".search-input").click(function(e){
        $(this).css("width","250px");
        e.stopPropagation();
    })

    $("#search4 #search-btn2").click(function(){
        var $href = "https://www.baidu.com/s?wd="  + $("#search4 #search-input4").val();
        window.location.href= $href;
        return false;
    })

    $("#search4 .search-submit").click(function(){
        var $href = "https://www.baidu.com/s?wd=" + $("#search4 #search-input4").val();
        window.location.href= $href;
        return false;
    })

    $("#restore").click(function() {
        restoreSearch();
    })

    $(document).click(function(e) {
        if (!$(e.target).closest('.search').length) {
            restoreSearch();
        }
    })

    function restoreSearch() {
        $(".search-input").css("width","0px");
    }
})