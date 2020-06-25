/*
$(document).ready(
    $("#but", "body").click(function () {
        console.log($("#container").html());
        console.log($("#container").text());
    })
);

$(function () {
    $("#but", "body").click(function () {
        $("#container").text("<p> hello </p>");
    });
});

$(function () {
    $("#but", "body").click(function () {
        $("#container").html("<p> hello </p>");
    });
});


$(function () {
    $("#but", "body").click(function () {
        $("#container").append("TOTO");
        $("#container").prepend("TATA");
    });
});

$(function () {
    console.log($("p").attr("class"));
});

$(function () {
    $("p").each(function (ind, elt) {
        console.log($(elt).attr("class"));
    });
});

$(function () {
    console.log($("p").first());
});

$(function () {
    $("p").eq(0).removeAttr("class");
    $("p").eq(0).attr("class", "red");
});

$(function () {
    $("#but").click(function () {
        console.log($("#nom").val());
    });
});

$(function () {
    $("#but").click(function () {
        $("#nom").prop("readonly", true);
        console.log($($(this)).prop("disabled")); // false
        console.log($($(this)).attr("disabled")); // undefined
        console.log($("#nom").prop("readonly")); // true
        console.log($("#nom").attr("readonly")); // readonly
    });
});

$(function () {
    $("#but").click(function () {
        $("p").eq(0).css("color", "green");
    });
});
*/

/*
$(function () {
    $("#but").click(
        function () {
            $("p").each(
                function () {
                    if ($(this).hasClass("red")) {
                        $(this).removeClass("red");
                        $(this).addClass("blue");
                    } else if ($(this).hasClass("blue")) {
                        $(this).removeClass("blue");
                        $(this).addClass("green");
                    } else if ($(this).hasClass("green")) {
                        $(this).removeClass("green");
                        $(this).addClass("red");
                    }
                }
            );
        }
    )
});
*/

$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });