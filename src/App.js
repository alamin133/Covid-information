

import React from "react"
import "./index.css"
import CovidContainer from "./CovidContainer"

class App extends React.Component {
    
        
            state = {
                covid_world : {}
            }
        
    
    componentDidMount(){
        fetch("https://disease.sh/v3/covid-19/all")
        .then(response => response.json())
        .then(data => (
            this.setState(
                {
                    covid_world : data
                }
            )
        ))
        console.log(this.state.covid_world);
    }
    render(){
        return (
           <CovidContainer
           world={this.state.covid_world}
            />
        )
    }
}

export default App