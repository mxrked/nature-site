/**
 *
 *  This is the index top
 *
 */

import { useRouter } from "next/router";

import { FaEye } from "react-icons/fa";
import { BackgroundImage } from "react-image-and-background-image-fade";

import TriggerImgViewerModal from "../../../functions/dom/triggers/TriggerImgViewerModal";
import ExitAndRoute from "../../../functions/routing/ExitAndRoute";

import { INDEX_TOP_BG } from "../../../imgs/cdns/BG_CDNS";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  const router = useRouter();

  // Route checkers
  let galleryRouted = false;

  return (
    <section
      id="indexTop"
      className={`${styles.index_top} index-top fm-fade-up full-second`}
    >
      <BackgroundImage
        src={INDEX_TOP_BG}
        className={`${styles.bg} fm-scale full-second`}
        width="100%"
        height="100%"
      />

      <div className={`${styles.index_top_overlay}`}>
        <div
          className={`${styles.index_top_overlay_cnt} fm-fade-in fm-fade-up full-second`}
        >
          <h1 className="half-second">BE ONE WITH NATURE.</h1>

          <p className="half-second">
            Enjoy the beauty of the outdoors via our nature gallery.
          </p>

          <div
            className={`${styles.link} half-second`}
            onClick={() => {
              ExitAndRoute(router, "/gallery", galleryRouted);
            }}
          >
            <span>VIEW</span>
          </div>
        </div>

        <div
          className={`${styles.modal_toggler_holder} fm-fade-in full-second`}
        >
          <button
            id="indexTopBgViewer"
            className={`${styles.img_viewer} index-img-viewer index-top-bg-viewer half-second`}
            onClick={() => {
              TriggerImgViewerModal("indexTopModal");
            }}
          >
            <FaEye className={`${styles.icon}`} />
          </button>
        </div>
      </div>
    </section>
  );
};
