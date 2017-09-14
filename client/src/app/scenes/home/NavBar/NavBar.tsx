import { h, Component } from 'preact'

import { Container, Navbar, NavbarBrand, NavbarItem, NavbarMenu, NavbarStart, NavbarBurger } from 'bloomer'

export default class NavBar extends Component<any, { isActive: boolean; isDropdownOpen: boolean }> {
    state = { isActive: false, isDropdownOpen: false }

    constructor() {
        super()
    }

    onClickNav = () => {
        this.setState(state => ({ isActive: !state.isActive }))
    }

    onClickDropdown = () => {
        this.setState(state => ({ isDropdownOpen: !state.isDropdownOpen }))
    }

    render() {
        return (
            <Container>
                <Navbar>
                    <NavbarBrand>
                        <NavbarItem href="/">TheLunchProject</NavbarItem>
                        <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                    </NavbarBrand>
                    <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                        <NavbarStart>
                            <NavbarItem href="/">Home</NavbarItem>
                        </NavbarStart>
                    </NavbarMenu>
                </Navbar>
            </Container>
        )
    }
}
