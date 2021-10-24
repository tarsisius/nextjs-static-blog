import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
