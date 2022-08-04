import React, { useState } from "react";
import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import ModalComponent from "../Modal/ModalComponent";


const Plans = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="plans-container container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITHUS</span>
            </div>
            {/* plan card */}
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name} </span>
                        <span>${plan.price} </span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature} </span>
                                </div>
                            ))}
                        </div>
                        <button className="btn"
                            onClick={() => { setOpenModal(true) }}
                        >Join now</button>
                    </div>
                ))}
            </div>

            {openModal && <ModalComponent closeModal={setOpenModal} />}
        </div>



    )
}

export default Plans;