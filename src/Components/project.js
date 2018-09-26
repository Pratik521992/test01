import React, { Component } from 'react';
import ProjectItem from './projectItem'



class Projects extends Component {

    
  deleteProject(id){
      this.props.onDelete(id);
  }  
  render() {
      let temp;

    if(this.props.projectdata){

        temp = this.props.projectdata.map( projectdata => {

            return(

               < ProjectItem onDelete={this.deleteProject.bind(this)} key={projectdata.ProjectName} data={projectdata} />

            )

        })

    }
    
    return (
      <div>
          {temp}
          
      </div>
    );
  }
}

export default Projects;
