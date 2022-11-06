import React from 'react'
import { useState } from 'react'
//styles
import './Testimonials.css'
//data
import { testimonialsData } from '../../data/testimonialsData'
//images and icons
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
//animation
import { motion } from 'framer-motion'
const Testimonials = () => {
    const transition = { type: 'spring', duration: 2 }
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    return (
        <div className="testimonials" id="testimonials">
            <div className="left-t">
                <span>testimonials</span>
                <span className='stroke-text'>what they say</span>
                <span>about us</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                >{testimonialsData[selected].review}</motion.span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>{testimonialsData[selected].name} </span><span></span>
                    <span>{''} - {testimonialsData[selected].status}</span><span></span>
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={transition}
                >
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={transition}
                >

                </motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={testimonialsData[selected].image} alt="" />
                <div className="arrow">
                    <img
                        onClick={() => (
                            selected === 0 ?
                                setSelected(tLength - 1) :
                                setSelected((prev) => prev - 1)
                        )}
                        src={leftArrow} alt=""></img>
                    <img
                        onClick={() => (
                            selected === tLength - 1 ?
                                setSelected(0) :
                                setSelected((prev) => prev + 1)
                        )}
                        src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials