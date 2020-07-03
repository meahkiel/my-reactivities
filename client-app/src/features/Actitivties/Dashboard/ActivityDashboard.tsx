import React, { useState, useEffect } from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/IActivity'
import { ActivityList } from './ActivityList'
import { ActivityView } from '../Detail/ActivityView'
import { ActivityForm } from '../Form/ActivityForm'
import axios from 'axios';

interface IProps {
   isCreateActivity: boolean;
   setIsCreateActivity: (isCreate: boolean) => void;
}

export const ActivityDashboard: React.FC<IProps> = ({isCreateActivity,setIsCreateActivity}) => {

    const [activities,setActivities] = useState<IActivity[]>([]);
    const [activity, setActivity] = useState<IActivity | null>(null);
    const [editMode,setEditMode] = useState(false);

    const handleSelectActivity = (id: string) => {
        setActivity(activities.filter(a => a.id === id)[0]);
        setEditMode(false);
    }
    
    
    const updateActivity = (activity : IActivity) => {
		
		if(activity.id.length === 0 ) {
			setActivities([...activities, activity]);
		}
		else {
			setActivities([...activities.filter(a => a.id !== activity.id),activity]);
		}
	}

   

    const handleActivityControl = () =>  {
       
        if(activity &&  !editMode)
            return <ActivityView activity={activity} toggleEdit={setEditMode} />
        
        if(editMode) return <ActivityForm 
                    toggleEdit={setEditMode} 
                    activity={activity!} 
                    onSaveChanges={updateActivity}/>
       
    }

    useEffect(() => {
        if(activities.length == 0) {
            axios.get<IActivity[]>('http://localhost:5000/api/activities')
                .then((res) => {
                    setActivities(res.data);
                });
        }
    }, [activities]);
    
    useEffect(() => {

        if(isCreateActivity){
            setActivity({
                id: "",
                title: "",
                description: "",
                category: "",
                date: "",
                venue: "",
                city: ""
            });
            setEditMode(true);
            setIsCreateActivity(false);
        } 
    })
    
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} onSelectActivity={handleSelectActivity} />
            </Grid.Column>
            <Grid.Column width={6}>
               {handleActivityControl()}
            </Grid.Column>
        </Grid>
    )
}
