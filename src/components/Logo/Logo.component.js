import React from 'react'
import Tilt from 'react-tilt'

import dbplogo from '../../assets/dbp2020.svg'
import './Logo.styles.css'

const Logo = () => {
	return (
		<div className='center ma4 mt0'>
			<Tilt options={{ max: 55 }} style={{ height: 250, width: 250 }}>
				<div className='Tilt-inner'>
					<img src={dbplogo} alt='dbplogo' style={{ paddingTop: '5px' }} />
				</div>
			</Tilt>
		</div>
	)
}

export default Logo
