/**
 *
 *  This is used to trigger the animations when the user exits a page
 *
 */

import RemoveScrollFadeClass from "../removers/RemoveScrollFadeClass";

function FMSlide(slideType, elements) {
  if (slideType === "V") {
    elements.forEach((slide) => {
      RemoveScrollFadeClass(slide);

      slide.style.transform = "translateY(-100%)";
    });
  }

  if (slideType === "H") {
    elements.forEach((slide) => {
      RemoveScrollFadeClass(slide);

      slide.style.transform = "translateX(-100%)";
    });
  }
}

export default function TriggerExitAnimations() {
  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";

  // fm-scale
  if (document.querySelector(".fm-scale")) {
    const FM_SCALES = document.querySelectorAll(".fm-scale");

    setTimeout(() => {
      FM_SCALES.forEach((scale) => {
        RemoveScrollFadeClass(scale);

        scale.style.scale = 1.07;
      });
    }, 500);
  }

  // fm-fade-in
  if (document.querySelector(".fm-fade-in")) {
    const FM_FADE_INS = document.querySelectorAll(".fm-fade-in");

    setTimeout(() => {
      FM_FADE_INS.forEach((fadeIn) => {
        RemoveScrollFadeClass(fadeIn);

        fadeIn.style.opacity = 0;
        fadeIn.style.visibility = "hidden";
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
        fade.style.transform = "translateY(-50px)";

        // Removing the scroll fade class to prevent reanimating
        RemoveScrollFadeClass(fade);
        fade.style.opacity = 0;
      });
    }, 500);
  }
}
