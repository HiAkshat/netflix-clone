import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import "./navbar.css";
import { useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    console.log(isScrolled)
    setIsScrolled(window.scrollY===0 ? false : true)
    return () => window.onscroll=null
  }

  return (
    // <div className={isScrolled?"navbar":"navbar scrolled"}>
    <div className={isScrolled ? 'navbar scrolled fixed w-full z-[999]' : 'navbar fixed w-full z-[999]'}>
      <div className='flex justify-between text-white p-6 items-center'>
        <div className='flex items-center'>
          <img className='w-32 mx-6 mr-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="" />
          <span className='navbarLeft'>Homepage</span>
          <span className='navbarLeft'>Series</span>
          <span className='navbarLeft'>Movies</span>
          <span className='navbarLeft'>New and Popular</span>
          <span className='navbarLeft'>My List</span>
        </div>
        <div className='flex items-center'>
          <SearchIcon className='navbarRight'/>
          <span className='navbarRight'>KID</span>
          <NotificationsIcon className='navbarRight'/>
          <img className="navbarRight w-8 h-8 rounded-md object-cover" src="./assets/profile.jpg" alt="" />
          <div className='group flex flex-col mr-6 items-center'>
            <ArrowDropDownIcon className='dropdownIcon'/>

            <div className='options absolute top-[52px] flex-col bg-[#191919] rounded-md group-hover:flex hover:flex'>
              <span className='p-[10px]  px-4'>Settings</span>
              <span className='p-[10px] px-4'>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}