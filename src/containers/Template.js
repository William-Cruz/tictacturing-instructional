import React, {Component} from 'react'
import MuiTHemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

injectTapEventPlugin()

class Template extends Component {

    render() {
        return (
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
            
        )
    }
}

export default Template