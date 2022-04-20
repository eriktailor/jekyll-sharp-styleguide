jQuery(document).ready(function ($) {
// ==================================================================================

    // Image lightbox gallery
    $(function(){
        $('.lightbox').hide();
        var lightbox = function(){
            var src = $('.lb-active').attr('src');
            $('.lightbox img').attr('src', src);
        }
        $('.allow-lightbox').click(function(){
            $("body").addClass("lightbox-opened");
            $('.lightbox').fadeIn().css('display','flex');
            $(this).addClass('lb-active');
            if( $(this).parent().hasClass('gallery') ) {
                $('.lb-prev, .lb-next').show();
            }
            lightbox();
        });
        $('.lb-close').click(function(){
            $('img').removeClass('lb-active');
            $("body").removeClass("lightbox-opened");
            $('.lightbox').fadeOut();
            $('.lb-prev, .lb-next').hide();
        });
        $('.lb-next').click(function(){
            if( $('.lb-active').parent('.gallery').children('img:last').hasClass('lb-active') ) {
                $('.lb-active').removeClass().parent('.gallery').children('img:first').addClass('lb-active');
                lightbox();
            } else {
                $('.lb-active').removeClass().next('img').addClass('lb-active');
                lightbox();
            }
        });
        $('.lb-prev').click(function(){
            if( $('.lb-active').parent('.gallery').children('img:first').hasClass('lb-active') ) {
                $('.lb-active').removeClass().parent('.gallery').children('img:last').addClass('lb-active');
                lightbox();
            } else {
                $('.lb-active').removeClass().prev('img').addClass('lb-active');
                lightbox();
            }
        });
    });

    // Select field placeholder color
    $(function(){
        function select_placeholder() {
        $("select").each(function () {
            var select_val = $(this).val();
            if (select_val != "") {
                $(this).removeClass("select-placeholder");
            } else {
                $(this).addClass("select-placeholder");
            }
            });
        }
        $(document).on("change", "select", function () {
            select_placeholder();
        });
        select_placeholder();
    });

    // Initialize tooltips on icons
    $(function (){
        $('.icons-list i').simpletooltip({
            color: 'white',
        });
    });

    // Make anchor headings hash in url
    $(function () {
        $("h2, h3, h4").each(function () {
            var str = $(this).text().toLowerCase().replace(/\s+/g, "-");
            //str.toString().replace(/\s+/g, "-");
            $(this).attr("id", str);
            $(this).prepend('<a class="anchor"><i class="feather-link"></i></a>');
        });
        $(".anchor").click(function (e) {
            window.location.hash = $(this).parent().attr("id");
            e.preventDefault();
        });
    });

// ==================================================================================
});