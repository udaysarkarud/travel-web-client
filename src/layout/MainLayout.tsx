import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};

export default MainLayout;
