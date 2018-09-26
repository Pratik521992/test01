import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './project';


class AddProject extends Component {

    constructor(){
        super()

        this.state = {

            newData : []
        }

    }

    static defaultProps = {

        categories: ['$2000', '$7000', '$9000']
    }


  handledelete(id){

    let data = this.state.newData;
    let index =  data.findIndex( x => x.id === id);
    data.splice(index, 1);
    this.setState({newData : data});

  }

    handlesubmit(e){

       

        this.setState( { newData : {

            id          : uuid.v4(),
            ProjectName : this.refs.title.value,
            Wage        : this.refs.wage.value
        }

        }, function(){

            //console.log(this.state);
            this.props.projectdata(this.state.newData);

        })

       
        e.preventDefault();

    }

    componentWillMount(){

        this.getData(); 
       
      }

    getData(){

        this.setState({
          newData: [{
            'id'         : uuid.v4(),
            'ProjectName': 'Business Project',
            'Wage': '$50000'
          },
          {
            'id'         : uuid.v4(),
            'ProjectName': 'Food Project',
            'Wage': '$10000'
          },
          {
            'id'         : uuid.v4(),
            'ProjectName': 'Sports Project',
            'Wage': '$20000'
          }
          ]})
      }
    render() {
        let  categorieoption = this.props.categories.map( wage => {


            return <option key={wage} value={wage}>{wage}</option>
        });

        
        return (
            <div>
                <h2>Add new Projects</h2>
                <form onSubmit = {this.handlesubmit.bind(this)}>
                    <div>
                        <label> Enter Project Name</label>
                        <input type = 'text' ref = 'title' ></input>

                    </div> 
                    <div>
                        <label> Select Project type</label>
                        <select ref = 'wage'>
                            {categorieoption}
                        </select>    
                         
                    </div>   
                    <input className="btn" type = 'submit' value='Submit ' />
                </form> 

                 <Projects projectdata = {this.state.newData} onDelete = {this.handledelete.bind(this)}/>   
            </div>    
          
        );
    }
}

export default AddProject;
