import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class TimeUntil extends Component {
state = {
	deadline: 'Dec,30,2018',
	days:'0',
	hours:'0',
	minutes:'0',
	seconds:'0'
}
getTimeUntil = (deadline) =>{
	const time = Date.parse(deadline) - Date.parse(new Date());
	let seconds = '0';
	let minutes = '0';
	let hours = '0';
	let days = '0';
	if(time < 0){
		console.log('Time Collapse')
	}else{
		 seconds = Math.floor((time/1000)%60);
		 minutes = Math.floor((time/1000/60)%60);
		 hours = Math.floor((time/1000*60*60)%24);
		 days = Math.floor(time/(1000*6*60*24));
	}
	this.setState({
		days : days,
		hours:hours,
		minutes:minutes,
		seconds:seconds
	})
} 
componentDidMount(){
	setInterval(()=>this.getTimeUntil(this.state.deadline),1000)
}
    render() {
        return (
        	<Slide left delay={1000}>
            <div className="countdown_wrapper">
            	<div className="countdown_top">
            		Event starts in
            	</div>
            	<div className="countdown_bottom">
            		<div className="countdown_item">
            			<div className="countdown_time">
            			{this.state.days}
            			</div>
            			<div className="countdown_tag">
            				Days
            			</div>
            		</div>
            		<div className="countdown_item">
            			<div className="countdown_time">
            			{this.state.hours}
            			</div>
            			<div className="countdown_tag">
            				Hr
            			</div>
            		</div>
            		<div className="countdown_item">
            			<div className="countdown_time">
            			{this.state.minutes}
            			</div>
            			<div className="countdown_tag">
            				Minute
            			</div>
            		</div>
            		<div className="countdown_item">
            			<div className="countdown_time">
            			{this.state.seconds}
            			</div>
            			<div className="countdown_tag">
            				Seconds
            			</div>
            		</div>
            	</div>
            </div>
            </Slide>
        );
    }
}

export default TimeUntil;
