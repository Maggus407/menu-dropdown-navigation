import React, {useState,useEffect} from "react";
import {motion, AnimatePresence} from 'framer-motion'
import logo from '../images/logo.svg';
import icon_menu from '../images/icon-menu.svg';
import icon_close_menu from '../images/icon-close-menu.svg'
import down_arrow from '../images/icon-arrow-down.svg'
import up_arrow from '../images/icon-arrow-up.svg'
import icon_planning from '../images/icon-planning.svg'
import icon_reminder from '../images/icon-reminders.svg'
import icon_todo from '../images/icon-todo.svg'
import icon_calender from '../images/icon-calendar.svg'


export default function Header(){

    /*Stuff for the mobile Version*/
    const [extend, setExtend] = useState(false)
    const [features, setFeatures] = useState(false)
    const [company, setCompany] = useState(false)

 
    //choose the screen size 
    const handleResize = () => {
    if (window.innerWidth >= 1300) {
        body_default()
        setExtend(false)
        setFeatures(false)
        setCompany(false)
    }
    }

    // create an event listener
    useEffect(() => {
    window.addEventListener("resize", handleResize)
    })


    const sidebar = () =>{
        setExtend(true)
        body_change()
    }

    const close_sidebar = () =>{
        setExtend(false)
        setFeatures(false)
        setCompany(false)
        body_default()
    }

    const handleFeatures = () =>{
        setFeatures(!features)
    }

    const handleCompany = () =>{
        setCompany(!company)
    }

    const container = {
        hidden:{
            x:+200,
            opacity:0
        },
        visible:{
            opacity: 1,
            x: 0,
            zIndex:768453678, 
            transition:{
                duration: 0.2,
            }
        }
    }

    const body_change = () =>{
        let a = document.getElementById('App')
        a.style.background = 'hsla(0, 0%, 41%,0.7)'
    }

    const body_default = () =>{
        let a = document.getElementById('App')
        a.style.background = 'hsl(0, 0%, 98%)'
    }

    return(
    <div>
        <div className="header">
            <img src={logo} alt="Logo" />
            <div className="desktop-header">
            <ul className="categories">
                <li onClick={handleFeatures}>Features {!features && <img src={down_arrow} alt="sdf"></img>} {features && <img src={up_arrow} alt="sdf"></img>}
                    {features && <ul className="f1">
                        <li><img src={icon_todo} alt="sdf"/>Todo List</li>
                        <li><img src={icon_calender} alt="sdf"/>Calender</li>
                        <li><img src={icon_reminder} alt="sdf"/>Reminders</li>
                        <li><img src={icon_planning} alt="sdf"/>Planing</li>
                    </ul>}
                </li>
                <li onClick={handleCompany}>Company {!company && <img src={down_arrow} alt="sdf"></img>} {company && <img src={up_arrow} alt="sdf"></img>}
                    {company && <ul className="f2">
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </ul>}  
                </li>
                <li>Careers</li>
                <li>About</li>
            </ul>
            <section>
                <button className="login-btn hover">Login</button>
                <button className="register-btn hover">Register</button>
            </section>
        </div>
            <img src={icon_menu} className="hover" onClick={sidebar} alt="Menu" />
        </div>
        <AnimatePresence>
        {extend && <motion.div className="sidebar"
        variants={container}
        initial="hidden"
        animate="visible"
        exit={{x:+200, opacity:0, transition:{duration:0.2}}}>
            <img src={icon_close_menu} className="hover" id="close" onClick={close_sidebar} alt="sdf"></img>
            <ul className="categories">
                <li onClick={handleFeatures}>Features {!features && <img src={down_arrow} alt="sdf"></img>} {features && <img src={up_arrow} alt="sdf"></img>}
                    {features && <ul>
                        <li><img src={icon_todo} alt="sdf"/>Todo List</li>
                        <li><img src={icon_calender} alt="sdf"/>Calender</li>
                        <li><img src={icon_reminder} alt="sdf"/>Reminders</li>
                        <li><img src={icon_planning} alt="sdf"/>Planing</li>
                    </ul>}
                </li>
                <li onClick={handleCompany}>Company {!company && <img src={down_arrow} alt="sdf"></img>} {company && <img src={up_arrow} alt="sdf"></img>}
                    {company && <ul>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </ul>  }  
                </li>
                <li>Careers</li>
                <li>About</li>
            </ul>
            <section>
                <button className="login-btn">Login</button>
                <button className="register-btn">Register</button>
            </section>
        </motion.div>}
        </AnimatePresence>
    </div>
    )
}