import React from 'react';
import Navbar from '../SharedPages/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='pt-28'>
           <Outlet></Outlet>
           </div>
           
            
        </div>
    );
};

export default Main;