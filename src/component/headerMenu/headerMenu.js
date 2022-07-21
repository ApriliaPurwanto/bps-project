import React from "react";
import { icons } from "react-icons";
import './headerMenu.css';
import {SiGmail, SiInstagram, SiTwitter, SiFacebook, SiYoutube, SiWhatsapp} from "react-icons/si";
import { Link } from "react-router-dom";


const HeaderMenu = () => {
    return (
        <div className="header">
            <div className="layout-header">
                <div className="layout-logo">
                    <Link to={{
                            pathname: "/",
                        }}><img src={require('./home.png')}/></Link>
                </div>
                <div className="layout-sosial-media">
                    <div className="sosmed">
                        <a href="https://www.youtube.com/channel/UCYxOi_FgBHcOdgj0WYoGvmA" target="_blank">
                        <SiYoutube color={"white"}/>
                        </a>
                    </div>
                    <div className="sosmed">
                        <a href="mailto:bps1871@bps.go.id" target="_blank">
                        <SiGmail color={"white"}/>
                        </a>
                    </div>
                    <div className="sosmed">
                        <a href="https://www.instagram.com/bpsbandarlampung/" target="_blank">
                        <SiInstagram color={"white"}/>
                        </a>
                    </div>
                    <div className="sosmed">
                        <a href="https://wa.me/6281996684189" target="_blank">
                        <SiWhatsapp color={"white"}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderMenu