import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'

function Footer() {
  return (
    <div id='contact' className='footer'>
        <div className="contact-section text-center">
			<h2><span> </span>CONTACT<span> </span></h2>
		</div>
        <div className="social-icons text-center">
			<a href="https://www.instagram.com/pranataivan2499/" target='_blank'><i class="fa-brands fa-instagram fa-2xl"></i></a>
			<a href="https://www.facebook.com/profile.php?id=100001080911122" target='_blank'><i class="fa-brands fa-facebook fa-2xl"></i></a>
			<a href="https://www.linkedin.com/in/ivan-pranata-gunawan" target='_blank'><i class="fa-brands fa-linkedin fa-2xl"></i></a>
		</div>
        <div className='contact-call text-center'>
            <h4>Name			: Ivan Pranata Gunawan</h4>
            <h4>Email         : <a href="mailto:gunawanivan1999@gmail.com" target='_blank'>gunawanivan1999@gmail.com</a></h4>
            <h4>No. Telp		: <a href="https://wa.me/082281308123" target='_blank'>082281308123</a></h4>
        </div>
        <div className='bottom-up text-center'>
            <a href="#home"><i class="fa-solid fa-circle-up fa-2xl"></i></a>
        </div>
    </div>
  )
}

export default Footer