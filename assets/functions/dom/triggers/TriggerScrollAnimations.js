/**
 *
 *  This is used to trigger the scroll animations
 *
 */

export default function TriggerScrollAnimations() {
  if (document.querySelector(".scroll-fade")) {
    const SCROLL_FADES = document.querySelectorAll(".scroll-fade");

    for (let i = 0; i < SCROLL_FADES.length; i++) {
      const W_H = window.innerHeight;
      const REVEAL_TOP = SCROLL_FADES[i].getBoundingClientRect().top; // Gets the top of each scroll-fade element
      const REVEAL_POINT = 150;

      if (REVEAL_TOP < W_H - REVEAL_POINT) {
        // Checking for a particular scroll style class
        if (SCROLL_FADES[i].classList.contains("fm-fade-up")) {
          SCROLL_FADES[i].style.opacity = 1;
          SCROLL_FADES[i].style.transform = "translateY(0)";
        }
        if (SCROLL_FADES[i].classList.contains("fm-fade-in")) {
          SCROLL_FADES[i].style.opacity = 1;
          SCROLL_FADES[i].style.visibility = "visible";
        }
      }
    }
  }
}
