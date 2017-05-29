import React, { Component } from 'react'
import { Menu, Segment, Container, Icon } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'o mnie' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Container className='container' fluid>
          <Segment inverted>
            <Menu inverted pointing secondary size='large' stackable>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                    <Icon name='home' size='large' />
              </Menu.Item>
              <Menu.Item name='o mnie' active={activeItem === 'o mnie'}  onClick={this.handleItemClick} />
              <Menu.Item name='oferta' active={activeItem === 'oferta'} onClick={this.handleItemClick} />
              <Menu.Item name='kontakt' active={activeItem === 'kontakt'} position='right' onClick={this.handleItemClick} />
            </Menu>
          </Segment>
        </Container>
    )
  }
}
