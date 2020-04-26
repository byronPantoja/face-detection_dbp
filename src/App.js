import React, { Component } from 'react';

import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.component';
import Logo from './components/Logo/Logo.component';
import Rank from './components/Rank/Rank.component';
import ImageLinkForm from './components/Image-Link-Form/ImageLinkForm.component';
import './App.css';

const app = new Clarifai.App({
	apiKey: process.env.REACT_APP_CLARIFAI_DBP_API_KEY,
});

const particlesOptions = {
	particles: {
		number: {
			value: 50,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		line_linked: {
			shadow: {
				enable: true,
				color: '#5279ff',
				blur: 3,
			},
		},
	},
};
class App extends Component {
	constructor() {
		super();

		this.state = {
			input: '',
		};
	}

	onInputChange = (event) => {
		console.log(event.target.value);
	};

	onButtonSubmit = () => {
		console.log('click');
		app.models
			.predict(
				'a403429f2ddf4b49b307e318f00e528b',
				'https://samples.clarifai.com/face-det.jpg'
			)
			.then(
				function(response) {
					console.log(response);
				},
				function(err) {
					// there was an error
				}
			);
	};

	render() {
		return (
			<div className='App'>
				<Particles className='particles' params={particlesOptions} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm
					onInputChange={this.onInputChange}
					onButtonSubmit={this.onButtonSubmit}
				/>
				{/*

          <FaceRecognition />
        */}
			</div>
		);
	}
}

export default App;
