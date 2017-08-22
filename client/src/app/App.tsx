import { h } from 'preact'
import { Route, Redirect } from 'react-router-dom'
import EducatorAddForm from './educator/EducatorAddForm'
import Auth from './auth'

const About = () =>
    <div>
        <h2>About</h2>
    </div>

const App = () =>
    <div className="container-fluid">
        <Route
            path="/"
            exact
            render={() => {
                return <Redirect to="/auth/login" />
            }}
        />
        <Route path="/auth" component={Auth} />
    </div>

export default App
