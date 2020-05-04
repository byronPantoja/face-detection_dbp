import React from 'react';

const Navigation = ({ onRouteChange, userSignedIn }) => {
	if (userSignedIn) {
		return (
			<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<p
					onClick={() => onRouteChange('signin')}
					className='f3 link dim black underline pa3 pointer'
				>
					Sign Out
				</p>
			</nav>
		);
	} else {
		return (
			<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<p
					onClick={() => onRouteChange('home')}
					className='f3 link dim black underline pa3 pointer'
				>
					Sign In
				</p>
				<p
					onClick={() => onRouteChange('signup')}
					className='f3 link dim black underline pa3 pointer'
				>
					Sign up
				</p>
			</nav>
		);
	}
};

export default Navigation;
