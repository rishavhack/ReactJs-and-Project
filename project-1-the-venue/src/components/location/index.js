import React from 'react';

const Location = () =>{
	return (
			<div className="location_wrapper"> 
				<iframe 
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.02166346847875!2d77.70145148172962!3d12.949658316936299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fb9ff9afaed99ad!2sKK+Indane+Gas+Agency!5e0!3m2!1sen!2sin!4v1544458319872" 
				width="100%" height="500px" 
				frameBorder="0" 
				allowFullScreen></iframe>

				<div className="location_tag">
					<div>
						Location
					</div>
				</div>
			</div>
		)
}
export default Location;
