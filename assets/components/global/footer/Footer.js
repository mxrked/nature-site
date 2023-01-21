/**
 *
 *  This is the footer
 *
 */

import { useRouter } from "next/router";

import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

import ExitAndRoute from "../../../functions/routing/ExitAndRoute";

import styles from "../../../styles/modules/Footer/Footer.module.css";

export const Footer = () => {
  const router = useRouter();

  // Route checkers
  let indexRouted,
    infoRouted,
    galleryRouted,
    contactRouted = false;

  return (
    <footer id="footer" className={`${styles.footer} footer`}>
      <div
        className={`${styles.footer_inner} scroll-fade fm-fade-in full-second`}
      >
        <div
          className={`${styles.footer_inner_cnt} scroll-fade fm-fade-down full-second`}
        >
          <div className={`${styles.footer_inner_top}`}>
            <div
              className={`${styles.logo} half-second`}
              onClick={() => {
                ExitAndRoute(router, "/", indexRouted);
              }}
            >
              <h1 className="half-second">NATURMORE</h1>
              <p className="half-second">Be one with nature.</p>
            </div>
          </div>

          <div className={`${styles.footer_inner_links}`}>
            <ul>
              <li
                className="half-second index-link"
                onClick={() => {
                  ExitAndRoute(router, "/", indexRouted);
                }}
              >
                <span>Home</span>
              </li>
              <li
                className="half-second info-link"
                onClick={() => {
                  ExitAndRoute(router, "/info", infoRouted);
                }}
              >
                <span>Info</span>
              </li>
              <li
                className="half-second gallery-link"
                onClick={() => {
                  ExitAndRoute(router, "/gallery", galleryRouted);
                }}
              >
                <span>Gallery</span>
              </li>
              <li
                className="half-second contact-link"
                onClick={() => {
                  ExitAndRoute(router, "/contact", contactRouted);
                }}
              >
                <span>Contact</span>
              </li>
            </ul>
          </div>

          <div className={`${styles.footer_inner_socials}`}>
            <ul>
              <li className="half-second">
                <FaFacebook className={styles.icon} />
              </li>
              <li className="half-second">
                <FaTwitter className={styles.icon} />
              </li>
              <li className="half-second">
                <FaInstagram className={styles.icon} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
