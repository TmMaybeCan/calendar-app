import React, { Component } from 'react';

export default class EventWindowManager extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let dialog = (
            <div className="dialog-wrapper">
                <div className="dialog">
                    <div className="event-details">
                        <input className="event-name" type="text" placeholder="type an event"/><br/>
                        <label htmlFor="">From:</label><br/>
                        <input className="date-choise" type="date"/>
                        <input className="time-choise" type="time"/><br/>

                        <label htmlFor="">To:</label><br/>
                        <input className="date-choise" type="date"/>
                        <input className="time-choise" type="time"/>
                    </div>
                    <div className="actions">
                        <button className="save btn">Save</button>
                        <button onClick={this.props.onClose} className="cancel btn">Cancel</button>
                    </div>
                </div>
            </div>
        );
        if (!this.props.isOpen) {
            dialog = null;
        }
        return(
            <div className="dialog-root">{dialog}</div>
        )
    }
}