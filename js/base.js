$(".section-header").click(function() {
    var newHeader = $(this).text()

    if (newHeader.charAt(0) == "+") {
        newHeader = newHeader.replace("+", "-");
        $(this).css("background-color", "white");
    } else if (newHeader.charAt(0) == "-") {
        newHeader = newHeader.replace("-", "+");
        $(this).css("background-color", "rgb(201, 201, 201)");
    }
    
    $(this).text(newHeader)
    $break = $(this).next()
    $content = $break.next()

    $break.toggle();
    $content.toggle();
});