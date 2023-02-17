function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("anim_open");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(
  "div.anim_closed, div.title_wrapper"
);
console.log(elements);

for (let elm of elements) {
  observer.observe(elm);
}
