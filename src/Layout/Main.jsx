import React from 'react';
import Navbar from '../SharedPages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='pt-28'>
           <Outlet></Outlet>
           </div>

           <Footer></Footer>
           
            
        </div>
    );
};

export default Main;