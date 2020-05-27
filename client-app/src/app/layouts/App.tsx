import React, { useState, useEffect, Fragment } from 'react';
import { Header, Icon, Container } from 'semantic-ui-react'
import axios from 'axios';
import{ IActivity} from '../models/IActivity'
import { NavBar } from '../../features/Navs/NavBar';
import { ActivityDashboard } from '../../features/Actitivties/Dashboard/ActivityDashboard';



const App = () => {

	const [activities,setActivities] = useState<IActivity[]>([]);

	useEffect(() => {
		axios
			.get<IActivity[]>('http://localhost:5000/api/activities')
				.then((res) => {
					setActivities(res.data);
		});
	}, []);

	

	return (
		<Fragment>
			<NavBar />
			<Container style={{marginTop: '7em'}}>
				<ActivityDashboard activities={activities} />
			</Container>
		</Fragment>
	)

}

export default App;
