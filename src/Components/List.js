import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import PropTypes from 'prop-types'
function List(props){
        
    return(
        <div>
            <h2>List</h2>
            <ul>
                {props.data.length>0 &&(
                    props.data.map(ele=>{
                    return <li key={ele.id}><input type='text' value={ele.name} onChange={(e)=>{props.handleNameChange(e.target.value,ele.id)}}/><i className='fa fa-trash' onClick={()=>{props.handleRemove(ele.name)}}></i></li>
                    })
                )}
            </ul>
        </div>
    )
}

List.propTypes={
    data:PropTypes.array.isRequired,
    handleNameChange:PropTypes.func.isRequired,
    handleRemove:PropTypes.func.isRequired
}

export default List