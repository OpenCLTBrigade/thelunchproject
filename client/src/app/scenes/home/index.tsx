import { h } from 'preact'
import { Route, Switch } from 'react-router-dom'
import { Container, Title, Section } from 'bloomer'
import NavBar from './NavBar/NavBar'
const pages = []

export const NoMatch = () => (
    <div>
        <Title>Page Not Found</Title>
        Oops! Something has gone wrong and the page you were looking for could not be displayed!
    </div>
)

const Home = props => {
    console.log(props)
    return (
        <div>
            <NavBar history={props.history} />
            <Section>
                <Switch>
                    {pages.map((page, key) => (
                        <Route key={key} path={`${props.match.url}${page.to}`} component={page.component} />
                    ))}
                    <Route render={() => <Container children={<NoMatch />} />} />
                </Switch>
            </Section>
        </div>
    )
}

export default Home
