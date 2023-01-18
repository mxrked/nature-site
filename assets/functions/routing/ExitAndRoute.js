/**
 *
 *  This is used to route through the different pages
 *
 */

import DeclareStorageVariable from "../data/storage/DeclareStorageVariable";
import RemoveStorageVariable from "../data/storage/RemoveStorageVariable";
import TriggerExitAnimations from "../dom/triggers/TriggerExitAnimations";

// Gets the route
function GetRoute(rooter, route) {
  const env = process.env.NODE_ENV;

  // On Client
  if (env == "development") {
    if (rooter.pathname == route) {
      console.log("You are already on that page..");
    } else {
      rooter.push(route, undefined, { shallow: true });
    }
  }

  // On Server
  if (rooter.pathname == route) {
    console.log("You are already on that page..");
  } else {
    rooter.push(route, undefined, { shallow: true });
  }
}

// Routing the page
function PageRouting(rooter, route, checkRoute) {
  // document.body.style.overflowY = "hidden";
  // document.body.style.pointerEvents = "none";
  window.scrollTo(0, 0);

  // Making sure the user is at/not at the top of the page before routing
  DeclareStorageVariable("session", "Page Routing", true);

  // window.scrollTo(0, 0);
  setTimeout(() => {
    if (window.scrollY !== 0 || window.scrollY === 0) {
      checkRoute = true;
      setTimeout(() => {
        GetRoute(rooter, route);
      }, 100);
    }
  }, 1000);

  // Forces user to page with refresh
  setTimeout(() => {
    if (!checkRoute) {
      rooter.reload();
    }
  }, 1050);
}

// Triggers exit animations and routes to page
export default function ExitAndRoute(rooter, route, checkRoute) {
  TriggerExitAnimations(); // Triggers the exit animations

  setTimeout(() => {
    PageRouting(rooter, route, checkRoute);
  }, 1000);
}
