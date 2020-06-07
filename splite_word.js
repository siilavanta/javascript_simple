p = '<strong>word</strong>: or <em>word</em> or <p><strong>word</strong>: this is a sentence</p>'

var tempDivElement = document.createElement("div");
tempDivElement.innerHTML = p;

let t = tempDivElement.innerText
let words = t.match(/\w+|\S/g)
console.log(words)

console.log(typeof words)