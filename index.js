const btn = document.querySelector(".share-icon");
const btn2 = document.querySelector(".share-icon2");
const shared = document.querySelector(".shared");

btn.addEventListener("click", () => {
  if (shared.classList.contains("hidden")) {
    shared.classList.remove("hidden");
  } else {
    shared.classList.add("hidden");
  }
});

btn2.addEventListener("click", () => {
  if (shared.classList.contains("hidden")) {
    shared.classList.remove("hidden");
  } else {
    shared.classList.add("hidden");
  }
});
