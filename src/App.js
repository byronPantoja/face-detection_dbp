import React, { Component } from 'react';

import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.component';
import Logo from './components/Logo/Logo.component';
import Rank from './components/Rank/Rank.component';
import ImageLinkForm from './components/Image-Link-Form/ImageLinkForm.component';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.component.js';
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
			imageUrl: '',
			box: {},
		};
	}

	calculateFaceLocation = (data) => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputimage');
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol:width - (clarifaiFace.right_col * width),
			bottomRow: height - (clarifaiFace.bottom_row * height),
		};
	};

	displayFaceRecognition = (box) => {
		console.log(box);
		this.setState({ box });
	};

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	};

	onButtonSubmit = () => {
		this.setState({ imageUrl: this.state.input });
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
			.then((response) =>
				this.displayFaceRecognition(this.calculateFaceLocation(response))
			)
			.catch((err) => console.log(err));
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
				<FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
			</div>
		);
	}
}

export default App;
