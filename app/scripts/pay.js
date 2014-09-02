$(document).ready(function() {
    var numbers = 0;
    var total = 0;
    var minor_total = 0;
    var preferentialCost = 0;
    if (!localStorage.Item) {
        localStorage.Item = "[]";
    }
    var goods = JSON.parse(localStorage.Item);
    var allItems = JSON.parse(localStorage.AllItems);
    var preferential = JSON.parse(localStorage.preferential);

    for(var i = 0; i < allItems.length; i++) {
        for(var j = 0; j < goods.length; j++) {
            var name = goods[j].name;
            var count = goods[j].numbers;
            if (allItems[i].name == name) {
                var kind = allItems[i].kind;
                var price = allItems[i].price;
                var unit = allItems[i].unit;
                var original_cost = minor_total = price * count;
                var show_cost = "<span>" + minor_total + "</span>" + "元";

                for (var k = 0; k < preferential.length; k++) {
                    if (name == preferential[k]) {
                        if (count >= 3) {
                            var preferential_count = parseInt(count / 3);
                            var num = count - preferential_count;
                            minor_total = price * num;
                            show_cost = "<span>" + minor_total + "</span>" + "元(原价：" + "<span>" + original_cost + "</span>" + "元)";
                            var showPreferential = $(
                                    "<tr>" +
                                    "<th class='text_center'>" + kind + "</th>" +
                                    "<th class='text_center'>" + name + "</th>" +
                                    "<th class='text_center'>" + preferential_count + "</th>" +
                                    "</tr>"
                            );
                            $('#show_preferential').append(showPreferential);
                            preferentialCost += preferential_count * price;
                        }
                    }
                }

                var showGoods = $(
                    "<tr id='one_goods'>" +
                    "<th class='text_center'>" + kind + "</th>" +
                    "<th class='text_center'>" + name + "</th>" +
                    "<th class='text_center'>" + price + "</th>" +
                    "<th class='text_center'>" + unit + "</th>" +
                    "<th class='text_center'>" + count + "</th>" +
                    "<th class='text_center'>" + show_cost + "</th>" +
                    "</tr>"
                );
                $('#show_goods').append(showGoods);
                numbers += count;
                total += minor_total;
            }
        }
    }
    $("#total").text(total);
    $("#preferential").text(preferentialCost);
    $("#item-numbers").text(numbers);
    $(".sure").on("click",function() {
       localStorage.Item = "[]";
    });
});