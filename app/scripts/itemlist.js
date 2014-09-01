$(document).ready(function() {
    var kind,price,name,unit;
    var numbers = 0;
    if(!localStorage.Item) {
        localStorage.Item = "[]";
    }
    var Items = JSON.parse(localStorage.Item);

    for(var i = 0 ; i < Items.length; i++) {
        numbers += Items[i].numbers;
    }
    $("#item-numbers").text(numbers);

    function addItem(kind,name,price,unit) {
        numbers += 1;
        $("#item-numbers").text(numbers);
        var flag = true;
        for (var i = 0; i < Items.length; i++){
            if(Items[i].name == name) {
                Items[i].numbers += 1;
                flag = false;
                break;
            }
        }
        if(flag == true) {
            Items.push({kind:kind,name: name, price: price, unit: unit, numbers: 1});
        }
        localStorage.Item = JSON.stringify(Items);
    }

    $(".cola").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        kind = $(this).data("kind");
        price = +$(this).data("price");
        name = $(this).data("name");
        unit = $(this).data("unit");
        addItem(kind,name,price,unit);
    });
    $(".spring").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        kind = $(this).data("kind");
        price = +$(this).data("price");
        name = $(this).data("name");
        unit = $(this).data("unit");
        addItem(kind,name,price,unit);
    });
    $(".apple").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        kind = $(this).data("kind");
        price = +$(this).data("price");
        name = $(this).data("name");
        unit = $(this).data("unit");
        addItem(kind,name,price,unit);
    });
    $(".litchi").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        kind = $(this).data("kind");
        price = +$(this).data("price");
        name = $(this).data("name");
        unit = $(this).data("unit");
        addItem(kind,name,price,unit);

    });
    $(".battery").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        kind = $(this).data("kind");
        price = +$(this).data("price");
        name = $(this).data("name");
        unit = $(this).data("unit");
        addItem(kind,name,price,unit);
    });
    $(".noodle").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        kind = $(this).data("kind");
        price = +$(this).data("price");
        name = $(this).data("name");
        unit = $(this).data("unit");
        addItem(kind,name,price,unit);
    });


});