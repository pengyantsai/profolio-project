let header = document.querySelector("header");
let headera = document.querySelectorAll("header nav ul li a");
window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style.backgroundColor = "rgba(0,0,0,0.8)";
    header.style.color = "white";
    headera.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    headera.forEach((a) => {
      a.style.color = "#095988";
    });
  }
});
