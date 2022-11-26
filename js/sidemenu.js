$(function () {
    var header = $(".header");
    var menu_btn = header.find(".content .menu");

    // open & close
    menu_btn.on("click", function() {
        
        if (header.is(".on") == true) {
            header.removeClass("on");
        } else {
            header.addClass("on");
        }
    })
})