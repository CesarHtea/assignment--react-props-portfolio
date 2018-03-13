import React, { Component } from 'react';
import SkillList from './components/SkillList';
import EducationHistory from './components/EducationHistory';
import WorkHistory from './components/WorkHistory';

class App extends Component {
  render() {
  const dataSk = this.props.dataSk;
  const dataEd = this.props.dataEd;
  const dataJo = this.props.dataJo;
    return (
      <div className="App">
        
        <SkillList data={dataSk}/>
        <EducationHistory data={dataEd}/>
        <WorkHistory data={dataJo}/>

      </div>
    );
  }
}

export default App;
