import React, {Component} from "react";
import July from "../CalendarTask/July"

export default class CalendarApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: [
                {id: 1, day: <span className="day">Mon<i className="fas fa-biohazard"></i></span>},
                {id: 2, day: <span className="day">Tue<i className="fas fa-battery-full"></i></span>},
                {id: 3, day: <span className="day">Wed<i className="fas fa-flushed"></i></span>},
                {id: 4, day: <span className="day">Thu<i className="fas fa-bible"></i></span>},
                {id: 5, day: <span className="day">Fri<i className="fab fa-studiovinari"></i></span>},
                {id: 6, day: <span className="day">Sat<i className="fas fa-bell-slash"></i></span>},
                {id: 7, day: <span className="day">Sun<i className="fas fa-cloud-showers-heavy"></i></span>}
            ]
        }
    }
    render() {
        const {days} = this.state;
        const displayDay = days.map((element, index) => {
            return <div key={index.id} className="day">{element.day}</div>
        })
        return(
            <div className="calendar-wrapper">
                <h1 className="month">
                    <button title="Previous month"className="arrow-btn first"><i class="fas fa-chevron-left"></i></button>
                    <i class="far fa-calendar-alt"></i>
                        July 2019
                    <i class="far fa-calendar-alt"></i>
                    <button title="Next month" className="arrow-btn second"><i class="fas fa-chevron-right"></i></button> 
                </h1>

                <div className="days">
                    {displayDay}
                </div>
                <July/>
            </div>
        )
    }
}

