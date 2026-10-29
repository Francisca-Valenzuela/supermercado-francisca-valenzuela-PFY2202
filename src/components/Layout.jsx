import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="app">
      <main className="contenido">
        <Outlet />
      </main>

      <Footer />
      <Navbar />
    </div>
  );
}

export default Layout;