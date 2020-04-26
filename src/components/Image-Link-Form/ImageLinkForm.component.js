import React from 'react';

import './ImageLinkForm.styles.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{
					'Insert an image of a humanoid and we will traverse time and space to assimilate them.'
				}
			</p>
			<div className='center'>
				<div className='center form pa4 br3 shadow-5'>
					<input
						type='text'
						className='f4 pa2 w-70 center'
						onChange={onInputChange}
					/>
					<button
						className='w-30 grow f4 link ph3 pv2 dib gray bg-light'
						onClick={onButtonSubmit}
					>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
