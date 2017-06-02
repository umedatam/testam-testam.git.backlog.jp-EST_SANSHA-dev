    $(document).ready(function(){
        $("#pagetop").hide();
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 200) {
                $('#pagetop').fadeIn("slow");
            } else {
                $('#pagetop').fadeOut("slow");
            }
            scrollHeight = $(document).height();
            scrollPosition = $(window).height() + $(window).scrollTop();
            footHeight = $("footer").innerHeight();
            if ( scrollHeight - scrollPosition  <= footHeight ) {
                $("#pagetop").css({
                    "position":"absolute",
                    "bottom": footHeight
                });
            } else {
                $("#pagetop").css({
                    "position":"fixed",
                    "bottom": "0px"
                });
            }
        });
        $('#pagetop a').click(function () {
            $('body').animate({
            scrollTop: 0
            }, 500);
            return false;
         });
    });