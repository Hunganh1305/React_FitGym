import React, { useState } from "react";
import './Header.css'
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-router-dom';
const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className="header container">
            <img src={Logo} alt="" className="logo" />
            {(menuOpened === false && mobile === true) ? (
                <div
                    style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}
                    onClick={() => setMenuOpened(true)}
                >
                    <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            ) : <ul className="header-menu">
                <li>
                    <Link style={{ textDecoration: 'none' }}
                        onClick={() => setMenuOpened(false)}
                        to='home'
                    >
                        <p className="tab">
                            Home
                        </p>
                    </Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none' }}
                        onClick={() => setMenuOpened(false)}
                        to='/programs'
                    ><p className="tab">
                            Programs
                        </p>
                    </Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none' }}
                        onClick={() => setMenuOpened(false)}
                        to='/reasons'
                    ><p className="tab">
                            Why us
                        </p>
                    </Link>
                </li>
                <li onClick={() => setMenuOpened(false)}>
                    <Link style={{ textDecoration: 'none' }}
                        onClick={() => setMenuOpened(false)}
                        to='/plans'
                    ><p className="tab">
                            Plans
                        </p>
                    </Link>

                </li>
                <li >
                    <Link style={{ textDecoration: 'none' }}
                        onClick={() => setMenuOpened(false)}
                        to='/Testimonials'
                    >
                        <p className="tab">
                            Testimonials
                        </p>
                    </Link>
                </li>
            </ul>
            }

        </div>
    )

}

export default Header;