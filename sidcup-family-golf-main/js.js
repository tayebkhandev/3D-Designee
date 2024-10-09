const cusr = document.querySelector(".cursior");
const blur = document.querySelector(".cursior-bluar");
document.addEventListener("mousemove", function (dets) {
  cusr.style.left = dets.x + "px";
  cusr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

gsap.to(".nav", {
  backgroundColor: "#000",
  height: "110px",
  durstion: 0.5,
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 3,
  },
});

gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -75%",
    scrub: 3,
  },
});

var hal4 = document.querySelectorAll(".nav h4");
hal4.forEach(function (elemant) {
  elemant.addEventListener("mouseenter", function () {
    cusr.style.scale = 3;
    cusr.style.border = "1px solid #fff";
    cusr.style.backgroundColor = "transparent";
  });
  elemant.addEventListener("mouseleave", function () {
    cusr.style.scale = 1;
    cusr.style.border = "0px solid #91b508";
    cusr.style.backgroundColor = "#91b508";
  });
});

// gsap.from(".about-me img, .about-in"), {
//     y: 90,
//     opacity: 0,
//     durstion: 1,
//     scrollTrigger: {
//         trigger: ".about-in",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         end: "top 55%",
//         scrub: 3,
//     },
// };
gsap.from(".page-3 .colon-image-1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: ".colon-image-1",
    scroller: "body",
    // markers: true,
    start: "top 56%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from(".page-3 .colon-image-2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: ".colon-image-1",
    scroller: "body",
    // markers: true,
    start: "top 56%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from(".page-4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".page-4 h1",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 100%",
    scrub: 2,
  },
});
