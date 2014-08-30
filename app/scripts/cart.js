$(document).ready(function() {
    function showAll() {
        var numbers = 0;
        var total = 0;
        if (!localStorage.Item) {
            localStorage.Item = "[]";
        }
        var Items = JSON.parse(localStorage.Item);
        var show_hide = [];
        for (var i = 0; i < 6; i++) {
            show_hide[i] = false;
        }

        for (i = 0; i < Items.length; i++) {

            if (Items[i].name == '可口可乐') {
                show_hide[0] = true;
                var num = Items[i].numbers;
                $("#input-cola").val(num);
                if (num >= 3) {
                    num = num - parseInt(num / 3);
                }
                var minor_total = Items[i].price * num;
                total += minor_total;
                $("#minor_cola").text(minor_total);
            }
            if (Items[i].name == '雪碧') {
                show_hide[1] = true;
                num = Items[i].numbers;
                $("#input-spring").val(num);
                if (num >= 3) {
                    num = num - parseInt(num / 3);
                }
                minor_total = Items[i].price * num;
                total += minor_total;
                $("#minor_spring").text(minor_total);
            }
            if (Items[i].name == '苹果') {
                show_hide[2] = true;
                num = Items[i].numbers;
                $("#input-apple").val(num);
                if (num >= 3) {
                    num = num - parseInt(num / 3);
                }
                minor_total = Items[i].price * num;
                total += minor_total;
                $("#minor_apple").text(minor_total);
            }
            if (Items[i].name == '荔枝') {
                show_hide[3] = true;
                num = Items[i].numbers;
                $("#input-litchi").val(num);
                if (num >= 3) {
                    num = num - parseInt(num / 3);
                }
                minor_total = Items[i].price * num;
                total += minor_total;
                $("#minor_litchi").text(minor_total);
            }
            if (Items[i].name == '电池') {
                show_hide[4] = true;
                num = Items[i].numbers;
                $("#input-buttery").val(num);
                if (num >= 3) {
                    num = num - parseInt(num / 3);
                }
                minor_total = Items[i].price * num;
                total += minor_total;
                $("#minor_buttery").text(minor_total);
            }
            if (Items[i].name == '方便面') {
                show_hide[5] = true;
                num = Items[i].numbers;
                $("#input-noodle").val(num);
                if (num >= 3) {
                    num = num - parseInt(num / 3);
                }
                minor_total = Items[i].price * num;
                total += minor_total;
                $("#minor_noodle").text(minor_total);
            }
            numbers += Items[i].numbers;
        }

        if (show_hide[0] == false) {
            $(".cola").remove();
        }
        if (show_hide[1] == false) {
            $(".spring").remove();
        }
        if (show_hide[2] == false) {
            $(".apple").remove();
        }
        if (show_hide[3] == false) {
            $(".litchi").remove();
        }
        if (show_hide[4] == false) {
            $(".buttery").remove();
        }
        if (show_hide[5] == false) {
            $(".noodle").remove();
        }
        $("#total").text(total);
        $("#item-numbers").text(numbers);
    }
    showAll();
    $(".sub-cola").on("click", function() {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].numbers == 1 && items[i].name == "可口可乐") {
                items.splice(i,1);
                break;
            }
            if(items[i].numbers > 1 && items[i].name == "可口可乐"){
                items[i].numbers -= 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    });
    $(".sub-spring").on("click", function() {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].numbers == 1 && items[i].name == "雪碧") {
                items.splice(i,1);
                break;
            }
            if(items[i].numbers > 1 && items[i].name == "雪碧"){
                items[i].numbers -= 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    });
    $(".sub-apple").on("click", function() {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].numbers == 1 && items[i].name == "苹果") {
                items.splice(i,1);
                break;
            }
            if(items[i].numbers > 1 && items[i].name == "苹果"){
                items[i].numbers -= 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    });
    $(".sub-litchi").on("click", function() {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].numbers == 1 && items[i].name == "荔枝") {
                items.splice(i,1);
                break;
            }
            if(items[i].numbers > 1 && items[i].name == "荔枝"){
                items[i].numbers -= 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    });
    $(".sub-buttery").on("click", function() {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].numbers == 1 && items[i].name == "电池") {
                items.splice(i,1);
                break;
            }
            if(items[i].numbers > 1 && items[i].name == "电池"){
                items[i].numbers -= 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    });
    $(".sub-noodle").on("click", function() {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].numbers == 1 && items[i].name == "方便面") {
                items.splice(i,1);
                break;
            }
            if(items[i].numbers > 1 && items[i].name == "方便面"){
                items[i].numbers -= 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    });
    $(".add-cola").on("click", function() {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].name == "可口可乐"){
                items[i].numbers += 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    });
    $(".add-spring").on("click", function() {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].name == "雪碧"){
                items[i].numbers += 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    });
    $(".add-apple").on("click", function() {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].name == "苹果"){
                items[i].numbers += 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    });
    $(".add-litchi").on("click", function() {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].name == "荔枝"){
                items[i].numbers += 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    });
    $(".add-buttery").on("click", function() {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].name == "电池"){
                items[i].numbers += 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    });
    $(".add-noodle").on("click", function() {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].name == "方便面"){
                items[i].numbers += 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    });
});