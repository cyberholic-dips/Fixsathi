import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, LayoutDashboard, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav style={{
      borderBottom: '1px solid var(--border)',
      backgroundColor: 'var(--bg-card)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
          <Hammer size={28} strokeWidth={2.5} />
          <span>Fixsathi</span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link to="/" className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500 }}>
            <Search size={18} />
            Find Support
          </Link>
          <Link to="/provider-dashboard" className="btn btn-primary">
            <LayoutDashboard size={18} />
            Provider Portal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
