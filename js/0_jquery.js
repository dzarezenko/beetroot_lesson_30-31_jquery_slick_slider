$(() => {
  $("p").css({
    color: "red",
    textDecoration: "underline",
  }).attr(
    "title", "CONTENT"
  );
  console.log($("#content").attr("style"));
  //$("#content").attr("style", "color: blue;")
  $("#content").css("color", "blue");

  let p = $("#content");
  //p.text("Text");
  //p.html("<b>Bold Text</b>");
  $(`<b>Bold Text</b>`).appendTo(p);

  let a = document.createElement("a");
  a.innerText = "-link-";
  //a.appendTo(p);
  console.log(p);
  console.log(p[0]);
  p[0].appendChild(a);

  console.log(p.html());
  console.log(p.text().trim());

  p.on("click", (e) => {
    console.log(e);
    alert("!!!");
  });

  $("body").on("click", "#content", (e) => {
    console.log(e);
    alert("!!!!!!!!");
  });

  /*p.on("mouseover", (e) => {
    console.log(e);
    alert("mouseover");
  });*/

  $("#content").trigger("click");
});