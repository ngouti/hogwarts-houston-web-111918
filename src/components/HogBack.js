import React from 'react'


class HogBack extends React.Component {

    render(){
        // console.log(this.props.key)
        return(
            <div className="ui card" onClick={e => {this.props.hideHog(e)}}>
                 <h3>Specialty:</h3>

                 <div className="ui card">{this.props.hog.specialty}</div>
                 <h3>Weight:</h3>

                 <div className="ui card">{this.props.hog.weight}</div>
                 <h3>Highest Medal Achieved:</h3>
                 <div className="ui card">{this.props.hog["highest medal achieved"]}</div>

            </div>

        )
    }

}

export default HogBack;