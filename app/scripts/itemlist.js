$(document).ready(function() {
    var kind,price,name,unit;
    var numbers = 0;
    if(!localStorage.Item) {
        localStorage.Item = '[]';
    }
    var goods = JSON.parse(localStorage.Item);

    for(var i = 0 ; i < goods.length; i++) {
        numbers += goods[i].numbers;
    }
    $('#item-numbers').text(numbers);

    function addGoods(name) {
        numbers += 1;
        $('#item-numbers').text(numbers);
        var flag = true;
        for (var i = 0; i < goods.length; i++){
            if(goods[i].name == name) {
                goods[i].numbers += 1;
                flag = false;
                break;
            }
        }
        if(flag == true) {
            goods.push({name: name, numbers: 1});
        }
        localStorage.Item = JSON.stringify(goods);
    }
    var allItems = JSON.parse(localStorage.AllItems);
    for(var j = 0; j < allItems.length; j++) {
        name = allItems[j].name;
        kind = allItems[j].kind;
        price = allItems[j].price;
        unit = allItems[j].unit;
        var addItem = $(
            "<tr>" +
                "<td>"+kind+"</td>" +
                "<td>"+name+"</td>" +
                "<td>"+price+"</td>" +
                "<td>"+unit+"</td>" +
                "<td>" +
                "<p align='center'>" +
                "<a href='#' class='btn btn-primary btn-2 add-goods' role='button'>加入购物车</a>" +
                "</p>" +
                "</td>" +
            "</tr>");
        $('tbody').append(addItem);
    }

    $('.add-goods').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        addGoods($(this).parent().parent().prev().prev().prev().text());
    });
});