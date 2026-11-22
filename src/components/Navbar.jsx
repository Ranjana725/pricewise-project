
import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#home" className="brand">
          <div className="brand-icon">
            <ShoppingBag size={21} />
          </div>
          <span>PRICE<span className="brand-blue">WISE</span></span>
        </a>

        <nav className={`nav-links ${open ? 'active' : ''}`}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#deals" onClick={() => setOpen(false)}>Explore Deals</a>
          <a href="#how-it-works" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
        </nav>

        <a href="#deals" className="nav-button">
          Get Started →
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;

