import React, { useState, FormEvent } from 'react'
import { Form, Segment, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/IActivity'

interface IProps {
    toggleEdit: (editMode: boolean) => void;
    activity: IActivity;
    onSaveChanges: (activity: IActivity) => void;
}


export const ActivityForm: React.FC<IProps> = ({toggleEdit,activity: initialStateForm,onSaveChanges}) => {
    
    const [activity, setActivity] = useState<IActivity>(initialStateForm);
    
    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const {name,value} = event.currentTarget;

        setActivity({...activity, [name]: value });

    }

    const handleSaveChanges = () => {

        onSaveChanges(activity);
    }
    

    return (
        <Segment>
            <Form>
                <Form.Input name="title" onChange={handleInputChange} placeholder="Title" value={activity.title}/> 
                <Form.TextArea name="description" onChange={handleInputChange} row="3" placeholder="Description" value={activity.description} /> 
                <Form.Input name="category" onChange={handleInputChange} placeholder="Category" value={activity.category} /> 
                <Form.Input name="date" onChange={handleInputChange} type="date" placeholder="Date" value={activity.date} /> 
                <Form.Input name="city" onChange={handleInputChange} placeholder="City" value={activity.city} /> 
                <Form.Input name="venue" onChange={handleInputChange} placeholder="Venue" value={activity.venue} /> 
                <Button.Group widths={2}>
                    <Button onClick={handleSaveChanges} positive content="Save" />
                    <Button onClick={()=> toggleEdit(false)} content="Cancel"/>
                </Button.Group>
            </Form>
        </Segment>
    )
}
