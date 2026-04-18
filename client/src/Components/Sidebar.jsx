import React from 'react'
import Navbar from './Navbar'
import { useEffect , useState } from 'react'
import logo from '../Assets/logo.png';

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const openSidebar = () => {
        setSidebarOpen(true);
    }
    const closeSidebar = () => {
        setSidebarOpen(false);
    }
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (sidebarOpen && !event.target.closest('.sidebar')&& !event.target.closest('open-btn')) {
            closeSidebar();
          }
    }
    document.addEventListener('click', handleOutsideClick);
   return () => {
        document.removeEventListener('click', handleOutsideClick);
    }
},[openSidebar])
const user = 1;
  return (
     <>
    <div className='App2 -mt-1 overflow-hidden'> 
        <img src={logo} alt="Logo"/>
        <div className={`sidebar ${sidebarOpen ? 'open' : ''} `} >
          <span className='cursor-pointer close-btn' onClick={closeSidebar}> &times;</span> 
      </div>

    </div>
    </>
  )
}

