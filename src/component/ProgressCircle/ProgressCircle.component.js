import { PureComponent } from 'react'
import '../../style/progress/main.scss'

export class ProgressCircle extends PureComponent {

    render() {

        const {step, title} = this.props

        return (
            <div className='column align-center'>
                <div className='ProgressCircle'>
                    <span>{step}</span>
                </div>
                <span>{title}</span>
            </div>
        )
    }
}

export default ProgressCircle