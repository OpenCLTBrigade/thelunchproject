import { h } from 'preact'
import { Route, Redirect } from 'react-router-dom'
import EducatorAddForm from './educator/EducatorAddForm'
import Login from './scenes/login'
import Register from './scenes/register'
import Home from './scenes/home'
import AuthService from './services/auth/auth'
import { Container } from 'bloomer'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            AuthService.isLoggedIn() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
            )}
    />
)

const App = () => (
    <Container>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </Container>
)

export default App
