let item = document.querySelectorAll("li");
let light = document.querySelector(".tubelight");
item.forEach((items) => {
  items.addEventListener("click", () => {
    item.forEach((e) => {
      e.classList.remove("active");
      e.classList.remove("pd");
    });
    items.classList.toggle("active");
    items.classList.toggle("pd");
    light.style.left = `${items.offsetLeft + 28}px`;
  });
});
