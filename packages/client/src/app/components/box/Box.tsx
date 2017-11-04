import { h, Component } from 'preact'
import { Box, Container } from 'bloomer'
import * as cxs from 'cxs'

const box = cxs({
    maxWidth: '400px',
    margin: 'auto'
})

const mq = window.matchMedia('(min-width: 769px)')

export default class extends Component<any, { isDesktop: boolean }> {
    state = { isDesktop: mq.matches }

    onWidthChange = () => {
        this.setState(() => ({ isDesktop: mq.matches }))
    }

    componentDidMount() {
        mq.addListener(this.onWidthChange)
    }

    componentDidUnmout() {
        mq.removeListener(this.onWidthChange)
    }
    render({ children }) {
        return this.state.isDesktop ? (
            <Box className={box}>{children && children}</Box>
        ) : (
            <Container>{children && children}</Container>
        )
    }
}
