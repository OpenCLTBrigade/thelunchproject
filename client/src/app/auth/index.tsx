import { h, FunctionalComponent } from 'preact'
import { Route } from 'react-router-dom'

import Login from './login'
import Register from './register'

export default () => {
    return (
        <div>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/register" component={Register} />
        </div>
    )
}
