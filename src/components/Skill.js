import React from 'react'
import './Skill.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Skill() {
  return (
    <div id='skills' className='skills'>
        <div className="skill-section text-center">
			<h2><span> </span>SKILLS<span> </span></h2>
		</div>
        <div className='logo-skills'>
            <div className='text-center skill-exp'>
                <img
                    className="html-img img-fluid"
                    src="./images/html-logo.png"
                />
                <p>HTML</p>
            </div>
            <div className='text-center skill-exp'>
                <img
                    className="javascript-img img-fluid"
                    src="./images/javascript-logo.png"
                />
                <p>Javascript</p>
            </div>
            <div className='text-center skill-exp'>
                <img
                    className="javascript-img img-fluid"
                    src="./images/css3-logo.png"
                />
                <p>CSS</p>
            </div>
            <div className='text-center skill-exp'>
                <img
                    className="java-img img-fluid"
                    src="./images/java-logo-2.png"
                />
                <p>Java</p>
            </div>
        </div>

        <div className='logo-skills'>
        <div className='text-center skill-exp'>
                <img
                    className="angular-img img-fluid"
                    src="./images/angular-logo.png"
                />
                <p>Angular</p>
            </div>
            <div className='text-center skill-exp'>
                <img
                    className="javascript-img img-fluid"
                    src="./images/react-logo-1.png"
                />
                <p>React</p>
            </div>
            <div className='text-center skill-exp'>
                <img
                    className="javascript-img img-fluid"
                    src="./images/bootstrap-logo.png"
                />
                <p>Bootstrap</p>
            </div>
            <div className='text-center skill-exp'>
                <img
                    className="tailwind-img img-fluid"
                    src="./images/tailwind.png"
                />
                <p>Tailwind</p>
            </div>
        </div>
    </div>
  )
}

export default Skill