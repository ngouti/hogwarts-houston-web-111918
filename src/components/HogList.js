import React from 'react'
import HogCard from './HogCard'
import SearchForm from './SearchForm'
import './container.css'



class HogList extends React.Component {


    state = {
        show: true
    }

    hide = (hog) => {
        this.setState({
            show: false
        })
    }



    render(){
        console.log(this.props)
        return(
             <div className="ui grid container">
                
                {this.props.hogs.map(hog => (
                  <HogCard key={hog.id} {...hog} state={this.state.show}/>
                   
                ))}
                  

            </div>
            
        )
    }

}

export default HogList;