import React, { Component } from 'react';

class WorkHistory extends Component {
	render(){
		const allData = this.props.data;
		return (
			<section>
			    <h4>Work Experience</h4>
			    <div className="job-timeline">

			      {allData.map(function(d){
			      	return (
			      		<div className="job">
					        <div className="job__years">
					          <h6 className="job__end">{d.years.end}</h6>
					          <h6 className="job__start">{d.years.start}</h6>
					        </div>
					        <h5 className="job__title">{d.title}</h5>
					        <h5 className="job__company">{d.company}</h5>
					        <p className="job__description">{d.description}</p>
				      	</div>
			      	)	
			    })}
    			</div>
  			</section>
		)
	}
}

export default WorkHistory;