import PropTypes from "prop-types";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
