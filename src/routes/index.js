import React from'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
<<<<<<< HEAD
import TicTacToe from '../containers/TicTacToe'
=======
import Home from '../containers/Home'
>>>>>>> 08e26a1a0521b34f00f6dbdb126f0e25c12fae19
import Profile from '../containers/Profile'


const createRoutes = () => {
    return(
        <Route
            path='/'
            component={Template}
           >
        <IndexRoute
<<<<<<< HEAD
            component={TicTacToe}   
=======
            component={Home}   
>>>>>>> 08e26a1a0521b34f00f6dbdb126f0e25c12fae19
        />
        <Route
            path={'/profile'}
            component={Profile}
        />
        </Route> 
    )
}

const Routes = createRoutes()

export default Routes