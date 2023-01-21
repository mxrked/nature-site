// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import ManipPageLink from "../assets/functions/dom/manip/ManipPageLink";
import TriggerEnterAnimations from "../assets/functions/dom/triggers/TriggerEnterAnimations";
import TriggerScrollAnimations from "../assets/functions/dom/triggers/TriggerScrollAnimations";
import TriggerExitAnimations from "../assets/functions/dom/triggers/TriggerExitAnimations";
import DeclareStorageVariable from "../assets/functions/data/storage/DeclareStorageVariable";
import RemoveStorageVariable from "../assets/functions/data/storage/RemoveStorageVariable";
import PreventPageReload from "../assets/functions/dom/prevents/PreventPageReload";

import {
  INDEX_CONTACT_BG,
  INDEX_INFO_1_BG,
  INDEX_INFO_2_BG,
  INDEX_TOP_BG,
} from "../assets/imgs/cdns/BG_CDNS";
import {
  SQUIRREL,
  LOG_CABIN,
  RED_MUSHROOM,
  RAINBOW_OVER_MOUNTAINS,
} from "../assets/imgs/cdns/IMG_CDNS";

// Component Imports
import { HeadCnt } from "../assets/components/global/misc/HeadCnt";
import { DesktopNav } from "../assets/components/global/nav/desktop/DesktopNav";
import { MobileNav } from "../assets/components/global/nav/mobile/MobileNav";
import { MobileNavMenu } from "../assets/components/global/nav/mobile/MobileNavMenu";

import { ImgViewerModal } from "../assets/components/global/misc/ImgViewerModal";

import { IndexTop } from "../assets/components/pages/index/IndexTop";
import { IndexGallery } from "../assets/components/pages/index/IndexGallery";
import { IndexInfo } from "../assets/components/pages/index/IndexInfo";
import { IndexContact } from "../assets/components/pages/index/IndexContact";

import { Footer } from "../assets/components/global/footer/Footer";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export const getStaticProps = async () => {
  const INDEX_GALLERY_RES = await fetch(
    "https://raw.githubusercontent.com/mxrked/nature-site-cdn/main/files/json/INDEX_GALLERY.json"
  );

  const INDEX_GALLERY_RES_DATA = await INDEX_GALLERY_RES.json();

  return {
    props: {
      display_index_gallery_data: INDEX_GALLERY_RES_DATA,
    },
  };
};

export default function Home({ display_index_gallery_data }) {
  const router = useRouter();

  // Trigger Enter Animations
  useEffect(() => {
    setTimeout(() => {
      TriggerEnterAnimations();
    }, 500);

    window.addEventListener("popstate", () => {
      TriggerEnterAnimations();
    });
  }, []);

  // Trigger Exit Animations on reload
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "r" && e.ctrlKey) {
        PreventPageReload(e); // NOTE THIS ONLY WORKS ON KEYBOARD not mouse
        DeclareStorageVariable("session", "Reload Page", true);
        TriggerExitAnimations();

        setTimeout(() => {
          if (sessionStorage.getItem("Reload Page")) {
            RemoveStorageVariable("session", "Reload Page");
            location.reload();
          }
        }, 800);
      }

      if (e.keyCode == 116) {
        PreventPageReload(e); // NOTE THIS ONLY WORKS ON KEYBOARD not mouse
        DeclareStorageVariable("session", "Reload Page", true);
        TriggerExitAnimations();

        setTimeout(() => {
          if (sessionStorage.getItem("Reload Page")) {
            RemoveStorageVariable("session", "Reload Page");
            location.reload();
          }
        }, 800);
      }
    });
  }, []);

  // Disable Index Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".index-link");
  }, []);

  // Trigger Scroll Fades
  useEffect(() => {
    window.addEventListener("scroll", () => {
      TriggerScrollAnimations();
    });

    window.addEventListener("load", () => {
      TriggerScrollAnimations();
    });
  }, []);

  return (
    <div id="PAGE" className="page half-second overrides_Index">
      <HeadCnt
        title="Naturmore - Be One With Nature"
        description="Naturmore is for all outdoor lovers and those who want to experience nature from their computer."
        keywords="naturmore, nature, photo gallery, outdoors, green"
        url="https://neon-medovik-7e8138.netlify.app/"
        robots="index"
      />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />

      {/** Modals */}
      <ImgViewerModal
        modalID="indexTopModal"
        modalClass="index_modal"
        modalType="index-modal"
        modalImgSrc={INDEX_TOP_BG}
        modalImgName="Index Top BG"
      />
      <ImgViewerModal
        modalID="INDEX_GALLERY_1"
        modalClass="index_modal"
        modalType="index-modal"
        modalImgSrc={LOG_CABIN}
        modalImgName="Log Cabin BG"
      />
      <ImgViewerModal
        modalID="INDEX_GALLERY_2"
        modalClass="index_modal"
        modalType="index-modal"
        modalImgSrc={RED_MUSHROOM}
        modalImgName="Red Mushroom BG"
      />
      <ImgViewerModal
        modalID="INDEX_GALLERY_3"
        modalClass="index_modal"
        modalType="index-modal"
        modalImgSrc={SQUIRREL}
        modalImgName="Squirrel BG"
      />
      <ImgViewerModal
        modalID="INDEX_GALLERY_4"
        modalClass="index_modal"
        modalType="index-modal"
        modalImgSrc={RAINBOW_OVER_MOUNTAINS}
        modalImgName="Rainbow Over Mountains BG"
      />
      <ImgViewerModal
        modalID="INDEX_GALLERY_5"
        modalClass="index_modal"
        modalType="index-modal"
        modalImgSrc={INDEX_INFO_1_BG}
        modalImgName="River in a Canyon BG"
      />
      <ImgViewerModal
        modalID="INDEX_GALLERY_6"
        modalClass="index_modal"
        modalType="index-modal"
        modalImgSrc={INDEX_INFO_2_BG}
        modalImgName="River in a Canyon BG"
      />
      <ImgViewerModal
        modalID="INDEX_GALLERY_7"
        modalClass="index_modal"
        modalType="index-modal"
        modalImgSrc={INDEX_CONTACT_BG}
        modalImgName="Kids sitting on a bench at a lake BG"
      />

      <main id="PAGE_CNT" className="page-main full-second">
        <IndexTop />
        <IndexGallery data={display_index_gallery_data} />
        <IndexInfo />
        <IndexContact />
        <Footer />
      </main>
    </div>
  );
}
