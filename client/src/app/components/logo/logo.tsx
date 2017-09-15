import { h, FunctionalComponent } from 'preact'
import * as logo from './logo.svg'
import * as cxs from 'cxs'

type LogoProps = {
    className?: string
    size?: 'small' | 'medium' | 'large'
}

const container = cxs({
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
})

const getSize = (size: 'small' | 'medium' | 'large') => {
    let width = size === 'small' ? '100px' : size === 'large' ? undefined : '300px'

    return cxs({ width })
}

const Image: FunctionalComponent<LogoProps> = ({ className, size }) => {
    return (
        <div class={`${container} ${className && className}`}>
            <img src={logo as any} alt="logo" class={`${getSize(size)}`} />
        </div>
    )
}

export default Image
