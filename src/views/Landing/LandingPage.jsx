import React, { Component } from 'react';

class LandingPage extends Component {

  render() {
    return (
		<div className="landing-page page">
			<div className="landing-image-container">
				<img
					className="landing-image"
					src={require('../../images/landing.svg')}
					alt="Nucleus ry"
					height="100%"
				/>
			</div>
		</div>
	);
  }
}

export default LandingPage;
