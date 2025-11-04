import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu, GiAirplaneDeparture  } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import '../Styles/Aero.css';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className={`layout ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <aside className="sidebar">
        <div className="logo-sidebar">
          <div className="logo-brand">
            <GiAirplaneDeparture className="logo-icon" />
            <h1 className="titulo-sidebar">AEROCODE GUI</h1>
          </div>
          <IoMdClose className="icon-close" onClick={toggleSidebar} />
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/admin/dashboard">Visão Geral </Link></li>
            <li><Link to="/admin/aeronaves">Aeronaves</Link></li>
            <li><Link to="/admin/pecas">Peças</Link></li>
            <li><Link to="/admin/testes">Testes</Link></li>
            <li><Link to="/admin/funcionarios">Funcionários</Link></li>
            <li><Link to="/admin/relatorios">Relatórios</Link></li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile-sidebar">
            <FaUserCircle className="user-icon" />
            <span className="user-name">Admin User</span>
          </div>
          <button className="sair-button" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </aside>

      <div className="main-content-wrapper">
        <header className="app-header">
          <GiHamburgerMenu className="icon-open" onClick={toggleSidebar} />
          <h2></h2>
        </header>
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;