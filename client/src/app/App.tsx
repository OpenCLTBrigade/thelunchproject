import { h } from 'preact'
import { Route } from 'react-router-dom'
import EducatorAddForm from './educator/EducatorAddForm'
const App = () =>
    <div className="container-fluid">
        <Route path="/" component={EducatorAddForm} />
    </div>

export default App
