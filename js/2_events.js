let getRandomComponent = () => {
  return Math.ceil(255 * Math.random()).toString(16);
}

let getColor = () => { // #ffcc0a
  let r = getRandomComponent(),
      g = getRandomComponent(),
      b = getRandomComponent();

  return `#${r}${g}${b}`;
}

$(() => {
  $("body").on("click", "p", (e) => {
    console.log(e);
    console.log(e.target);
    console.log($(e.target));
    console.log($(this));

    let p = $(e.target);
    p.css({
      color: getColor()
    });
  })
});
