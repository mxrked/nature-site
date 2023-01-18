/**
 *
 *  This is used to close an image viewer modal
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseImgViewerModal(modal) {
  const CURRENT_MODAL = modal;

  CURRENT_MODAL.style.pointerEvents = "none";
  CURRENT_MODAL.style.overflowY = "hidden";

  setTimeout(() => {
    CURRENT_MODAL.style.opacity = 0;
    CURRENT_MODAL.style.visibility = "hidden";
  }, 700);

  setTimeout(() => {
    RemoveStorageVariable("session", "Modal Opened");

    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto";
  }, 1400);
}
