import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {
	state = {
		discountStart :0,
		discountEnd :88
	}
	porcentage = () =>{
		if(this.state.discountStart < this.state.discountEnd){
			this.setState({
				discountStart : this.state.discountStart + 1
			})
		}
	}

	componentDidUpdate(){
		setTimeout(()=>{
			this.porcentage()
		},10)
	}

    render() {
        return (
            <div className="center_wrapper">
            	<div className="discount_wrapper">
            		<Fade onReveal={()=>this.porcentage()}>
            			<div className="discount_porcentage">
	            			<span>{this.state.discountStart}%</span>
	            			<span>OFF</span>
	            		</div>
            		</Fade>
            		<Slide right>
            			<div className="discount_description">
            			<h3>hacker in your city</h3>
            			<p>Kya janna hia aakjn vakd vakf dkadf kad faskd fskjd fskd fskdj skd fskf </p>
            		
            			<MyButton 
            				text="Purchase tickets"
            				bck="#ffa800"
            				color="#ffffff"
            				link="http://google.com"
            			/>
            		</div>
            		</Slide>
            	</div>
            </div>
        );
    }
}

export default Discount;
