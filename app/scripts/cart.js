$(document).ready(function() {
    function showAll() {
        var numbers = 0;
        var total = 0;
        var minor_total = 0;
        if (!localStorage.Item) {
            localStorage.Item = '[]';
        }
        var allItems = JSON.parse(localStorage.AllItems);
        var goods = JSON.parse(localStorage.Item);
        var preferential = JSON.parse(localStorage.preferential);

        for(var i = 0; i < allItems.length; i++) {
            for(var j = 0; j < goods.length; j++) {
                var name = goods[j].name;
                var count = goods[j].numbers;
                if(allItems[i].name == name) {
                    var kind = allItems[i].kind;
                    var price = allItems[i].price;
                    var unit = allItems[i].unit;
                    var original_cost = minor_total = price * count;
                    var show_cost = "<span>" + minor_total + "</span>" + "元";

                    for (var k = 0; k < preferential.length; k++) {
                        if(name == preferential[k]) {
                            if (count >= 3) {
                                var num = count - parseInt(count / 3);
                                minor_total = price * num;
                                show_cost = "<span>" + minor_total + "</span>" + "元(原价：" + "<span>" + original_cost + "</span>" + "元)";
                            }
                        }
                    }

                    var showGoods = $(
                            "<tr class='one_good'>" +
                            "<td style='width: 218px;'>" + kind + "</td>" +
                            "<td style='width: 218px;'>" + name + "</td>" +
                            "<td style='width: 218px;'>" + price + "</td>" +
                            "<td>" + unit + "</td>" +
                            "<td>" +
                            "<div class='input-group input-grounp_width' align='center'>" +
                            "<span class='input-group-btn'>" +
                            "<button class='btn btn-default sub-goods' type='button'>-</button>" +
                            "</span>" +
                            "<input type='text' class='form-control' value=" +count+">"+
                            "<span class='input-group-btn'>" +
                            "<button class='btn btn-default add-goods' type='button'>+</button>" +
                            "</span>" +
                            "</div>" +
                            "</td>" +
                            "<td>" + show_cost+ "</td>" +
                            "</tr>"
                    );
                    $('tbody').append(showGoods);
                    numbers += count;
                    total += minor_total;
                }
            }
        }
        var total_cost = total.toFixed(2);
        $('#total').text(total_cost);
        $('#item-numbers').text(numbers);
        $('.sub-goods').on('click', function() {
            var goods = JSON.parse(localStorage.Item);
            if(goods.length == 1){
                goods = [];
            }
            else {
                var name = $(this).closest('.one_good').find('td').first().next().text();
                for (var i = 0; i < goods.length; i++) {
                    if (goods[i].numbers == 1 && goods[i].name == name) {
                        goods.splice(i, 1);
                        break;
                    }
                    if (goods[i].numbers > 1 && goods[i].name == name) {
                        goods[i].numbers -= 1;
                        break;
                    }
                }
            }
            localStorage.Item = JSON.stringify(goods);
            $('tbody').find('tr').remove();
            showAll();
        });

        $('.add-goods').on('click', function() {
            var goods = JSON.parse(localStorage.Item);
            for (var i = 0; i < goods.length; i++){
                if(goods[i].name == $(this).closest('.one_good').find('td').first().next().text()){
                    goods[i].numbers += 1;
                    break;
                }
            }
            localStorage.Item = JSON.stringify(goods);
            $('tbody').find('tr').remove();
            showAll();
        });
    }
    showAll();
});