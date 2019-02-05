import React from 'react'
import HogFront from './HogFront'
import HogBack from './HogBack'
import './card.css'

class HogCard extends React.Component {

    state = {
        front: true
    }

    showHog = () => {
        this.setState({
            front: false
        })
        
    }

    hideHog = () => {
        this.setState({
            front: true
        })
    }

    
  

    render(){
        // console.log(this.props.key)
        return(

            <div className="ui card" >
            
                {(this.state.front === true )   
                ? 
                 <HogFront hog={this.props} showHog={this.showHog}/> 
                : 
                <HogBack hog={this.props} hideHog={this.hideHog}/>
                }
                <button  className="hide">Hide</button>
            
            </div>

        )
    }

}

export default HogCard;