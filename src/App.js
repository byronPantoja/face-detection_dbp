import React, { Component } from 'react'

import Clarifai from 'clarifai'
import Particles from 'react-particles-js'
import Navigation from './components/Navigation/Navigation.component'
import SignIn from './components/Sign-In/SignIn.component'
import SignUp from './components/Sign-up/SignUp.component'
import Logo from './components/Logo/Logo.component'
import Rank from './components/Rank/Rank.component'
import ImageLinkForm from './components/Image-Link-Form/ImageLinkForm.component'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.component.js'
import './App.css'

const app = new Clarifai.App({
	apiKey: process.env.REACT_APP_CLARIFAI_DBP_API_KEY,
})

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
}
class App extends Component {
	constructor() {
		super()

		this.state = {
			input: '',
			imageUrl: '',
			box: {},
			route: 'signin',
			userSignedIn: false,
		}
	}

	calculateFaceLocation = (data) => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info.bounding_box
		const image = document.getElementById('inputimage')
		const width = Number(image.width)
		const height = Number(image.height)
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height,
		}
	}

	displayFaceRecognition = (box) => {
		console.log(box)
		this.setState({ box })
	}

	onInputChange = (event) => {
		this.setState({ input: event.target.value })
	}

	onButtonSubmit = () => {
		this.setState({ imageUrl: this.state.input })
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
			.then((response) =>
				this.displayFaceRecognition(this.calculateFaceLocation(response))
			)
			.catch((err) => console.log(err))
	}

	onRouteChange = (route) => {
		if (route === 'signout') {
			this.setState({ userSignedIn: false })
		} else if (route === 'home') {
			this.setState({ userSignedIn: true })
		}
		this.setState({ route: route })
	}

	render() {
		const { userSignedIn, imageUrl, route, box } = this.state
		return (
			<div className='App'>
				<Particles className='particles' params={particlesOptions} />
				<Navigation
					userSignedIn={userSignedIn}
					onRouteChange={this.onRouteChange}
				/>
				{route === 'home' ? (
					<div>
						<Logo />
						<Rank />
						<ImageLinkForm
							onInputChange={this.onInputChange}
							onButtonSubmit={this.onButtonSubmit}
						/>
						<FaceRecognition box={box} imageUrl={imageUrl} />
					</div>
				) : (
					<div>
						{route === 'signin' ? (
							<SignIn onRouteChange={this.onRouteChange} />
						) : (
							<SignUp onRouteChange={this.onRouteChange} />
						)}
					</div>
				)}
			</div>
		)
	}
}
export default App
