//styles
import './Hero.css'
// components
import Header from '../header/Header'
// images and logo
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import heroImage from '../../assets/hero_image.png'
import heroImageBack from '../../assets/hero_image_back.png'
//animation
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/* //hero-ad// */}
                <div className="hero-ad">
                    <span>the best fitness club in the town</span>
                    <motion.div
                        initial={{ left: mobile === true ? '150px' : '238px' }}
                        animate={{ left: '9px' }}
                        transition={{ ...transition, type: 'tween' }}
                    > </motion.div>
                </div>
                {/* hero-heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>shape </span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                    <div>
                        <span>
                            in here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter start={100} end={140} delay='4' preFix='+' />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter start={800} end={978} delay='4' preFix='+' />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter start={0} end={50} delay='4' preFix='+' />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>
                {/* hero-buttons */}
                <div className="hero-button">
                    <div className="btn">Get Started</div>
                    <div className="btn">Learn More</div>
                </div>
            </div>
            <div className="right-h">
                <div className="btn">Join Now</div>
                <motion.div className="heart-rate"
                    initial={{ right: '-1rem' }}
                    animate={{ right: '4rem' }}
                    transition={transition}
                >
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero-images */}
                <img src={heroImage} alt="" className='hero-image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    animate={{ right: '20rem' }}
                    transition={transition}
                    src={heroImageBack} alt="" className='hero-image-back' />
                {/* calories */}
                <motion.div className="calories"
                    initial={{ right: '37rem' }}
                    animate={{ right: '31rem' }}
                    transition={transition}
                >
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default Hero