function addFrameText() {
  var frameDoc = window.frames[0].document;
  var item = frameDoc.createElement("p");
  item.appendChild(frameDoc.createTextNode("Hello, world!"));
  for (i = 0; i < 10; ++i) {
    frameDoc.body.appendChild(item.cloneNode(true));
  }
}
