

function Items(name, price, unit) {
    this.name = name;
    this.price = price;
    this.unit = unit;
    this.numbers = 1;
}

Items.prototype.addNew = function() {
    var items = JSON.parse(localStorage.Item);
    if(!_.find(items, {name: this.name})) {
        items.push(this);
    }
    localStorage.Item = JSON.stringify(items);
};

Items.prototype.addNumber = function() {
    var items = JSON.parse(localStorage.Item);
    _.findWhere(items, {name: this.name}).numbers += 1;
    localStorage.Item = JSON.stringify(items);
};

Items.prototype.subNumber = function() {
    var items = JSON.parse(localStorage.Item);
    var name = this.name;
    _.some(items, function(item) {
        if(item.numbers == 1 && item.name == name) {
            return items.splice(this);
        }
        _.findWhere(items, {name: name}).numbers -= 1;
    });
    localStorage.Item = JSON.stringify(items);
};