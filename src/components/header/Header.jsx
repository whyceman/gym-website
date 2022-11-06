//styles
import './Header.css'
//images and icons
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
//react
import { useState } from 'react'
import { Link } from 'react-scroll';
const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="header" id='home'>
            <img
                src={logo} alt="logo"
                className='logo'
            />
            {menuOpen === false && mobile === true ? (
                <div
                    style={{
                        background: 'var(--appColor)',
                        borderRadius: '5px',
                        padding: '0.5rem'
                    }}

                    onClick={() => setMenuOpen(true)}
                >
                    <img src={bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            ) : (
                <ul className="menu">
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to='home'
                            spy={true}
                            smooth={true}
                            activeClass='active'
                        >Home</Link>

                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to='programs'
                            spy={true}
                            smooth={true}
                        >Programs</Link>

                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to='reasons'
                            spy={true}
                            smooth={true}
                        >Why Us</Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to='plans'
                            spy={true}
                            smooth={true}
                        >Plans</Link>
                    </li>
                    <li >
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to='testimonials'
                            spy={true}
                            smooth={true}
                        >Testimonials</Link>
                    </li>
                </ul>
            )}

        </div>
    )
}

export default Header