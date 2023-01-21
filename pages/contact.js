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

// Component Imports
import { HeadCnt } from "../assets/components/global/misc/HeadCnt";
import { DesktopNav } from "../assets/components/global/nav/desktop/DesktopNav";
import { MobileNav } from "../assets/components/global/nav/mobile/MobileNav";
import { MobileNavMenu } from "../assets/components/global/nav/mobile/MobileNavMenu";

import { Footer } from "../assets/components/global/footer/Footer";

// Style Imports
import "../assets/styles/modules/Contact/Contact.module.css";

export default function Contact() {
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

  // Disable Contact Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".contact-link");
  }, []);

  return (
    <div id="PAGE" className="page half-second overrides_Contact">
      <HeadCnt
        title="Naturmore - Contact"
        description="Naturmore is for all outdoor lovers and those who want to experience nature from their computer."
        keywords="naturmore, nature, photo gallery, outdoors, green"
        url="https://neon-medovik-7e8138.netlify.app/contact"
        robots="no index"
      />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />

      <main id="PAGE_CNT" className="page-main full-second">
        <Footer />
      </main>
    </div>
  );
}
