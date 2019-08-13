import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import Modal from '../Modal'
import "./style.css";


const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class Nav extends Component {

    render() {
        return (<ResponsiveContainer />)
    }

}
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    onLogoutButtonClick = () => {
        //back to the home page
        localStorage.clear();
        window.location.replace('/')
    }
    render() {
        const { children } = this.props
        const { fixed } = this.state
        const loggedInName = localStorage.getItem('name')
        const userToken = localStorage.getItem('userToken')
        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' className="titleHeader"><a href='/'>
                                    Home</a>
                                </Menu.Item>
                                <Menu.Item as='a' className="searchTitle"><a href='/searchdog'>Search Dogs</a></Menu.Item>

                                {!loggedInName ?
                                    <Menu.Item position='right'>
                                        <Modal className='registerModal' modalType="Register" />
                                        <p style={{ padding: "10%", fontSize: "20px" }}></p>
                                        <Modal className='loginModal' modalType="Login" /></Menu.Item> :
                                    <Menu.Item position='right'>
                                        <h3 style={{ padding: "5%", fontSize: "20px" }}>Hello, {loggedInName}</h3>
                                        <Button onClick={this.onLogoutButtonClick}>Logout</Button>
                                    </Menu.Item>}
                            </Container>
                        </Menu>
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}


class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state
        const loggedInName = localStorage.getItem('name')

        return (
            <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >
                <Sidebar
                    as={Menu}
                    animation='push'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item as='a' active href='/'>
                        Home
          </Menu.Item>
          <Menu.Item as='a' href='/searchdog' >Search Dogs</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 100, padding: '1em 0em' }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    {!loggedInName ?
                                        <Menu.Item position='right'>
                                            <Modal className='registerModal' modalType="Register" />
                                            <p style={{ padding: "10%", fontSize: "20px" }}></p>
                                            <Modal className='loginModal' modalType="Login" /></Menu.Item> :
                                        <Menu.Item position='right'>
                                            <h3 style={{ padding: "5%", fontSize: "20px" }}>Hello, {loggedInName}</h3>
                                            <Button onClick={this.onLogoutButtonClick}>Logout</Button>
                                        </Menu.Item>}
                                </Menu.Item>
                            </Menu>
                        </Container>
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Responsive>
        )
    }
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)



export default Nav