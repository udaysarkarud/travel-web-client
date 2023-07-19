import React from "react";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const BlogLayout = () => {
  return (
    <div>
      <Header />
      <h1>Blog Section</h1>
      <Outlet />
      <Footer />
    </div>
  );
};

export default BlogLayout;
