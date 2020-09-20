import React from 'react'
import List from './List'
class Form extends React.Component{
    constructor(){
        super()
        this.state={
            todos:[],
            name:''
        }
    }

    handleRemove=(item)=>{
        console.log(item)
        this.setState(function(prevState){
            return{
                todos:prevState.todos.filter(ele=>{
                    return ele.name!=item
                })
            }
        })
    }

    handleChange=(e)=>{
        const name=e.target.value
        this.setState({name})
    }

    handleNameChange=(text,id)=>{
        console.log(text,id)
        const items= this.state.todos
        items.map(ele=>{
            if(ele.id==id){
                ele.name=text
            }
        })
        this.setState({items})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
      const formData={
          id:Number(new Date()),
          name:this.state.name
      }
      this.setState(function(prevState){
          return{
              todos:prevState.todos.concat(formData)
          }
      })
        this.setState({
            name:''
        })
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder='enter details'
                        />
                    <input type='submit' value='add'/>
                </form>
                <List data={this.state.todos} handleRemove={this.handleRemove} handleNameChange={this.handleNameChange}/>
            </div>
        )
    }
}

export default Form