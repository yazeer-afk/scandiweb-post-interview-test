import Tick from 'Component/Tick/Tick.component'
import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import '../../style/progress/main.scss'

export class ProgressCircle extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            clName: 'ProgressCircle'
        }
    }

    render() {

        const { step, title, selected, local } = this.props
        const animrender = selected === local
        if (animrender) {
            this.setState({
                clName: 'ProgressCircleAnim'
            })
        }

        return (
            <div className='column align-center'>
                <div className={this.state.clName}>
                    <span>{step}</span>
                </div>
                <span>{title}</span>
            </div>
        )
    }
}

ProgressCircle.PropTypes = {
    step: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    local: PropTypes.string.isRequired
}

export default ProgressCircle