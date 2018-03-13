import React, { Component } from 'react';

class SkillList extends Component {
	render(){
		const allData = this.props.data;
		return (
			<section>
				<h4>Skills</h4>
				<div className='skills-list'>
					{allData.map(function(d){
						return <span className='skills-list__single'>{d}</span>
					})}
				</div>
			</section>
		);
	}
}

export default SkillList;
