//styles
import './Programs.css'
//data
import { programsData } from '../../data/programsData'
//icons
import rightArrow from '../../assets/rightArrow.png'

const Programs = () => {
    return (
        <div className="programs" id="programs">
            <div className="programs-header">
                <span className='stroke-text'>explore our</span>
                <span>programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            <div className="programs-categories">
                {programsData.map((program) => (
                    <div className="category" key={program.image}>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <span><img src={rightArrow} alt="" /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs