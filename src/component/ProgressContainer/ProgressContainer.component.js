import { PureComponent } from 'react'

export class ProgressContainer extends PureComponent{

    render(){

        return(
            <div className='ProgressContainer'>
                {this.props.children}
            </div>
        )
    }
}

export default ProgressContainer