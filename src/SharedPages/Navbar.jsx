import React from 'react';
import Container from '../Component/Container';
import Logo from './Logo';
import Search from './Search/Search';
import MenuDropDown from './MenuDropdonw/MenuDropDown';

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
          <div className='py-4 border-b-[1px]'>
            <Container>
              <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
               <Logo></Logo>
              <Search></Search>
              <MenuDropDown></MenuDropDown>

           
              </div>
            </Container>
          </div>
        </div>
      )
};

export default Navbar;