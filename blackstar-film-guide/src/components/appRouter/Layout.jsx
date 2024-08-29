import Header from "../Header";
import Footer from "../footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export default Layout;
