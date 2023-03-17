import React,{useState} from 'react'
import {FcHome,FcAbout} from 'react-icons/fc';
import { IoMdCall, IoMdChatboxes, IoMdClipboard, IoMdClose,  IoMdMenu} from 'react-icons/io'
import { BsGrid1X2Fill,BsFillCalendar2DayFill} from 'react-icons/bs';
import {AiFillDashboard} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

    const [active,setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    } 

  return (
    <div className={active ? 'header' : 'header-mobile'}>

               <div className='menu-icon' onClick={activateNav}>

                    {!active ? <IoMdMenu className='menu'/> : <IoMdClose className='menu'/>}

               </div>

        <nav>
            <ul className={active ? 'ul-item' : 'ul-item oicon'}>

                <li>
                    <FcHome className='icon'/>
                    <Link to='/home'>Home</Link>
                </li>


                <li>
                    <FcAbout className='icon'/>
                    <Link to='/messages'>About</Link>
                </li>


                <li>
                    <BsGrid1X2Fill className='icon'/>
                    <Link to='/gridel'>User</Link>
                </li>


                <li>
                    <AiFillDashboard className='icon'/>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>

                <li>
                    <BsFillCalendar2DayFill className='icon'/>
                    <Link to='/'>Calendar</Link>
                </li>


                <li>
                    <IoMdCall className='icon'/>
                    <Link to='/user'>Contact</Link>
                </li>


                <li>
                    <IoMdClipboard className='icon'/>
                    <Link to='/'>FAQ</Link>
                </li>

            </ul>
        </nav>

    </div>
  )
}

export default Sidebar;