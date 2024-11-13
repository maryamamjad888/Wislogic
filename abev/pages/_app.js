import React, { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
import "../node_modules/aos/dist/aos.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/styles/flaticon.css";
import "/styles/boxicons.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css/bundle";
import "react-tabs/style/react-tabs.css";
import "/styles/faq.css";
import "/styles/global.css";
import "/styles/style.css";
import "/styles/header.css";
import "/styles/footer.css";
import "/styles/responsive.css";
import ScrollToTop from "@/components/Layout/ScrollToTop";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <ScrollToTop />
    </>
  );
}

export default MyApp;
