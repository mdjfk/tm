$(".icon span").mouseenter(function () {
    var left = $(this).position().left;
    var width = $(this).css("width");
    var des = parseInt(left) + parseInt(width) / 2 + 5;
    $(".ear").css("left", des);
    $(".ear").show();
});

$(".icon span").mouseleave(function () {
    $(".ear").hide();
});