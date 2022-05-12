import React from 'react'
import './Portofolio.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Portofolio() {
  return (
    <div id='portofolio' className='portfolio'>
        <div className="portfolio-section text-center">
			<h2><span> </span>PORTFOLIO<span> </span></h2>
		</div>
        <div className='portofolio-grids'>
            <div className='portofolio-col text-center'>
                <a href="https://theagency.id/tender/client/#/" target='_blank'>
                    <img
                        className="portfolio-img img-fluid"
                        src="./images/tender1.png"
                    />
                </a>
				<p>Website "The Agency Tender Client" </p>
            </div>
            <div className='portofolio-col text-center'>
                <a href="https://lelangbandwidth.com/#/" target='_blank'>
                    <img
                        className="portfolio-img img-fluid"
                        src="./images/lelang-bandwidth.png"
                    />
                </a>
				<p>Landing Page Website "Lelang Bandwidth" </p>
            </div>
        </div>

        <div className='portofolio-grids'>
            <div className='portofolio-col text-center'>
                <a href="https://play.google.com/store/apps/details?id=com.codify.sobattani" target='_blank'>
                    <img
                        className="portfolio-img-android img-fluid"
                        src="./images/sobat-tani.jpg"
                    />
                </a>
				<p>Mobile App "Sobat Tani" </p>
            </div>
            <div className='portofolio-col text-center'>
				<p className='text-CMS'>And some CMS admin applications <br/>that can't be displayed here.</p>
            </div>
        </div>
		{/* <div className="container">
			<div className="portfolio-grids">
				<div className="portfolio-grid col-md">
					<a href="https://theagency.id/tender/client/#/" target='_blank'>
                        <img
                            className="portfolio-img img-fluid"
                            src="./images/tender1.png"
                        />
                    </a>
					<p>Berikut portofolio saya yaitu "The Agency Tender Client" </p>
					<a className="rightarrow" href="http://depresi-cf.skripsi.seedlab.id/"><span> </span></a>
				</div>

                <div className="portfolio-grid col-md">
					<a href="https://theagency.id/tender/client/#/" target='_blank'>
                        <img
                            className="portfolio-img img-fluid"
                            src="./images/tender1.png"
                        />
                    </a>
					<p>Berikut portofolio saya yaitu "The Agency Tender Client" </p>
					<a className="rightarrow" href="http://depresi-cf.skripsi.seedlab.id/"><span> </span></a>
				</div>
					  
				<div className="clear"> </div>
			</div>
		</div> */}
    </div>
  )
}

export default Portofolio
