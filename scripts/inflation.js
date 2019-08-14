//Card mouseover effect
$(document).on("mouseover", ".inflatable", function () {
    $(this).removeClass('deflated');
    $(this).addClass('inflated');
});

//Card mouseout effect
$(document).on("mouseout", ".inflatable", function () {
    $(this).removeClass('inflated');
    $(this).addClass('deflated');
});