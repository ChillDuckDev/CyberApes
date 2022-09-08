import React from 'react';
import "../assets/styles.css";
import image1 from "../assets/img/mint-punk.gif";
import NavBar from './NavBar';
import { AiOutlineGithub } from "react-icons/ai";

function Hero() {
    return (
        <section className='hero'>
            <NavBar />
            <div className="caption">
            <p className='text-center' style={{ color: "#FFFFFF", fontSize: "50px" }}>Mint Your <p></p>Cyberpunk Apes AI</p>
           <center> <img src={image1} className="mint-img" alt="" /></center>
           <p></p>
                <div className="caption-inner">
                    <a href="/mint-page">
                    <p></p>
                        <button className="btn btn-info" style={{ color:"#000000", fontSize: "35px" }}>
                            Mint Now
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
