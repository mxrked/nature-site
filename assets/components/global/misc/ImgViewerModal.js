/**
 *
 *  This is a image viewer modal for when the user wants to view a certain img
 *
 */

import CloseImgViewerModal from "../../../functions/dom/closers/CloseImgViewerModal";

import styles from "../../../styles/modules/Misc/Misc.module.css";

export const ImgViewerModal = (props) => {
  return (
    <div
      id={props.modalID}
      className={`${styles.img_viewer_modal} ${
        styles[props.modalClass]
      } img-viewer-modal ${props.modalType} full-second`}
    >
      <div
        className={`${styles.img_viewer_modal_darken}`}
        onClick={(e) => {
          CloseImgViewerModal(e.currentTarget.closest(".img-viewer-modal"));
        }}
      />

      <div className={`${styles.img_viewer_modal_img_holder}`}>
        <img
          data-src={props.modalImgSrc}
          alt={props.modalImgName}
          className="lazyload half-second"
        />
      </div>
    </div>
  );
};
