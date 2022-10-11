import './main.css'
import React from 'react'
import profile from '../assets/profile3.jpg'
import user from '../assets/user1.png'
import email from '../assets/email-icon.png'
import schedule from '../assets/to-do-list.png'
import location from '../assets/mapa.png'
import  phone from '../assets/telephone.png'
import lock from '../assets/lock-icon.png'

const Main = () => {
    function cambiarEstilo(){
        let clickeado=document.querySelector("#email");
            clickeado.className="clickeado"
        console.log(" presionaste el email")

      }
    return (
        <div>
            <div className="wrapper">
                <div className="top">
                    <div className="dark-canvas"></div>
                    <img src={profile} alt=" profile thumb" />

                </div>
                <div className="bottom">
                    <div className="datos" >
                        <p> My email address is </p>
                        <h2> jenny.jekins@example.esc </h2>
                    </div>
                    <div >
                        <ul className={"menu"}>
                            <li><button ><img className="icon-menu" src={user}/></button></li>
                            <li id={"email"} ><button onClick={cambiarEstilo}><img className="icon-menu" src={email}/></button></li>
                            <li><button ><img className="icon-menu" src={schedule}/></button></li>
                            <li><button ><img className="icon-menu" src={location}/></button></li>
                            <li><button ><img className="icon-menu" src={phone}/></button></li>
                            <li><button ><img className="icon-menu" src={lock}/></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main