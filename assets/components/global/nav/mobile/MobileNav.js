/**
 *
 *  This is the mobile nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import ExitAndRoute from "../../../../functions/routing/ExitAndRoute";

import styles from "../../../../styles/modules/Nav/Nav.module.css";
import DeclareStorageVariable from "../../../../functions/data/storage/DeclareStorageVariable";

export const MobileNav = () => {
  const router = useRouter();

  // Route checkers
  let indexRouted = false;

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav} mobile-nav`}>
      <div className={`${styles.mobile_nav_inner} fm-slide-v full-second`}>
        <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
          <div className={`${styles.mobile_nav_inner_row} row`}>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                <div
                  className={`${styles.logo} index-link half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/", indexRouted);
                  }}
                >
                  <h1>Naturmore</h1>
                </div>
              </div>
            </div>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                <button
                  id="mobileNavToggler"
                  className={`${styles.mobile_nav_toggler}`}
                  onClick={() => {
                    DeclareStorageVariable(
                      "session",
                      "Mobile Nav Opened",
                      true
                    );

                    document.body.style.overflowY = "hidden";
                    document.body.style.pointerEvents = "none";

                    const MOBILE_NAV_MENU =
                      document.getElementById("mobileNavMenu");
                    const MOBILE_NAV_MENU_CNT =
                      document.getElementById("mobileNavMenuCnt");

                    MOBILE_NAV_MENU.style.display = "block";

                    setTimeout(() => {
                      MOBILE_NAV_MENU.style.transform = "translateY(0)";
                    }, 1000);

                    setTimeout(() => {
                      MOBILE_NAV_MENU_CNT.style.opacity = 1;
                      MOBILE_NAV_MENU_CNT.style.visibility = "visible";
                    }, 1800);

                    setTimeout(() => {
                      MOBILE_NAV_MENU.style.pointerEvents = "auto";
                    }, 2000);
                  }}
                >
                  <span className="half-second" />
                  <span className="half-second" />
                  <span className="half-second" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
