import React from "react";
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
import { Link } from 'react-router-dom';
const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false
    return (
        <div className="hero container" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                {/* ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '220px' : '280px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>the best gym changed your lifestyle </span>
                </div>
                {/* Hero Heading */}
                <div className="hero-text">
                    <div><span>FitCLub </span><span className="stroke-text">fix</span></div>
                    <div><span>your lifeStyle</span></div>
                    <div>
                        <span>In here we will training until you transform to a Monster and live up your life to fullest.</span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay='4' preFix="+" />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={978} start={800} delay='4' preFix="+" />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={1000} start={880} delay='5' preFix="+" />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>
                {/* hero btn */}
                <div className="hero-buttons">
                    <button className="btn">
                        <Link style={{ textDecoration: 'none' }}
                            to='/plans'
                        >
                            <p className="tab">Get Starter</p>
                        </Link>

                    </button>
                    <button className="btn">
                        <Link style={{ textDecoration: 'none' }}
                            to='/programs'
                        >
                            <p className="tab">Learn More</p>
                        </Link>
                    </button>
                </div>
            </div>
            <div className="right-h">

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span> <span>
                        <NumberCounter end={116} start={80} delay='8' postFix="bpm" />
                    </span>
                </motion.div>
                {/* hero img */}
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back} alt="" className="hero-image-back" />
                {/* calories */}
                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                    className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>
                            <NumberCounter end={220} start={100} delay='5' postFix="kcal" />
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;