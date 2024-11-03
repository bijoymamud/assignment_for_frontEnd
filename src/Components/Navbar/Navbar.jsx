import React, { useState } from 'react';
import Container from '../Container';
import { Link } from 'react-router-dom';
import { AlignJustify, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className='py-5 bg-red-600 text-white'>
      <Container>
        <div className='flex items-center justify-between'>

          <div className='flex items-center gap-20'>
            <div className='flex items-center gap-2'>
              <img src="https://i.ibb.co.com/3pNZQg5/Vector-1.png" alt="" />
              <h1 className='text-[28.44px]'><span className='font-bold'>Restau</span>rant</h1>
            </div>

            <div className='hidden lg:flex items-center gap-10 font-semibold text-[15px]'>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/clients">Clients</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className='hidden lg:block'>
            <button className='w-[157px] h-[44px] text-[16px] uppercase text-black font-bold bg-[#FEBF00]'>
              Book a table
            </button>
          </div>

          <div className='lg:hidden'>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X size={30} /> : <AlignJustify size={30} />}
            </button>
          </div>

        </div>

        {isMenuOpen && (
          <div className='lg:hidden mt-5 bg-red-600/90 text-white flex flex-col items-center gap-4 py-4'>
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
            <Link to="/clients" onClick={toggleMenu}>Clients</Link>
            <Link to="/blogs" onClick={toggleMenu}>Blogs</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            <button onClick={toggleMenu} className='w-[157px] h-[44px] text-[16px] uppercase text-black font-bold bg-[#FEBF00]'>
              Book a table
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Navbar;
