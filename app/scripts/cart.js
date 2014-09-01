$(document).ready(function() {
    function showAll() {
        var numbers = 0;
        var total = 0;
        var minor_total = 0;
        var num = 0;
        if (!localStorage.Item) {
            localStorage.Item = "[]";
        }
        var Items = JSON.parse(localStorage.Item);
        var show_hide = [];

        for (var i = 0; i < 6; i++) {
            show_hide[i] = false;
        }

        function getMinorTotal(price, num) {
            if (num >= 3) {
                num = num - parseInt(num / 3);
            }
            return minor_total = price * num;
        }

        for (i = 0; i < Items.length; i++) {
            if (Items[i].name == '可口可乐') {
                show_hide[0] = true;
                num = Items[i].numbers;
                minor_total = getMinorTotal(Items[i].price, num);
                total += minor_total;
                $("#input-cola").val(num);
                $("#minor_cola").text(minor_total);
            }
            if (Items[i].name == '雪碧') {
                show_hide[1] = true;
                num = Items[i].numbers;
                minor_total = getMinorTotal(Items[i].price, num);
                total += minor_total;
                $("#input-spring").val(num);
                $("#minor_spring").text(minor_total);
            }
            if (Items[i].name == '苹果') {
                show_hide[2] = true;
                num = Items[i].numbers;
                minor_total = getMinorTotal(Items[i].price, num);
                total += minor_total;
                $("#input-apple").val(num);
                $("#minor_apple").text(minor_total);
            }
            if (Items[i].name == '荔枝') {
                show_hide[3] = true;
                num = Items[i].numbers;
                minor_total = getMinorTotal(Items[i].price, num);
                total += minor_total;
                $("#input-litchi").val(num);
                $("#minor_litchi").text(minor_total);
            }
            if (Items[i].name == '电池') {
                show_hide[4] = true;
                num = Items[i].numbers;
                minor_total = getMinorTotal(Items[i].price, num);
                total += minor_total;
                $("#input-buttery").val(num);
                $("#minor_buttery").text(minor_total);
            }
            if (Items[i].name == '方便面') {
                show_hide[5] = true;
                num = Items[i].numbers;
                minor_total = getMinorTotal(Items[i].price, num);
                total += minor_total;
                $("#input-noodle").val(num);
                $("#minor_noodle").text(minor_total);
            }
            numbers += Items[i].numbers;
        }
        if (!show_hide[0]) {
            $(".cola").remove();
        }
        if (!show_hide[1]) {
            $(".spring").remove();
        }
        if (!show_hide[2]) {
            $(".apple").remove();
        }
        if (!show_hide[3]) {
            $(".litchi").remove();
        }
        if (!show_hide[4]) {
            $(".buttery").remove();
        }
        if (!show_hide[5]) {
            $(".noodle").remove();
        }
        $("#total").text(total);
        $("#item-numbers").text(numbers);
    }

    showAll();

    $(".sub-cola").on("click", function() {
        subItem("可口可乐");
    });
    $(".sub-spring").on("click", function() {
        subItem("雪碧");
    });
    $(".sub-apple").on("click", function() {
        subItem("苹果");
    });
    $(".sub-litchi").on("click", function() {
        subItem("荔枝");
    });
    $(".sub-buttery").on("click", function() {
        subItem("电池");
    });
    $(".sub-noodle").on("click", function() {
        subItem("方便面");
    });
    $(".add-cola").on("click", function() {
        addItem("可口可乐");
    });
    $(".add-spring").on("click", function() {
        addItem("雪碧");
    });
    $(".add-apple").on("click", function() {
        addItem("苹果");
    });
    $(".add-litchi").on("click", function() {
        addItem("荔枝");
    });
    $(".add-buttery").on("click", function() {
        addItem("电池");
    });
    $(".add-noodle").on("click", function() {
        addItem("方便面");
    });

    function subItem(name) {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].numbers == 1 && items[i].name == name) {
                items.splice(i,1);
                break;
            }
            if(items[i].numbers > 1 && items[i].name == name){
                items[i].numbers -= 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    }

    function addItem(name) {
        var items = JSON.parse(localStorage.Item);
        for (var i = 0; i < items.length; i++){
            if(items[i].name == name){
                items[i].numbers += 1;
                break;
            }
        }
        localStorage.Item = JSON.stringify(items);
        showAll();
    }
});