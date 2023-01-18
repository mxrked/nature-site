/**
 *
 *  This is the index info
 *
 */

import { useRouter } from "next/router";

import { FaEye } from "react-icons/fa";
import { BackgroundImage } from "react-image-and-background-image-fade";

import TriggerImgViewerModal from "../../../functions/dom/triggers/TriggerImgViewerModal";
import ExitAndRoute from "../../../functions/routing/ExitAndRoute";

import { INDEX_INFO_1_BG, INDEX_INFO_2_BG } from "../../../imgs/cdns/BG_CDNS";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexInfo = () => {
  const router = useRouter();

  // Route checkers
  let infoRouted = false;

  return (
    <section id="indexInfo" className={`${styles.index_info} index-info`}>
      <div
        className={`${styles.index_info_inner} scroll-fade fm-fade-up full-second`}
      >
        <div className={`${styles.index_info_inner_box} container-fluid`}>
          <div className={`${styles.index_info_inner_row} row`}>
            <div
              className={`${styles.index_info_inner_side} ${styles.index_info_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.index_info_inner_side_cnt}`}>
                <h1 className="half-second">LEARN OUR HISTORY.</h1>
                <p className="half-second">
                  Learn and understand our interesting and unique
                  background/history.
                </p>
                <div
                  className={`${styles.link} half-second`}
                  onClick={() => {
                    ExitAndRoute(router, "/info", infoRouted);
                  }}
                >
                  <span>READ</span>
                </div>
              </div>
            </div>
            <div
              className={`${styles.index_info_inner_side} ${styles.index_info_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <div
                className={`${styles.index_info_bg} ${styles.bg_L} half-second`}
                id="indexInfoBG1"
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = 1;
                  e.currentTarget.style.zIndex = 50;

                  document.getElementById("indexInfoBG2").style.opacity = 0.5;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = 1;
                  e.currentTarget.style.zIndex = 45;

                  document.getElementById("indexInfoBG2").style.opacity = 1;
                }}
              >
                <BackgroundImage
                  src={INDEX_INFO_1_BG}
                  className={styles.bg}
                  width="100%"
                  height="100%"
                />

                <button
                  className="half-second"
                  onClick={() => {
                    TriggerImgViewerModal("INDEX_GALLERY_5");
                  }}
                >
                  <FaEye className={styles.icon} />
                </button>
              </div>
              <div
                className={`${styles.index_info_bg} ${styles.bg_R} half-second`}
                id="indexInfoBG2"
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = 1;
                  e.currentTarget.style.zIndex = 50;

                  document.getElementById("indexInfoBG1").style.opacity = 0.5;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = 1;
                  e.currentTarget.style.zIndex = 40;

                  document.getElementById("indexInfoBG1").style.opacity = 1;
                }}
              >
                <BackgroundImage
                  src={INDEX_INFO_2_BG}
                  className={styles.bg}
                  width="100%"
                  height="100%"
                />

                <button
                  className="half-second"
                  onClick={() => {
                    TriggerImgViewerModal("INDEX_GALLERY_6");
                  }}
                >
                  <FaEye className={styles.icon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
