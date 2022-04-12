jQuery(document).ready(function ($) {
// ==================================================================================

  

// ==================================================================================
});

  // Select field placeholder color
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