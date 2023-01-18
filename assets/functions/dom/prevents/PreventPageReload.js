/**
 *
 *  This is used to prevent the page from reloading and will do so after some time
 *
 */

export default function PreventPageReload(e) {
  // Ctrl + R
  if (e.key === "r" && e.ctrlKey) {
    e.preventDefault();
  }

  // F5
  if (e.keyCode == 116) {
    e.preventDefault();
  }
}
