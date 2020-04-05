import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function LayoutWrapper(props: any) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default LayoutWrapper;
