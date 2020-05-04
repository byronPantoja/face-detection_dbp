import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className='white f3'>
				{`D3SIGNATI0N PR0T0C0L "${name}, W3 AR3 B0RG.`}
			</div>
			<div className='white f1'>{entries}</div>
		</div>
	);
};

export default Rank;
