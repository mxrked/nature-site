/**
 *
 *  This is the index gallery
 *
 */

import { useRouter } from "next/router";

import { FaEye } from "react-icons/fa";
import { BackgroundImage } from "react-image-and-background-image-fade";
import Slider from "react-slick";

import TriggerImgViewerModal from "../../../functions/dom/triggers/TriggerImgViewerModal";
import ExitAndRoute from "../../../functions/routing/ExitAndRoute";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexGallery = (props) => {
  const router = useRouter();

  // Route checkers
  let galleryRouted = false;

  const SLIDER_SETTINGS = {
    dots: true,
    arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1995,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 419,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="indexGallery"
      className={`${styles.index_gallery} index-gallery`}
    >
      <div
        className={`${styles.index_gallery_inner} scroll-fade fm-fade-up full-second`}
      >
        <div className={`${styles.index_gallery_inner_top}`}>
          <div className={`${styles.index_gallery_inner_top_cnt}`}>
            <h1 className="half-second">ENJOY THE SIGHTS.</h1>

            <p className="half-second">
              Anyone is welcome to view the gorgeous scenery that nature has to
              offer.
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
        </div>

        <div className={`${styles.index_gallery_inner_slider_holder}`}>
          <Slider
            className={`${styles.index_gallery_slider} index-gallery-slider`}
            {...SLIDER_SETTINGS}
          >
            {props.data.map((item) => (
              <div
                className={`${styles.index_gallery_slider_slide}`}
                id={item.galleryID}
                key={item.galleryID}
              >
                <div
                  className={`${styles.index_gallery_slider_slide_inner} half-second`}
                >
                  <BackgroundImage
                    src={item.galleryItemImg}
                    className={`${styles.bg}`}
                    width="100%"
                    height="100%"
                  />

                  <div
                    className={`${styles.index_gallery_slider_slide_overlay} half-second`}
                  >
                    <button
                      className="half-second"
                      onClick={() => {
                        TriggerImgViewerModal(item.galleryID);
                      }}
                    >
                      <div>
                        <span>{item.galleryItemName}</span>

                        <FaEye className={styles.icon} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
