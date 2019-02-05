import React from 'react'
import './SearchForm.css'


class SearchForm extends React.Component {

    render(){
        return(
       <div>
           <form>
           
               <label>
                   Filter based on name, weight, or greased.
                   <div>
                   <select onChange={e=>this.props.handleChange(e)} >
                   <option >SELECT ONE</option>

                        <option value="name" name="name">Name</option>
                        <option value="weight" name="weight">Weight</option>
                        <option value="greased" name="greased">Greased</option>
                </select>
                </div>
                </label>
                
                </form>

       </div>
        )
    }

}

export default SearchForm;