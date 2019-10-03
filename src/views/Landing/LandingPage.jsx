import React, { Component } from 'react';

class LandingPage extends Component {

  render() {
    return (
		<div className="landing-page page">
			<h2 className="landing-heading">Urho Matti v3.0</h2>
			<div className="landing-images">
				<a
					href="https://www.digit.fi"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="landing-image"
						src={require('../../images/digit.svg')}
						alt="Digit ry"
					/>
				</a>
				<a
					href="https://www.nucleus.fi"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="landing-image"
						src={require('../../images/nucleus.png')}
						alt="Nucleus ry"
					/>
				</a>
			</div>
		</div>
	);
  }
}

export default LandingPage;
