var array = new Array();
var thing1 = {
  property: "value-1"
};
var thing2 = {
  property: "value-2"
};

array.push(thing1);
array.push(thing2);

for (index = 0; index < array.length; ++index) {
  test_el = document.createElement('p');

  test_el.innerHTML = array[index].property;

  document.body.appendChild(test_el);
};
//https://stackoverflow.com/questions/54154293/how-to-create-elements-set-attribute-use-innerhtml-and-appendchild-with-js-an
