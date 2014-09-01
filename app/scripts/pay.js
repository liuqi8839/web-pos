$(document).ready(function() {
    var numbers = 0;
    var total = 0;
    var minor_total = 0;
    var num = 0;
    var save = 0;
    var save_count = 0;
    var count = 0;
    if (!localStorage.Item) {
        localStorage.Item = "[]";
    }
    var Items = JSON.parse(localStorage.Item);
    var show_hide = [];
    var show_give = [];
    for (var i = 0; i < 6; i++) {
        show_hide[i] = false;
        show_give[i] = false;
    }

    for (i = 0; i < Items.length; i++) {
        if (Items[i].name == '可口可乐') {
            show_hide[0] = true;
            count = num = Items[i].numbers;
            if (num >= 3) {
                show_give[0]= true;
                count = num - parseInt(num / 3);
            }
            minor_total = Items[i].price * count;
            total += minor_total;
            save_count = num - count;
            save += Items[i].price * save_count;
            $(".give-cola-count").text(save_count);
            $(".cola-count").text(count);
            $(".cola-minor").text(minor_total);
        }
        if (Items[i].name == '雪碧') {
            show_hide[1] = true;
            count = num = Items[i].numbers;
            if (num >= 3) {
                show_give[1]= true;
                count = num - parseInt(num / 3);
            }
            minor_total = Items[i].price * count;
            total += minor_total;
            save_count = num - count;
            save += Items[i].price * save_count;
            $(".give-spring-count").text(save_count);
            $(".spring-count").text(count);
            $(".spring-minor").text(minor_total);
        }
        if (Items[i].name == '苹果') {
            show_hide[2] = true;
            count = num = Items[i].numbers;
            if (count >= 3) {
                show_give[2]= true;
                count = count - parseInt(count / 3);
            }
            minor_total = Items[i].price * count;
            total += minor_total;
            save_count = num - count;
            save += Items[i].price * save_count;
            $(".give-apple-count").text(save_count);
            $(".apple-count").text(count);
            $(".apple-minor").text(minor_total);
        }
        if (Items[i].name == '荔枝') {
            show_hide[3] = true;
            count = num = Items[i].numbers;
            if (count >= 3) {
                show_give[3]= true;
                count = count - parseInt(count / 3);
            }
            minor_total = Items[i].price * count;
            total += minor_total;
            save_count = num - count;
            save += Items[i].price * save_count;
            $(".give-litchi-count").text(save_count);
            $(".litchi-count").text(count);
            $(".litchi-minor").text(minor_total);
        }
        if (Items[i].name == '电池') {
            show_hide[4] = true;
            count = num = Items[i].numbers;
            if (count >= 3) {
                show_give[4]= true;
                count = count - parseInt(count / 3);
            }
            minor_total = Items[i].price * count;
            total += minor_total;
            save_count = num - count;
            save += Items[i].price * save_count;
            $(".give-buttery-count").text(save_count);
            $(".buttery-count").text(count);
            $(".buttery-minor").text(minor_total);
        }
        if (Items[i].name == '方便面') {
            show_hide[5] = true;
            count = num = Items[i].numbers;
            count = num;
            if (count >= 3) {
                show_give[5]= true;
                count = count - parseInt(count / 3);
            }
            minor_total = Items[i].price * count;
            total += minor_total;
            save_count = num - count;
            save += Items[i].price * save_count;
            $(".give-noodle-count").text(save_count);
            $(".noodle-count").text(count);
            $(".noodle-minor").text(minor_total);
        }
        numbers += Items[i].numbers;
    }
    if (!show_hide[0]) {
        $("#cola").remove();
    }
    if (!show_hide[1]) {
        $("#spring").remove();
    }
    if (!show_hide[2]) {
        $("#apple").remove();
    }
    if (!show_hide[3]) {
        $("#litchi").remove();
    }
    if (!show_hide[4]) {
        $("#buttery").remove();
    }
    if (!show_hide[5]) {
        $("#noodle").remove();
    }
    if (!show_give[0]) {
        $("#give-cola").remove();
    }
    if (!show_give[1]) {
        $("#give-spring").remove();
    }
    if (!show_give[2]) {
        $("#give-apple").remove();
    }
    if (!show_give[3]) {
        $("#give-litchi").remove();
    }
    if (!show_give[4]) {
        $("#give-buttery").remove();
    }
    if (!show_give[5]) {
        $("#give-noodle").remove();
    }
    $("#total").text(total);
    $("#save").text(save);
    $("#item-numbers").text(numbers);
    $(".sure").on("click",function() {
       localStorage.Item = "[]";
    });
});