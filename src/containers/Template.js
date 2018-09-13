import React, {Component} from 'react'
<<<<<<< HEAD
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../components/NavDrawer'
import {Header,Main} from '../styled/Template'
=======
import MuiTHemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'
>>>>>>> 08e26a1a0521b34f00f6dbdb126f0e25c12fae19

injectTapEventPlugin()

class Template extends Component {

    render() {
        return (
<<<<<<< HEAD
            <MuiThemeProvider>
                <div>
                    <NavDrawer/>
                    <Header>
                    TicTacTuring
                    </Header>
                    <Main> 
                        {this.props.children} 
                    </Main> 
                </div>
            </MuiThemeProvider>
=======
            <MuiTHemeProvider>
                <div>
                    <header>
                        <h1>TicTacTuring</h1>
                        <RaisedButton
                            label={'test button'}
                            primary={true}
                            onClick={()=>{console.log('hello I work')}}
                        /> 
                    </header> 
                    <main> 
                        {this.props.children} 
                    </main> 
                </div>
            </MuiTHemeProvider>
>>>>>>> 08e26a1a0521b34f00f6dbdb126f0e25c12fae19
            
        )
    }
}

export default Template