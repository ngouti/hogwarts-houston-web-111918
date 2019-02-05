import React from 'react'


class HogFront extends React.Component {

    render(){
       
        return(
            <div className="ui card" onClick={e => {this.props.showHog(e)}}>
                <p>{this.props.hog.name}</p>
                <img src={this.props.hog.image}></img>
            </div>

        )
    }

}

export default HogFront;