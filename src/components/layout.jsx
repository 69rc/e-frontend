import Footer from './footer/Footer'; 
import { Outlet } from 'react-router-dom';
import ShopNavbar from '../shop/ShopNavbar'

const Layout = () => {
  return (
    <>
      <ShopNavbar/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
