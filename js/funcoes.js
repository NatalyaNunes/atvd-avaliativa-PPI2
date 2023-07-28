$("div").click(function(){

    $("div").css("background-color", "blue");
    $(this).next().css("background-color", "green");
    $(this).prev().css("background-color", "red");
});