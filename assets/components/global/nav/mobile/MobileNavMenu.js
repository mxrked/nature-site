/**
 *
 *  This is the mobile nav menu
 *
 */

import { useRouter } from "next/router";

import { FaTimes, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BackgroundImage } from "react-image-and-background-image-fade";

import CloseNav from "../../../../functions/dom/closers/CloseNav";
import ExitAndRoute from "../../../../functions/routing/ExitAndRoute";

import { NAV_MENU_BG } from "../../../../imgs/cdns/BG_CDNS";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = () => {
  const router = useRouter();

  // Route checkers
  let indexRouted,
    infoRouted,
    galleryRouted,
    contactRouted = false;

  return (
    <div
      id="mobileNavMenu"
      className={`${styles.mobile_nav_menu} mobile-nav-menu full-second`}
    >
      <BackgroundImage
        src={NAV_MENU_BG}
        width="100%"
        height="100%"
        className={`${styles.mobile_nav_menu_bg} half-second`}
      />

      <div className={`${styles.mobile_nav_menu_overlay}`}>
        <div
          id="mobileNavMenuCnt"
          className={`${styles.mobile_nav_menu_overlay_cnt} half-second`}
        >
          <div className={`${styles.mobile_nav_menu_overlay_cnt_top}`}>
            <h1 className="half-second">Naturmore</h1>

            <button
              id="mobileNavCloser"
              className={`${styles.mobile_nav_closer} half-second`}
              onClick={() => {
                CloseNav();
              }}
            >
              <FaTimes className={`${styles.icon}`} />
            </button>
          </div>

          <div className={`${styles.mobile_nav_menu_overlay_cnt_links}`}>
            <ul>
              <li
                className={`${styles.link} index-link half-second`}
                onClick={() => {
                  CloseNav();

                  setTimeout(() => {
                    ExitAndRoute(router, "/", indexRouted);
                  }, 800);
                }}
              >
                <span>Home</span>
              </li>
              <br />
              <li
                className={`${styles.link} info-link half-second`}
                onClick={() => {
                  CloseNav();
                  setTimeout(() => {
                    ExitAndRoute(router, "/info", infoRouted);
                  }, 800);
                }}
              >
                <span>Info</span>
              </li>
              <br />
              <li
                className={`${styles.link} gallery-link half-second`}
                onClick={() => {
                  CloseNav();
                  setTimeout(() => {
                    ExitAndRoute(router, "/gallery", galleryRouted);
                  }, 800);
                }}
              >
                <span>Gallery</span>
              </li>
              <br />
              <li
                className={`${styles.link} contact-link half-second`}
                onClick={() => {
                  CloseNav();
                  setTimeout(() => {
                    ExitAndRoute(router, "/contact", contactRouted);
                  }, 800);
                }}
              >
                <span>Contact</span>
              </li>
            </ul>
          </div>

          <div className={`${styles.mobile_nav_menu_overlay_cnt_socials}`}>
            <ul className={`${styles.socials}`}>
              <li>
                <FaFacebook className={`${styles.icon} half-second`} />
              </li>
              <li>
                <FaTwitter className={`${styles.icon} half-second`} />
              </li>
              <li>
                <FaInstagram className={`${styles.icon} half-second`} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
