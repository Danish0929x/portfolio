const burger = document.querySelector(".menu-lines");
const linksNav = document.querySelector(".links");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  handlerLinks();
});

const handlerLinks = () => {
  if (burger.classList.contains("active")) {
    linksNav.style.transform = "translate3d(0, 0px, 0)";
  } else {
    linksNav.style.transform = "translate3d(500px, 0px, 0)";
  }
};

document.addEventListener("mousemove", parallax);
document.addEventListener("mousemove", parallax2);

function parallax(e) {
  this.querySelectorAll(".particle").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${
      x * 1
    }deg)`;
  });
}


function parallax2(e) {
  this.querySelectorAll(".img-part").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}


handlerLinks();


