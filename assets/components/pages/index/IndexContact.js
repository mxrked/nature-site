/**
 *
 *  This is the index contact
 *
 */

import { useRouter } from "next/router";

import { FaEye } from "react-icons/fa";
import { BackgroundImage } from "react-image-and-background-image-fade";

import { INDEX_CONTACT_BG } from "../../../imgs/cdns/BG_CDNS";

import TriggerImgViewerModal from "../../../functions/dom/triggers/TriggerImgViewerModal";
import ExitAndRoute from "../../../functions/routing/ExitAndRoute";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexContact = () => {
  const router = useRouter();

  // Route checkers
  let contactRouted = false;

  return (
    <section
      id="indexContact"
      className={`${styles.index_contact} index-contact`}
    >
      <div
        className={`${styles.index_contact_inner} scroll-fade fm-fade-in full-second`}
      >
        <BackgroundImage
          src={INDEX_CONTACT_BG}
          className={`${styles.bg}`}
          width="100%"
          height="100%"
          id="indexContactBg"
        />

        <div className={`${styles.index_contact_overlay}`}>
          <div className={`${styles.index_contact_overlay_cnt}`}>
            <h1 className="half-second">GET IN TOUCH.</h1>
            <p className="half-second">
              You can contact us on any issues or support that needs to be
              worked on.
            </p>
            <div
              className={`${styles.link} half-second`}
              onClick={() => {
                ExitAndRoute(router, "/contact", contactRouted);
              }}
            >
              <span>CONTACT</span>
            </div>
          </div>

          <button
            className="half-second"
            onClick={() => {
              TriggerImgViewerModal("INDEX_GALLERY_7");
            }}
          >
            <FaEye className={styles.icon} />
          </button>
        </div>
      </div>
    </section>
  );
};
