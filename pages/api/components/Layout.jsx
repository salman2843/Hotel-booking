// components/Layout.jsx
import React from "react";
import Header from "./Header"; // Adjust the path if necessary
import Footer from "./Last"; // Adjust the path if necessary

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
