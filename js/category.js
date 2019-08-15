$("div.firstCategory").mouseenter(function () {
    var i = $(this).attr("data-index");
    dynamic.showRightBlock(i);
});

$("div.firstCategory").mouseleave(function () {
    var i = $(this).attr("data-index");
    dynamic.hideRightBlock(i);
});

$("div.rightBlock").mouseenter(function () {
    var i = $(this).attr("data-index");
    dynamic.showRightBlock(i);
});

$("div.rightBlock").mouseleave(function () {
    var i = $(this).attr("data-index");
    dynamic.hideRightBlock(i);
});

var dynamic = {
    showRightBlock: function (i) {
        $(".rightBlock[data-index=" + i + "]").show();
        $(".firstCategory[data-index=" + i + "] a").css("color", "lightskyblue");
        $(".firstCategory[data-index=" + i + "]").css("backgroundColor", "white");
    },
    hideRightBlock: function (i) {
        $(".rightBlock[data-index=" + i + "]").hide();
        $(".firstCategory[data-index=" + i + "] a").css("color", "black");
        $(".firstCategory[data-index=" + i + "]").css("backgroundColor", "transparent");
    }
};
