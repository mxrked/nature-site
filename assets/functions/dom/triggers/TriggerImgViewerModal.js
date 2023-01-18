/**
 *
 *  This is used to trigger an img viewer modal
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function TriggerImgViewerModal(modalID) {
  if (document.querySelector(`#${modalID}`)) {
    DeclareStorageVariable("session", "Modal Opened", true);

    document.body.style.overflowY = "hidden";
    document.body.style.pointerEvents = "none";

    document.getElementById(modalID).style.display = "block";

    setTimeout(() => {
      document.getElementById(modalID).style.opacity = 1;
      document.getElementById(modalID).style.visibility = "visible";
    }, 400);

    setTimeout(() => {
      document.querySelector(`#${modalID} img`).style.opacity = 1;
    }, 700);

    setTimeout(() => {
      document.getElementById(modalID).style.pointerEvents = "auto";
    }, 1450);
  }
}
