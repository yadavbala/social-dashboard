import React from 'react'
import axios from 'axios'
class Dashboard extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            posts:[]
        }
    }

    componentDidMount(){
        const userId=localStorage.getItem('id')
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response)=>{
            //console.log(response)
            const user=response.data
            console.log(user)
            this.setState({user})
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response)=>{
            console.log(response)
            const posts=response.data
            this.setState({posts})
        })
  }

    handleLogout=()=>{
        localStorage.clear()
        this.props.history.push('/login')
    }

        render(){
            const status=localStorage.getItem('login')
            console.log(status)
            console.log(Object.keys(this.state.user))
            return(
                <div className='dashboard-center'>
                    {status && <div className='logout'><button className='btn btn-danger' onClick={this.handleLogout}>logout</button></div>}
                    <div className='card align-content bg-primary'>
                            <div className='innercontent-align'>
                                <p>{this.state.user.name}</p>
                                <p>{this.state.user.email}</p>
                                <p>{this.state.user.phone}</p>
                            </div>
                            {Object.keys(this.state.user).length>0 &&(
                            <div className='innercontent-align'>
                                <p>{this.state.user.company.name}</p>
                                <p>{this.state.user.company.bs}</p> 
                                <p>{this.state.user.company.catchPhrase}</p> 
                            </div>
                            )}
                        
                    </div>
                    <div className='card' style={{padding:'10px'}}>
                        {
                            this.state.posts.map((ele,i)=>{
                                return(
                                    <div key={i} className='card bg-info' style={{padding:'10px',margin:'10px'}}>
                                        <h1 style={{color:'gold'}}>{ele.title}</h1>
                                        <p style={{color:'#fff'}}>{ele.body}</p>
                                    </div>
                            
                                )
                            })
                        }
                    </div>
               
                </div>
            )
        }
    }


export default Dashboard