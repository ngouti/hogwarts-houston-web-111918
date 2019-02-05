import React from 'react'
import HogList from './HogList'
import SearchForm from './SearchForm'


class HogContainer extends React.Component {

    state = {
        hogs: [],

      }
  
    componentDidMount() {
      fetch('http://localhost:3000/hogs')
      .then(res => res.json())
      .then(res => {
        this.setState({
          hogs: res
        })
      })
      
    }

    

    handleChange = (e) => {
        e.preventDefault()
        if(e.target.value == "name"){
            this.setState({
                hogs: this.state.hogs.sort((a, b) => a.name.localeCompare(b.name))
            })
        
        }
        else if(e.target.value == "weight"){
            this.setState({
                hogs: this.state.hogs.sort((a, b) => a.weight - b.weight)
            })
        }
        else {
            this.setState({
                hogs: this.state.hogs.filter(hog => (hog.greased === true))
            })
        }
    }
  
    hide = (hog) => {
        this.setState({
            hogs: this.state.hogs,
        
        })
    }
    
    // hiddenHogs = () => {
    //     if(this.state.show == false)
    // }

    render(){
        // console.log(this.state.hogs)
        
        return(
            <div className="container">
                <SearchForm handleChange={this.handleChange}/>
                <HogList hogs={this.state.hogs} />
                
            </div>

           
        )
    }

}

export default HogContainer;