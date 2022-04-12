jQuery(document).ready(function ($) {
// ==================================================================================

    // Creates an image lightbox
    $(function () {
        var lightbox = $("#lightbox");
        lightbox.hide();
        $(".allow-lightbox").click(function () {
            var src = $(this).attr("src");
            $("body").addClass("lightbox-opened");
            lightbox.fadeIn().css("display", "flex");
            lightbox.find("img").attr("src", src);
        });
        $("#lightbox .close").click(function () {
            lightbox.fadeOut();
            $("body").removeClass("lightbox-opened");
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