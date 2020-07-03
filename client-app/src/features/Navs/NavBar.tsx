import React from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'


interface IProps {
    onButtonCreateClick: (isCreate: boolean) => void;
}
export const NavBar: React.FC<IProps> = ({onButtonCreateClick}) => {
    return (
        <Menu fixed="top" inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/Images/logo.png" alt="logo" style={{marginRight : '10px'}} />
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item >
                    <Button onClick={() => onButtonCreateClick(true)} positive content="Create Activity"/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}
