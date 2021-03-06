import React from 'react'
import { Item, Button, Label, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/IActivity'

interface IProps {
    activities: IActivity[],
    onSelectActivity: (id: string) => void
}

export const ActivityList: React.FC<IProps> = ({ activities,onSelectActivity }) => {
    return (
        <Segment clearing>
            <Item.Group divided>
                {activities.map((activity) => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='title'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated="right" content="View" color="blue" onClick={() => onSelectActivity(activity.id)} />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
