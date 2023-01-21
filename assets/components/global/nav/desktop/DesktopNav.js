/**
 *
 *  This is the desktop nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import ExitAndRoute from "../../../../functions/routing/ExitAndRoute";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const router = useRouter();

  // Route checkers
  let indexRouted,
    infoRouted,
    galleryRouted,
    contactRouted = false;

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav} desktop-nav`}>
      <div className={`${styles.desktop_nav_inner} fm-slide-v full-second`}>
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
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
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <ul className={`${styles.links}`}>
                  <li
                    className={`${styles.link} index-link half-second`}
                    onClick={() => {
                      ExitAndRoute(router, "/", indexRouted);
                    }}
                  >
                    <span>Home</span>
                  </li>
                  <li
                    className={`${styles.link} info-link half-second`}
                    onClick={() => {
                      ExitAndRoute(router, "/info", infoRouted);
                    }}
                  >
                    <span>Info</span>
                  </li>
                  <li
                    className={`${styles.link} gallery-link half-second`}
                    onClick={() => {
                      ExitAndRoute(router, "/gallery", galleryRouted);
                    }}
                  >
                    <span>Gallery</span>
                  </li>
                  <li
                    className={`${styles.link} contact-link half-second`}
                    onClick={() => {
                      ExitAndRoute(router, "/contact", contactRouted);
                    }}
                  >
                    <span>Contact</span>
                  </li>
                </ul>

                <ul className={`${styles.socials}`}>
                  <li className="half-second">
                    <FaFacebook className={`${styles.icon}`} />
                  </li>
                  <li className="half-second">
                    <FaTwitter className={`${styles.icon}`} />
                  </li>
                  <li className="half-second">
                    <FaInstagram className={`${styles.icon}`} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
