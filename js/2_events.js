/**
 * Name of the product
 */
let productName;

/**
 * PI math constant
 */
const PI = 3.141592;

/**
 * Returns color component if hexadecimal format.
 */
let getRandomComponent = () => {
  return Math.ceil(255 * Math.random()).toString(16);
}

/**
 * Generates color in CSS format.
 */
let getColor = () => { // #ffcc0a
  let r = getRandomComponent(),
      g = getRandomComponent(),
      b = getRandomComponent();

  return `#${r}${g}${b}`;
}

/**
 * Retruns summ of two numbers.
 * 
 * @param {Number} a First number. 
 * @param {Number} b Second number.
 */
let sum = (a, b) => {
  return a + b;
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
