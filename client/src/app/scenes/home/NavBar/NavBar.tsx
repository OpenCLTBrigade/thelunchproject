import { h, Component } from 'preact'

import { Container, Navbar, NavbarBrand, NavbarItem, NavbarMenu, NavbarStart, NavbarBurger, NavbarEnd } from 'bloomer'
import AuthService from '../../../services/auth/auth'
export default class NavBar extends Component<any, { isActive: boolean; isDropdownOpen: boolean; history?: any }> {
    state = { isActive: false, isDropdownOpen: false, history: undefined }

    constructor(props) {
        super()

        this.state.history = props.history
    }

    onClickNav = () => {
        this.setState(state => ({ isActive: !state.isActive }))
    }

    onClickDropdown = () => {
        this.setState(state => ({ isDropdownOpen: !state.isDropdownOpen }))
    }

    onClickLogout = () => {
        AuthService.logout()
    }

    render({ history }) {
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
                        <NavbarEnd>
                            <NavbarItem href="/login" onClick={this.onClickLogout}>
                                Sign Out
                            </NavbarItem>
                        </NavbarEnd>
                    </NavbarMenu>
                </Navbar>
            </Container>
        )
    }
}
