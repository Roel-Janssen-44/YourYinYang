$(document).ready(function () {
  const pageCover = document.querySelector("#page-cover");
  const myDetails = document.querySelector(".myDropdown");
  pageCover.addEventListener("click", () => {
    myDetails.open = false;
    pageCover.classList.add("hidden");
  });
  if ($(window).width() > 1023) {
    let elemHeight = $("#wie-ben-ik").height();
    let elemHeight2 = $("#specialisaties").height();
    // if(elemHeight > elemHeight2) return;
    $("#specialisaties").height(elemHeight);
  }
  if ($(window).width() > 1023) {
    let elemHeight = $("#page_content").height();
    $("#page_image").height(elemHeight + 100);
  }

  // Navbar animations
  const btn = document.querySelector(".mobile-menu-button");
  const nav = document.querySelector(".navbar");

  btn.addEventListener("click", () => {
    nav.classList.toggle("animate");
    if (nav.classList.contains("animate")) {
      animateNavbarIn();
    } else {
      animateNavbarOut();
    }
  });

  function animateNavbarIn() {
    let aaa = $(".mobile-menu-button");
    aaa.prop("disabled", true);
    const tl = gsap.timeline();
    tl.add(function () {
      animateNavbarOpen();
      burgerMenuOpen();
    });

    tl.add(function () {
      aaa.prop("disabled", false);
    });
  }

  function animateNavbarOut() {
    let aaa = $(".mobile-menu-button");
    aaa.prop("disabled", true);
    const tl = gsap.timeline();
    tl.add(function () {
      animateNavbarClose();
      burgerMenuClose();
    });
    tl.add(function () {
      aaa.prop("disabled", false);
    });
  }

  function animateNavbarOpen() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu", { top: "96px", duration: 1 });
    $(".mobile-menu ul").removeClass("invisible");
  }

  function animateNavbarClose() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu", { top: "-13rem", duration: 1 });
    $(".mobile-menu ul").addClass("invisible");
  }

  function burgerMenuOpen() {
    topBarOpen();
    middleBarOpen();
    bottomBarOpen();
    menuLabelOpen();
  }

  function burgerMenuClose() {
    topBarClose();
    middleBarClose();
    bottomBarClose();
    menuLabelClose();
  }

  function topBarOpen() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .icon-top", {
      transform: "translateY(0px) rotate(0deg)",
      duration: 0,
    });
    tl.to(".mobile-menu-button .icon-top", {
      transform: "translateY(12px) rotate(45deg)",
      duration: 0.4,
    });
  }

  function topBarClose() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .icon-top", {
      transform: "translateY(12px) rotate(45deg)",
      duration: 0,
    });
    tl.to(".mobile-menu-button .icon-top", {
      transform: "translateY(0) rotate(0)",
      duration: 0.3,
    });
  }

  function middleBarOpen() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .icon-center", {
      transform: "scaleX(1)",
      duration: 0,
    });
    tl.to(".mobile-menu-button .icon-center", {
      transform: "scaleX(0)",
      duration: 0.4,
    });
  }

  function middleBarClose() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .icon-center", {
      transform: "scaleX(0)",
      duration: 0.17,
    });
    tl.to(".mobile-menu-button .icon-center", {
      transform: "scaleX(1)",
      duration: 0.3,
    });
  }

  function bottomBarOpen() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .icon-bottom", {
      transform: "translateY(0px) rotate(0deg)",
      duration: 0,
    });
    tl.to(".mobile-menu-button .icon-bottom", {
      transform: "translateY(-11px) rotate(-45deg)",
      duration: 0.4,
    });
  }

  function bottomBarClose() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .icon-bottom", {
      transform: "translateY(-11px) rotate(-45deg)",
      duration: 0,
    });
    tl.to(".mobile-menu-button .icon-bottom", {
      transform: "translateY(0px) rotate(0deg)",
      duration: 0.3,
    });
  }

  function menuLabelOpen() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(0px)",
      opacity: 1,
      duration: 0,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(-10px)",
      duration: 0.2,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(22px)",
      opacity: 0,
      duration: 0.25,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(10px)",
      opacity: 0,
      duration: 0.1,
    });
  }

  function menuLabelClose() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(30px)",
      opacity: 0,
      duration: 0,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(25px)",
      opacity: 1,
      duration: 0.05,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(-30px)",
      duration: 0.2,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(-22px)",
      duration: 0.2,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(8px) rotate(-10deg)",
      duration: 0.13,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(-6px) rotate(0deg)",
      duration: 0.25,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(0px)",
      duration: 0.17,
    });
  }

  let details = document.querySelector("details");
  let summary = document.querySelector("summary");

  summary.addEventListener("click", function (event) {
    // first a guard clause: don't do anything
    // if we're already in the middle of closing the menu.
    if (details.classList.contains("summary-closing")) {
      return;
    }
    // but, if the menu is open ...
    if (details.open) {
      pageCover.classList.add("hidden");
      // prevent default to avoid immediate removal of "open" attribute
      event.preventDefault();
      // add a CSS class that contains the animating-out code
      details.classList.add("summary-closing");
      // when enough time has passed (in this case, 500 milliseconds),
      // remove both the "open" attribute, and the "summary-closing" CSS
      setTimeout(function () {
        details.removeAttribute("open");
        details.classList.remove("summary-closing");
      }, 500);
    } else {
      details.open = false;
      pageCover.classList.remove("hidden");
    }
  });
});
