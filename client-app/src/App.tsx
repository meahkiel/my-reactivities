import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { cars } from './demo';
import { CarItem } from './CarItem';
import axios from 'axios';

class App extends Component {
	state = {
		values: []
	}

	componentDidMount() {
		axios.get('http://localhost:5000/api/values').then((res) => {
			this.setState({values: res.data});
			console.log(res);
		});
	}


	
	render() {

		const {values} = this.state;
		

		return (
			<div className="App">
				<ul>
					{values.map((value: any) => <li key={value.id}>{ value.name }</li> )}
				</ul>
		  </div>
		  )
	}
}

export default App;
