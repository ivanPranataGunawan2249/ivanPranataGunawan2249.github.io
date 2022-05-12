import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './About.css'

function About() {
  return (
    <div id="about" className='about'>
        <div className="header-section text-center">
			<h2><span> </span>About<span> </span></h2>
		</div>
        <div className='personal'>
            <p>Name			: Ivan Pranata Gunawan</p>
            <p>Place/Date Born : BandarLampung, 2 April 1999</p>
            <p>Religion		: Katholik</p>
            <p>Nationality		: Indonesia</p>
            <p>Address			: Jl. Kartini Gg. Idrus No. 5, TanjungKarang, Lampung</p>
        </div>
        <div className="header-section text-center">
			<h2><span> </span>Educational Background<span> </span></h2>
		</div>
        <div className="years">	 	
			<h4><b>2016</b></h4>
			<span><h4>Universitas Multimedia Nusantara</h4></span>
			<div className="labs">
				<p><i>I am a student from Multimedia Nusantara University starting from 2016 to 2021. The GPA I got was 3.20</i></p>
			</div>
		</div>
        <div className="header-section text-center">
			<h2><span> </span>University Activity<span> </span></h2>
		</div>
		<div className="years">	 	
			<h4><b>2016</b></h4>
			<span><h4>Career Building</h4></span>
			<div className="labs">
				<p><i>I participated in activities from the University, one of which was the Career Building as a participant.</i></p>
			</div>
		</div>
        <div className="years">	 	
			<h4><b>2016</b></h4>
			<span><h4>Information Literacy</h4></span>
			<div className="labs">
				<p><i>I participated in activities from the University, one of which was Information Literacy as a participant.</i></p>
			</div>
		</div>
		<div className="years">	 	
			<h4><b>2017</b></h4>
			<span><h4>Technofest</h4></span>
			<div className="labs">
				<p><i>I participated in the Technofest event as a member of the Security Division.</i></p>
		    </div>
		</div>
		<div className="years">	 	
			<h4><b>2019</b></h4>
			<span><h4>Laboratory Assistant</h4></span>
			<div className="labs">
				<p><i>I became a laboratory assistant in the subject of introductory multimedia technology and Object Oriented Programming.</i></p>
			</div>
		</div>
		<div className="header-section text-center">
			<h2><span> </span>Career Experience<span> </span></h2>
		</div>
		<div className="years">	 	
			<h4><b>2019</b></h4>
			<span><h4>PT. ELO Digital Office Indonesia</h4></span>
			<div className="labs">
				<p><i>I took part in an internship program at PT. ELO Digital Office Indonesia.</i></p>
			</div>
		</div>
		<div className="years">	 	
			<h4><b>2021 - Sekarang</b></h4>
			<span><h4>MacroAd</h4></span>
			<div className="labs">
				<p><i>I am currently working on a frontend developer for mobile and web programming using angular.</i></p>
			</div>
		</div>
    </div>
  )
}

export default About