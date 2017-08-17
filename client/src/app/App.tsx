import { h } from 'preact'
import { Route } from 'react-router-dom'
import EducatorAddForm from './educator/EducatorAddForm'
import Auth from './auth'

const About = () =>
    <div>
        <h2>About</h2>
    </div>

const App = () =>
    <div className="container-fluid">
        <Route path="/" exact component={EducatorAddForm} />
        <Route path="/auth" component={Auth} />
    </div>

export default App
