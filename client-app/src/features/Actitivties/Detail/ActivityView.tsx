import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/IActivity'

interface IProps {
    activity: IActivity,
    toggleEdit: (editMode: boolean) => void
}

export const ActivityView: React.FC<IProps> = ({ activity,toggleEdit }) => {
    return (
        <Card fluid>
            <Image src={`/assets/images/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    <span>{activity.description}</span><br/>
                    {activity.venue},{activity.city}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button basic color='blue' content='Edit' onClick={() => toggleEdit(true)} />
                    <Button basic color='blue' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
