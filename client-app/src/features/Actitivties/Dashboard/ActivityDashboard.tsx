import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/IActivity'
import { ActivityList } from './ActivityList'

interface IProps  {
    activities: IActivity[]
}

export const ActivityDashboard: React.FC<IProps> = ({activities}) => {
    return (
        <Grid>
            <Grid.Column width={10}> 
                <ActivityList activities={activities}/>
            </Grid.Column>
            <Grid.Column width={6}>

            </Grid.Column>
        </Grid>
    )
}
