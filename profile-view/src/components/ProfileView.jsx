import "./main.css"
import perfil from '../assets/foto.png'
import user from '../assets/user1.png'
import email from '../assets/email-icon.png'
import schedule from '../assets/to-do-list.png'
import location from '../assets/mapa.png'
import phone from '../assets/telephone.png'
import lock from '../assets/lock-icon.png'
import { Component } from "react"


class Mainclass extends Component {

    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        let click = false;
        function cambiarEstilo() {
            
            let clickeado = document.querySelector("#email");
            if (!click) {
                clickeado.className = "clickeado"
                console.log(" presionaste el email")
                click = true
            } else {
                clickeado.className = ""
                click=false
            }
            

        }
        return (
            <div>
                <div className="wrapper">
                    <div className="top">
                        <div className="dark-canvas"></div>
                        <img src={perfil} alt=" profile thumb" />

                    </div>
                    <div className="bottom">
                        <div className="datos" >
                            <p> My email address is </p>
                            <h2> jenny.jekins@example.esc </h2>
                        </div>
                        <div >
                            <ul className={"menu"}>
                                <li><button ><img className="icon-menu" src={user} /></button></li>
                                <li id={"email"} ><button onClick={cambiarEstilo}><img className="icon-menu" src={email} /></button></li>
                                <li><button ><img className="icon-menu" src={schedule} /></button></li>
                                <li><button ><img className="icon-menu" src={location} /></button></li>
                                <li><button ><img className="icon-menu" src={phone} /></button></li>
                                <li><button ><img className="icon-menu" src={lock} /></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Mainclass };