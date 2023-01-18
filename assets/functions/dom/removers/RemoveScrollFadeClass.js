/**
 *
 *  This is used to remove the scroll-fade class from an element(s)
 *
 */

export default function RemoveScrollFadeClass(element) {
  if (element.classList.contains("scroll-fade")) {
    element.classList.remove("scroll-fade");
  }
}
