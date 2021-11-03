import { MDXProvider } from "@mdx-js/react";
import Rendered from "@/components/Rendered";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/styles.css";
import "@/styles/syntax.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <MDXProvider components={Rendered}>
        <Component {...pageProps} />
      </MDXProvider>
      <Footer />
    </>
  );
}

export default MyApp;
