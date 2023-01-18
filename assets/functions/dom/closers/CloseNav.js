/**
 *
 *  This is used to close the mobile nav menu
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseNav() {
  const MOBILE_NAV_MENU = document.getElementById("mobileNavMenu");
  const MOBILE_NAV_MENU_CNT = document.getElementById("mobileNavMenuCnt");

  MOBILE_NAV_MENU.style.pointerEvents = "none";
  MOBILE_NAV_MENU_CNT.style.opacity = 0;
  MOBILE_NAV_MENU_CNT.style.visibility = "hidden";

  setTimeout(() => {
    MOBILE_NAV_MENU.style.transform = "translateY(-100%)";
  }, 300);

  setTimeout(() => {
    RemoveStorageVariable("session", "Mobile Nav Opened");

    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto";
  }, 600);
}
