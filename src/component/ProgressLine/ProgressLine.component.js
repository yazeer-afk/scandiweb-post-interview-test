import PropTypes from 'prop-types';
import {PureComponent} from 'react'
import '../../style/progress/main.scss'

export class ProgressLine extends PureComponent{

    constructor(props){
        super(props)

        this.state = {
            clName: 'ProgressLine'
        }
    }
    
    render(){
        const {selected, local} = this.props
        const animrender = selected === local
        if(animrender){
            this.setState({
                clName: 'ProgressLineAnim'
            })
        }
        
        return(
            <div className={this.state.clName}></div>
        )
    }
}

ProgressLine.PropTypes = {
    selected: PropTypes.string.isRequired,
    local: PropTypes.string.isRequired
}

export default ProgressLine