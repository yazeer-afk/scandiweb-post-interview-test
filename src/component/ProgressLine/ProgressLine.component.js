import {PureComponent} from 'react'
import '../../style/progress/main.scss'

export class ProgressLine extends PureComponent{

    getStyle = (selected, local) => {

        
        if(local === selected){
            return 'ProgressLineAnim'
        } else {
            return 'ProgressLine'
        }
        
    }
    
    render(){
        const {selected, local} = this.props
        const render = selected === local
        return(
            <div className={render
                ? 'ProgressLineAnim'
                : 'ProgressLine'
            }></div>
        )
    }
}

export default ProgressLine