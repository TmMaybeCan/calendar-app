import React, {Component} from "react"
import CalendarApp from "./CalendarTask/CalendarApp"


export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="app-main-container">
                <CalendarApp/>
            </div>
        )
    }
}

