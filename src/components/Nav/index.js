
import React, { Component } from 'react'
import {
    Container,
    Icon,
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
//   state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
      return( <ResponsiveContainer/>)
  }

}


class DesktopContainer extends Component {
    state = {
      isLoggedIn: false
    }
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em', backgroundSize: 'cover', backgroundImage: `url(https://images.pexels.com/photos/1633522/pexels-photo-1633522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`}}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container className ="Navbar">
                <Menu.Item as='a' style={{fontSize:'35px'}}><a href='/'>
              BorroWoof</a>
                  </Menu.Item>
                  <Menu.Item as='a'>How it works.</Menu.Item>
                  <Menu.Item position='right'>
                    {/* <Button as='a' inverted={!fixed} primary={fixed} style={{ marginRight: '20px' }}>
                      Log in
                    </Button> */}
                    <Modal modalType="Register"/>

                    <p style={{padding: "5%", fontSize: "20px"}}> or </p>
                    <Modal modalType="Login"/>
                    {/* <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '20px' }}>
                      Sign Up
                    </Button> */}
                  </Menu.Item>
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
            <Menu.Item as='a' active><a href='/'>
              BorroWoof</a>
            </Menu.Item>
            <Menu.Item as='a'>How it works</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>
  
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                  <Modal modalType="Register"/>
                    <Modal modalType="Login"/>
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
  

export default Nav;