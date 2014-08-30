$(document).ready(function() {
    var numbers = 0;
    if (!localStorage.Item) {
        localStorage.Item = "[]";
    }
    var Items = JSON.parse(localStorage.Item);

    for (var i = 0; i < Items.length; i++) {
        numbers += Items[i].numbers;
    }
    $("#item-numbers").text(numbers);
});