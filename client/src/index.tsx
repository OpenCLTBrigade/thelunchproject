import { h, render } from 'preact'

import App from './app/App'
import { BrowserRouter as Router } from 'react-router-dom'

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)
