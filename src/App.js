import React from 'react'
import{BrowserRouter,Route} from 'react-router-dom'
//import Login from './Components/Login'
//import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
    return(
        <BrowserRouter>
            <div>
                {/*<Route path='/login' component={Login}/>*/}
                {/*<Route path='/dashboard' component={Dashboard}/>*/}
                <Route path='/' component={Form}/> 
            </div>
        </BrowserRouter>
    )
}

export default App