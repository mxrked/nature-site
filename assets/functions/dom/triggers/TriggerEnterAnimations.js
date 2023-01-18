/**
 *
 *  This is used to trigger the animations when the user enters a page
 *
 */

function FMSlide(slideType, elements) {
  if (slideType === "V") {
    elements.forEach((slide) => {
      if (!slide.classList.contains("scroll-fade")) {
        slide.style.transform = "translateY(0)";
      }
    });
  }

  if (slideType === "H") {
    elements.forEach((slide) => {
      if (!slide.classList.contains("scroll-fade")) {
        slide.style.transform = "translateX(0)";
      }
    });
  }
}

export default function TriggerEnterAnimations() {
  // page
  if (document.querySelector(".page")) {
    setTimeout(() => {
      document.querySelectorAll(".page").forEach((page) => {
        page.style.opacity = 1;
        page.style.visibility = "visible";
      });
    }, 500);
  }

  // fm-scale
  if (document.querySelector(".fm-scale")) {
    const FM_SCALES = document.querySelectorAll(".fm-scale");

    setTimeout(() => {
      FM_SCALES.forEach((scale) => {
        if (!scale.classList.contains("scroll-fade")) {
          scale.style.scale = 1;
        }
      });
    }, 500);
  }

  // fm-fade-in
  if (document.querySelector(".fm-fade-in")) {
    const FM_FADE_INS = document.querySelectorAll(".fm-fade-in");

    setTimeout(() => {
      FM_FADE_INS.forEach((fadeIn) => {
        if (!fadeIn.classList.contains("scroll-fade")) {
          fadeIn.style.opacity = 1;
          fadeIn.style.visibility = "visible";
        }
      });
    }, 500);
  }

  // fm-slide-v
  if (document.querySelector(".fm-slide-v")) {
    const FM_SLIDE_VS = document.querySelectorAll(".fm-slide-v");

    setTimeout(() => {
      FMSlide("V", FM_SLIDE_VS);
    }, 500);
  }

  // fm-fade-up
  if (document.querySelector(".fm-fade-up")) {
    const FM_FADE_UPS = document.querySelectorAll(".fm-fade-up");

    setTimeout(() => {
      FM_FADE_UPS.forEach((fade) => {
        if (!fade.classList.contains("scroll-fade")) {
          fade.style.transform = "translateY(0)";
        }
      });
    }, 500);
  }
}
