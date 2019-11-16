$(() => {
  let p = $("#content");

  p.append("<b>bold text</b>");
  p.prepend("<em>italic text</em>");

  let text = $(`<span>some text</span><br />`);
  p.prepend(text);

  text.css({
    color: "green"
  });

  let header = $(`<h1></h1>`); // = document.createElement("h1")
  header.text("Header"); // header.innerText("Header")
  p.append(header); // p.appendChild(header)

  //p.text("Text");

  console.log(p.text());
});
