import React, { Component } from 'react';

class LandingPage extends Component {

  render() {
    return (
		<div className="landing-page page">
			<div className="landing-image-container">
				<img
					className="landing-image"
					src={require('../../images/landing.svg')}
					alt="Urho Matti 3.0 logo"
					height="100%"
					width="100%"
				/>
			</div>
		</div>
	);
  }
}

export default LandingPage;
