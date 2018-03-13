import React, { Component } from 'react';

class EducationHistory extends Component {
	render(){
		const allData = this.props.data;
		return (
			<section>
 				<h4>Education</h4>
  				<div className='degree-list'>

    			{allData.map(function(d){
    				return (
    					<div className='degree'>
					      	<h5 className="degree__institute">{d.institute}</h5>
					      	<p className="degree__field">{d.fieldOfStudy}</p>
					      	<p className="degree__dates">{d.dates}</p>
					    </div>
    				)				
    			})}
  				</div>
			</section>
		)
	}
}

export default EducationHistory;