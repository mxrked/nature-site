// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports
import "bootstrap/dist/css/bootstrap.min.css";

import { AnimatePresence } from "framer-motion";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import NProgress from "nprogress";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Data/Functions/Images Imports
import CheckUserDevice from "../assets/functions/dom/checkers/CheckUserDevice";
import CheckMobileNavMenuStatus from "../assets/functions/dom/checkers/CheckMobileNavStatus";
import DeclareStorageVariable from "../assets/functions/data/storage/DeclareStorageVariable";
import RemoveStorageVariable from "../assets/functions/data/storage/RemoveStorageVariable";

// Component Imports

// Style Imports
import "../assets/styles/tools/global_classnames/global_classnames.css";
import "../assets/styles/tools/overrides/overrides.css";
import "../assets/styles/tools/resets/resets.css";
import "../assets/styles/tools/library_styles/nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  /**
   * ? GLOBAL
   */
  //! NProgress Init
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      NProgress.start();
    });

    window.addEventListener("load", () => {
      setTimeout(() => {
        NProgress.done();
      }, 500);
    });

    if (document.readyState === "complete") {
      NProgress.done();
      document.body.style.overflowY = "auto";
      document.body.style.pointerEvents = "auto";
    }

    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
      document.body.style.overflowY = "auto";
      document.body.style.pointerEvents = "auto";
    });
  }, [router, router.events]);

  //! Forget scroll position and force user back to top of page
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.addEventListener("beforeunload", () => {
      if (window.scrollY !== 0) {
        DeclareStorageVariable("session", "Reload Scroll", true);
      }
    });

    if (sessionStorage.getItem("Reload Scroll")) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      RemoveStorageVariable("session", "Reload Scroll");
    }
  }, []);

  /**
   * ? DATA
   */
  //! Session/Local Storage Clearing
  useEffect(() => {
    if (localStorage.getItem("ally-supports-cache")) {
      localStorage.removeItem("ally-supports-cache");
    }

    if (sessionStorage.getItem("Mobile Nav Opened")) {
      sessionStorage.removeItem("Mobile Nav Opened");
    }

    if (sessionStorage.getItem("Modal Opened")) {
      sessionStorage.removeItem("Modal Opened");
    }
  }, [router]);

  /**
   * ? CHECKERS
   */
  //! Check User Device
  useEffect(() => {
    let mobile,
      desktop = false;

    // Page Load
    window.addEventListener("load", () => {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    });

    if (document.readyState === "complete") {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    }

    // Resize
    window.addEventListener("resize", () => {
      CheckUserDevice(mobile, desktop);
    });
  }, []);

  //! Checking Mobile Nav Menu Status
  useEffect(() => {
    window.addEventListener("resize", () => {
      CheckMobileNavMenuStatus();
    });

    window.addEventListener("load", () => {
      CheckMobileNavMenuStatus();
    });

    router.events.on("routeChangeComplete", () => {
      CheckMobileNavMenuStatus();
    });
  }, [router]);

  /**
   * ? DISPLAYS/HIDERS
   */
  //! Showing Page after some time
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll(".page").forEach((page) => {
        page.style.opacity = 1;
        page.style.visibility = "visible";
      });
    }, 500);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
