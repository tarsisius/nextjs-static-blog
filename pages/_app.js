import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/styles.css";
import "@/styles/syntax.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
