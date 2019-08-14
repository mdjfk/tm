$("[class^=firstCategory]").mouseenter(function () {
    $("[class^=rightBlock]").hide();
    $(".rightBlock_" + $(this).attr("data-index")).show();

    $("[class^=firstCategory]").find("a").css("color", "black");
    $("[class^=firstCategory]").css("backgroundColor", "transparent");

    $(this).find("a").css("color", "lightskyblue");
    $(this).css("backgroundColor", "white");
});

$("[class^=firstCategory]").mouseleave(function () {
    $("[class^=rightBlock]").hide();
    // $(".rightBlock_" + $(this).attr("data-index")).show();

    $("[class^=firstCategory]").find("a").css("color", "black");
    $("[class^=firstCategory]").css("backgroundColor", "transparent");

    // $(this).find("a").css("color", "lightskyblue");
    // $(this).css("backgroundColor", "white");
});

$("[class^=rightBlock]").mouseenter(function () {
    var index = $(this).attr("data-index");
    $("#firstCategory_" + index).find("a").css("color", "lightskyblue");
    $("#firstCategory_" + index).css("backgroundColor", "white");
});

$("[class^=rightBlock]").mouseleave(function () {

});

