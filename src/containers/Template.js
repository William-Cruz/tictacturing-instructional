import React, {Component} from 'react'
import MuiTHemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../components/NavDrawer'
injectTapEventPlugin()

class Template extends Component {

    render() {
        return (
            <MuiTHemeProvider>
                <div>
                    <NavDrawer/>
                    <main> 
                        {this.props.children} 
                    </main> 
                </div>
            </MuiTHemeProvider>
            
        )
    }
}

export default Template