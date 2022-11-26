$(function () {
    var header = $(".header")
    var header_gnb = header.find(".content .gnb");
    var maxWidth = $(window).innerWidth();

    // fullpage
    $('#fullpage').fullpage({
        //options here
        responsiveWidth: 1025,
        autoScrolling:true,
        scrollHorizontally: true,
        anchors:['visual', 'about', 'skill', 'work', 'footer'],
        afterLoad: function(archorLink, index) {
            // console.log(archorLink);
            // console.log(index);
            header_gnb.find("li").each(function () {
                var gnb_data = $(this).attr("data-gnb");
                
                //  archorLink 와 gnb_data 가 같으면...
                if (archorLink == gnb_data) {
                    $(this).addClass("active").siblings("li").removeClass("active");
                } 

                // visual 영역일때 gnb 클래스 제거
                if (archorLink == 'visual') {
                    header_gnb.find("li").removeClass("active");
                }
                // footer 영역일때 gnb 클래스 제거
                if (archorLink == 'footer') {
                    header_gnb.find("li").removeClass("active");
                }
            })
        },
    });

    // gnb 클릭 이벤트
    header_gnb.find("li").each(function () {
        $(this).on("click", function () {
            $(this).addClass("active").siblings("li").removeClass("active");
        })
    })
    
    // 디바이스에 따른 이벤트
    if (maxWidth < 1024) {
        header_gnb.find("li").on("click", function () {
            header.removeClass("on");
        })
    }
})