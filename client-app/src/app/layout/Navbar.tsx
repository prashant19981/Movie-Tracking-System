
import { Container, Dropdown, Menu } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

export default function Navbar(){
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    Movie Tracking System
                </Menu.Item>
                <Menu.Item name='Movies' />
                <Menu.Item name="Contact" />
                <Menu.Item name="About us" />
                <Menu.Menu position='right'>
                    <Dropdown item text='Profile'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Your Profile</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Container>

        </Menu>
    );
}

