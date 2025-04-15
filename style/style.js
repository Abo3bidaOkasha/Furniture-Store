function scrollDown() {
  const target = document.getElementById("qwe");
  target.scrollIntoView({ behavior: "smooth" });
}
function asd() {
  alert("Add To Basket");
}
Array.from(document.querySelectorAll("a")).map((el, i) => {
  el.textContent = `Link ${i + 1}`;
});

function incrementCounter() {
  counter += 1;
  document.getElementById("counterValue").textContent = counter;
}
