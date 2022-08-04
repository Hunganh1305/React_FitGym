import React from "react";
import './Programs.css';
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
import { Link } from 'react-router-dom';
const Programs = () => {


    return (
        <div>
            <div className="Programs" id="programs">
                {/* header */}
                <div className="programs-header">
                    <span className="stroke-text">Explore our</span>
                    <span>Programs</span>
                    <span className="stroke-text">to shape you</span>
                </div>

                <div className="program-categories">
                    {programsData.map((program) => (
                        <div className="category">
                            {program.image}
                            <span>{program.heading}</span>
                            <span>{program.details}</span>
                            <div className="join-now">
                                <Link style={{ textDecoration: 'none' }}
                                    to='/plans'
                                >
                                    <p className="tab">Join Now</p>
                                </Link>
                                <img src={RightArrow} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Programs;