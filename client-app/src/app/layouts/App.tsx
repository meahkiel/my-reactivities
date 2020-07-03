import React, { useState, useEffect, Fragment } from 'react';
import { Header, Icon, Container } from 'semantic-ui-react'
import { NavBar } from '../../features/Navs/NavBar';
import { ActivityDashboard } from '../../features/Actitivties/Dashboard/ActivityDashboard';



const App = () => {
	
	const [isCreate,setIsCreate] = useState(false);
	

	

	return (
		<Fragment>
			<NavBar onButtonCreateClick={setIsCreate} />
			<Container style={{ marginTop: '7em' }}>
				<ActivityDashboard 
					isCreateActivity={isCreate}
					setIsCreateActivity={setIsCreate}
					/>
			</Container>
		</Fragment>
	)

}

export default App;
