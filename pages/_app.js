import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/styles.css";
import "@/styles/nprogress.css";
import "@/styles/syntax.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  NProgress.configure({ showSpinner: false });

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
