$(".section-header").click(function() {
    var newHeader = $(this).text()

    if (newHeader.charAt(1) == "+") {
        newHeader = newHeader.replace("+", "-");
        $(this).css("background-color", "white");
    } else if (newHeader.charAt(1) == "-") {
        newHeader = newHeader.replace("-", "+");
        $(this).css("background-color", "rgb(201, 201, 201)");
    } else {
        console.log("Missing - symbol at start of section header name")
    }
    
    $(this).text(newHeader)
    $break = $(this).next()
    $content = $break.next()

    $break.toggle();
    $content.toggle();
});