import React, { Component } from 'react';



class ProjectItem extends Component {


  deleteProject(id)
  {
    this.props.onDelete(id);
  }
  

  render() {
     
    return (
      <li>
         <strong> {this.props.data.ProjectName}</strong> - {this.props.data.Wage} <button className="btn" onClick={this.deleteProject.bind(this, this.props.data.id)} >Delete</button>
          
      </li>
    );
  }
}

export default ProjectItem;
