var itemlist = ['food', 'book', 'car', 'kkk']
var fooditem = ['kabab', 'noodles', 'drycake', 'soup', 'kkk']
var bookitem = ['english', 'bangla', 'chakma']
var caritem = ['toyota', 'tata', 'honda', 'mohedra']
var empty = ['']

var all = [fooditem, bookitem, caritem, empty]
var output4 = []
for (let i = 0; i < itemlist.length; i++) {
  output4.push(itemlist[i].concat(': ' + all[i]))
}
console.log(output4)
