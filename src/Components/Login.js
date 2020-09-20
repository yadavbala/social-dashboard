import React from 'react'
import validator from 'validator'
import axios from 'axios'
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            errorMsg:''
        }
    }

    handleEmailChange=(e)=>{
        const email=e.target.value
        this.setState({email})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.email==''){
             const errorMsg='Email not entered'  
             this.setState({errorMsg})
        }
        else{
       if(validator.isEmail(this.state.email)){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                console.log(response)
                const check=response.data.find(ele=>ele.email===this.state.email)
                if(check){
                    const userId=check.id
                    localStorage.setItem('login','true')
                    localStorage.setItem('id',userId)
                    this.props.history.push('/dashboard')
                }
                else{
                    const errorMsg='Email not matched'
                   this.setState({errorMsg})
                }
            })
       }
       else{
        const errorMsg='Invalid Email format'  
        this.setState({errorMsg})
       }
    }
    }

    render(){
        //console.log(this.props)
        return(
            <div className='centering'>
                <div className='card form-center'>
                    <h1 className='login-space'>LOGIN</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            placeholder='enter email'
                            className='form-control'
                        /> 
                        <span className='align-btn'><input type='submit' className='btn btn-primary'/></span>
                    </form>
                    <p className='error-message'>{this.state.errorMsg}</p>              
                </div>
            </div>   
        )
    }
}

export default Login