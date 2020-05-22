import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react'
import './App.css';
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
			<div>
				<Header as='h2'>
    				<Icon name='plug' />
    				<Header.Content>Uptime Guarantee</Header.Content>
  				</Header>
				<ul>
					{values.map((value: any) => <li key={value.id}>{ value.name }</li> )}
				</ul>
		  </div>
		  )
	}
}

export default App;
